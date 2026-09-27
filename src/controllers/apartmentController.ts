import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source.js";
import { CreateApartmentDto } from "../dtos/apartment.dto.js";
import { Apartment } from "../entities/Apartment.js";
import { HttpError } from "../errors/HttpError.js";

const apartmentRepository = AppDataSource.getRepository(Apartment);

export const getAllApartments = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const apartments = await apartmentRepository.find();

        return res.status(200).json({
            success: true,
            data: apartments,
        });
    } catch (error) {
        next(error);
    }
};

export const createApartment = async (
    req: Request<unknown, unknown, CreateApartmentDto>,
    res: Response,
    next: NextFunction
) => {
    try {
        const apartment = apartmentRepository.create({ name: req.body.name });
        const savedApartment = await apartmentRepository.save(apartment);

        return res.status(201).json({
            success: true,
            data: savedApartment,
        });
    } catch (error) {
        next(error);
    }
};

export const getApartmentById = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        // Параметры уже провалидированы middleware validateDto
        const id = req.params.id as string;

        const apartment = await apartmentRepository.findOne({
            where: { uuid: id },
        });

        if (!apartment) {
            throw new HttpError(404, "Apartment not found");
        }

        return res.status(200).json({
            success: true,
            data: apartment,
        });
    } catch (error) {
        next(error);
    }
};