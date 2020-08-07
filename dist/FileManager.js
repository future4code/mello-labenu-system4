"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileManager = void 0;
var fs = __importStar(require("fs"));
var FileManager = /** @class */ (function () {
    function FileManager(filePath) {
        this.filePath = filePath;
    }
    FileManager.prototype.setFilePath = function (path) {
        this.filePath = path;
    };
    FileManager.prototype.writeFile = function (data) {
        fs.writeFileSync(this.filePath, JSON.stringify(data));
    };
    FileManager.prototype.readFile = function () {
        var data = fs.readFileSync(this.filePath);
        return JSON.parse(data.toString());
    };
    return FileManager;
}());
exports.FileManager = FileManager;
