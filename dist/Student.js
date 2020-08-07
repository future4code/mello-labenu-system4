"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
var moment_1 = __importDefault(require("moment"));
var FileManager_1 = require("./FileManager");
var Student = /** @class */ (function () {
    function Student(id, name, email, birthDate, hobbies) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.birthDate = birthDate;
        this.hobbies = hobbies;
        this.birthDate = moment_1.default(birthDate, "DD/MM/YYYY").format("DD/MM/YYYY");
        this.hobbies = hobbies;
    }
    Student.prototype.getAge = function (id) {
        var fm = new FileManager_1.FileManager("students.json");
        var files = fm.readFile();
        var file = [];
        var student = files.find(function (file) { return Number(file.id) === id; });
        file.push(student);
        var date;
        var response = file.forEach(function (element) { return date = element.birthDate; });
        var age = moment_1.default().diff(moment_1.default(date, "DD/MM/YYYY"), "years");
        return age;
    };
    return Student;
}());
exports.Student = Student;
