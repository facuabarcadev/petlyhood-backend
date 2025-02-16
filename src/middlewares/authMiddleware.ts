import { Request, Response, NextFunction } from "express";
import { auth } from "../config/firebase";

export const verifyToken = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const token = req.headers.authorization?.split(" ")[1]; // Extrae el token

    if (!token) {
        res.status(401).json({ message: "Unauthorized - No token provided" });
        return;
    }

    try {
        const decodedToken = await auth.verifyIdToken(token);
        (req as any).user = decodedToken; // Guarda los datos del usuario en la request
        next(); // ✅ Llama a next() para continuar con la ejecución de la ruta
    } catch (error) {
        res.status(401).json({ message: "Invalid or expired token" });
        return;
    }
};