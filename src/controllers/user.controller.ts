import { Request, Response } from "express";
import { findUserByFirebaseUID, createUser } from "../services/user.service";

// Registrar usuario si no existe
export const registerUser = async (req: Request, res: Response) => {
    const { name, email, picture } = (req as any).user;
    const firebaseUID = (req as any).user.uid;

    try {
        let user = await findUserByFirebaseUID(firebaseUID);

        if (!user) {
            user = await createUser(firebaseUID, name, email, picture);
        }

        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};

// Obtener datos del usuario autenticado
export const getUserProfile = async (req: Request, res: Response) : Promise<void> => {
    try {
        const user = await findUserByFirebaseUID((req as any).user.uid);

        if (!user) {
            res.status(404).json({ error: "User not found" });
            return; // 🔹 Importante: Usar return después de enviar una respuesta
        }

        res.json(user);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};