import { Request, Response } from "express";

// 404 для несуществующих маршрутов
export const notFound = (req: Request, res: Response): void => {
    res.status(404).json({
        success: false,
        message: `Route ${req.method} ${req.originalUrl} not found`,
    });
};