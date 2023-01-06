// 1
interface IGrade {
  subject: string
  grade: number
}

class Student {
  constructor(
    private _name: string = '',
    private _registry: string = '',
    private _tests: IGrade[] = [],
    private _projects: IGrade[] = [],
  ) {}

  // 2 
  sumGrades() {
    return [...this._tests, ...this._projects].reduce((acc, { grade }) => acc + grade, 0);
  }

  avarageGrades() {
    const grades = [...this._tests, ...this._projects];
    return this.sumGrades() / grades.length;
  }
}