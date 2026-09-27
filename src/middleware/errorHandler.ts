import { NextFunction, Request, Response } from "express";
import { HttpError } from "../errors/HttpError.js";

// Централизованный обработчик ошибок
export function errorHandler(err: unknown, req: Request, res: Response, _next: NextFunction): void {
    const statusCode = getStatusCode(err);
    const message = err instanceof Error ? err.message : "Internal Server Error";

    console.error(`[ERROR] ${req.method} ${req.originalUrl}:`, message);

    res.status(statusCode).json({
        success: false,
        message,
        ...(err instanceof HttpError && err.details ? { errors: err.details } : {}),
    });
}

// Код из HttpError или из ошибок библиотек (например, body-parser), иначе 500
function getStatusCode(err: unknown): number {
    if (err instanceof HttpError) {
        return err.statusCode;
    }
    const status = (err as { status?: unknown }).status;
    if (typeof status === "number") {
        return status;
    }
    return 500;
}