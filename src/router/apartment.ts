import { Router } from "express";
import { createApartment, getAllApartments, getApartmentById } from "../controllers/apartmentController.js";
import { CreateApartmentDto, GetApartmentByIdParamsDto } from "../dtos/apartment.dto.js";
import { validateDto } from "../middleware/validate.js";

const router = Router();

router.get("/", getAllApartments);
router.get("/:id", validateDto(GetApartmentByIdParamsDto, "params"), getApartmentById);
router.post("/", validateDto(CreateApartmentDto), createApartment);

export default router;