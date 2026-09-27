import { IsNotEmpty, IsString, IsUUID } from "class-validator";

// Тело запроса POST /api/apartment
export class CreateApartmentDto {
    @IsString({ message: "name must be a string" })
    @IsNotEmpty({ message: "name is required" })
    name!: string;
}

// Параметры пути GET /api/apartment/:id
export class GetApartmentByIdParamsDto {
    @IsUUID(4, { message: "id must be a valid UUID v4" })
    id!: string;
}