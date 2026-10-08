import session from "express-session"
import { PrismaSessionStore } from "@quixo3/prisma-session-store"
import prisma from "../config/dbConnection.js"

const sessionMiddleware = session({
    key: "user_sid",
    secret: process.env.SECRET_KEY || "secreto_super_seguro",
    resave: false,
    saveUninitialized: false,
    store: new PrismaSessionStore(
        prisma,
        {
            checkPeriod: 2 * 60 * 1000,
            dbRecordIdIsSessionId: true,
            dbRecordIdFunction: undefined,
        }
    ),
    cookie: {
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    }

});

export default sessionMiddleware;