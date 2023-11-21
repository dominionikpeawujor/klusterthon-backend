"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
const routes_1 = __importDefault(require("./routes"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
(0, dotenv_1.config)();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
const corsOptions = {
    origin: `http://localhost:${PORT}`,
    optionSuccessStatus: 200,
};
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)(corsOptions));
app.use('/api', routes_1.default);
app.listen(PORT, () => {
    console.log(`Server connected at Port: ${PORT}`);
});
exports.default = app;
