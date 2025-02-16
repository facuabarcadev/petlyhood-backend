import User, { IUser } from "../models/User";

// Buscar usuario por UID de Firebase
export const findUserByFirebaseUID = async (firebaseUID: string): Promise<IUser | null> => {
    return await User.findOne({ firebaseUID });
};

// Crear un nuevo usuario en la base de datos
export const createUser = async (firebaseUID: string, name: string, email: string, profileImage?: string): Promise<IUser> => {
    const user = new User({ firebaseUID, name, email, profileImage });
    return await user.save();
};