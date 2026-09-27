import { Request, Response, Router } from "express";
import ApartmentRouter from "./apartment.js";

const router = Router();

router.use("/apartment", ApartmentRouter);

router.get("/health", (req: Request, res: Response) => {
    res.status(200).json({
        success: true,
        message: "Service healthy!",
    });
});
router.get("/error", (req: Request, res: Response) => {
    throw new Error("This Error endpoint");
});

export default router;