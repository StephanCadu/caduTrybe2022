"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("express-async-errors");
exports.default = (err, req, res, next) => {
    const { message, name } = err;
    switch (name) {
        case 'BadRequestError':
            res.status(400).json({ message });
            break;
        case 'ValidationError':
            res.status(400).json({ message });
            break;
        case 'NotFoundError':
            res.status(404).json({ message });
            break;
        case 'ConflictError':
            res.status(409).json({ message });
            break;
        default:
            console.log(err);
            res.sendStatus(500);
    }
    next();
};
