"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1_1 = __importDefault(require("./1"));
class Student extends _1_1.default {
    constructor(name, birth) {
        super(name, birth);
        this._registry = '';
        this._tests = [];
        this._projects = [];
        if (`${this.name} ${this.birthDate}`.length < 10)
            this._registry = 'not enrolled';
        else {
            this._registry = `name: ${this.name}, birth: ${this.birthDate}`;
        }
    }
    get registry() { return this._registry; }
    get tests() { return this._tests; }
    get projects() { return this._projects; }
    set tests(grades) {
        if (grades.length > 4)
            return;
        else {
            this._tests = grades;
        }
    }
    set projects(grades) {
        if (grades.length > 2)
            return;
        else {
            this._projects = grades;
        }
    }
    sumGrades() {
        return [...this._tests, ...this._projects].reduce((acc, { grade }) => acc + grade, 0);
    }
    avarageGrades() {
        const grades = [...this._tests, ...this._projects];
        return this.sumGrades() / grades.length;
    }
    generateEnrollment() {
        return `${this.name}, borned in ${this.birthDate} is enrolled in our school`;
    }
}
const st1 = new Student('Camila', '01/01/2001');
const st2 = new Student('Ca', '1/1/01');
st1.tests = [
    { subject: 'Math', grade: 2 },
    { subject: 'Eng', grade: 3 },
];
st1.projects = [
    { subject: 'Math', grade: 2 },
    { subject: 'Eng', grade: 3 },
    { subject: 'Geo', grade: 4 },
    { subject: 'Chem', grade: 5 },
];
st2.tests = [
    { subject: 'Math', grade: 10 },
    { subject: 'Eng', grade: 9 },
    { subject: 'Chem', grade: 5 },
];
st2.projects = [
    { subject: 'Math', grade: 7 },
    { subject: 'Eng', grade: 9 },
    { subject: 'Geo', grade: 10 },
    { subject: 'Chem', grade: 8 },
    { subject: 'Bio', grade: 8 },
];
console.log('ST1:', st1.name, st1.tests, st1.projects, st1.registry, st1.avarageGrades(), st1.sumGrades(), st1.generateEnrollment(), '-----');
console.log('ST2:', st2.name, st2.tests, st2.projects, st2.registry, st2.avarageGrades(), st2.sumGrades(), st2.generateEnrollment(), '-----');
