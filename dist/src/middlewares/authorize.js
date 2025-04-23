"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorize = void 0;
const authorize = (roles) => {
    return (req, res, next) => {
        if (!req.user || !roles.includes(req.user.role)) {
            res.status(403).send({ message: "Forbidden: You don't have permission" });
            return;
        }
        next();
    };
};
exports.authorize = authorize;
