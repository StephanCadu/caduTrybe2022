class Subject {
  public name: string
  constructor(
    name: string
  ) {
    if (name.length < 3) this.name = '';
    else {
      this.name = name;
    }
  }
}

const math = new Subject('mathematic');
const hist = new Subject('history');
const philo = new Subject('philosophy');