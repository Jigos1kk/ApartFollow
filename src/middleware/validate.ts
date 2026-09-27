import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { NextFunction, Request, RequestHandler, Response } from "express";
import { HttpError } from "../errors/HttpError.js";

type Source = "body" | "params" | "query";

// Валидирует данные запроса и кладёт типизированный DTO обратно в req[source]
export const validateDto = <T extends object>(
    dtoClass: new () => T,
    source: Source = "body"
): RequestHandler => {
    return async (req: Request, res: Response, next: NextFunction) => {
        const dto = plainToInstance(dtoClass, req[source], { excludeExtraneousValues: false });
        const errors = await validate(dto);

        if (errors.length > 0) {
            const details = errors.map((error) => ({
                field: error.property,
                message: Object.values(error.constraints ?? {})[0],
            }));

            next(new HttpError(400, "Validation failed", details));
            return;
        }

        req[source] = dto;
        next();
    };
};