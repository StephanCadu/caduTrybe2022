import Person from "./1";
import Employee from "./3";

class Teacher extends Person implements Employee {
  constructor(
    public registration: number = 0,
    public salary: number = 1000,
    public admissionDate: Date = new Date(),
    name: string,
    birth: string,
  ) {
    super(name, birth)
  }

  generateRegistration(): string {
    return `teacher: ${this.name}, registration ${this.registration}`
  }
}

const teacher = new Teacher(33423, 3500, new Date('2/7/2019'), 'Mateus', '15/9/1985');
console.log(
  teacher.admissionDate,
  teacher.birthDate,
  teacher.generateRegistration(),
  teacher.name,
  teacher.registration,
  teacher.salary,
);
