"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const authenticate = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        res.status(401).send({ message: "Unauthorized: No token provided" });
        return;
    }
    const token = authHeader.split(" ")[1];
    try {
        const decoded = (0, jsonwebtoken_1.verify)(token, process.env.JWT_KEY);
        req.user = decoded;
        next();
    }
    catch (error) {
        res.status(401).send({ message: "Unauthorized: Invalid token" });
    }
};
exports.authenticate = authenticate;
