import mongoose from "mongoose";
import bcrypt from 'bcrypt';

const doctorSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    Celular: {
        type: String,
        default: null,
        trim: true
    },
    token: {
        type: String
    },
    confirmado: {
        type: Boolean,
        default: false
    }
});

const Doctor = mongoose.model("Doctor", doctorSchema);
export default Doctor;