"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1_1 = __importDefault(require("./1"));
class Teacher extends _1_1.default {
    constructor(registration = 0, salary = 1000, admissionDate = new Date(), name, birth) {
        super(name, birth);
        this.registration = registration;
        this.salary = salary;
        this.admissionDate = admissionDate;
    }
    generateRegistration() {
        return `teacher: ${this.name}, registration ${this.registration}`;
    }
}
const teacher = new Teacher(33423, 3500, new Date('2/7/2019'), 'Mateus', '15/9/1985');
console.log(teacher.admissionDate, teacher.birthDate, teacher.generateRegistration(), teacher.name, teacher.registration, teacher.salary);
