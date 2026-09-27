import express from "express";
import router from "./router/index.js";
import { AppDataSource } from "./data-source.js";
import { errorHandler } from "./middleware/errorHandler.js";
import { notFound } from "./middleware/notFound.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api", router);

// 404 и обработка ошибок на уровне приложения
app.use(notFound);
app.use(errorHandler);

try {
    await AppDataSource.initialize();

    app.listen(PORT, () => {
        console.log(`Server started at http://localhost:${PORT}/api`);
    });
} catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
}