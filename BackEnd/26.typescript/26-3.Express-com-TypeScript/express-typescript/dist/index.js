"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const statusCodes_1 = __importDefault(require("./statusCodes"));
require("express-async-errors");
const book_route_1 = __importDefault(require("./routes/book.route"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = 7000;
app.get('/', (req, res) => {
    res.status(statusCodes_1.default.OK).send('Express + TypeScript');
});
app.use('/books', book_route_1.default);
app.use((err, req, res, next) => {
    const { name, message, details } = err;
    console.log(`name: ${name}`);
    switch (name) {
        case 'BadRequestError':
            res.status(statusCodes_1.default.BAD_REQUEST).json({ message });
            break;
        case 'ValidationError':
            res.status(statusCodes_1.default.BAD_REQUEST).json({ message });
            break;
        case 'NotFoundError':
            res.status(statusCodes_1.default.NOT_FOUND).json({ message });
            break;
        case 'ConflictError':
            res.status(statusCodes_1.default.CONFLICT).json({ message });
            break;
        default:
            console.log(err);
            res.sendStatus(500);
    }
    next();
});
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
