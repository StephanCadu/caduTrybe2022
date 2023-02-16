// both classes make sense by themselves, but they are agregated because of the context
// (ex: account has friends, but without the account, the friends still exists)

// agregation example

class Friend {
  private nickname: string = ''

  public getNickname(): string {
    return this.nickname;
  }

  public setNickname(nickname: string) {
    this.nickname = nickname;
  }
}

class SocialMediaAccount2 {
  private friends = new Array<Friend>();

  public addFriend(friend: Friend) {
    this.friends.push(friend);
  }

  public printFriends() {
    this.friends.map((friend) => console.log(friend));
  }
}

const socialMediaAccount2 = new SocialMediaAccount2();

const friendCarol = new Friend();
friendCarol.setNickname('Carol');

const friendFernando = new Friend();
friendFernando.setNickname('Fernando');

socialMediaAccount2.addFriend(friendCarol);
socialMediaAccount2.addFriend(friendFernando);
socialMediaAccount2.printFriends();

// fixation exercise
interface Logger {
  log(param: string): void
}

class ConsoleLogger implements Logger {
  log(param: string) {
    console.log(`ConsoleLogger - ${param}`);
  }
}

class ConsoleLogger2 implements Logger {
  log(param: string) {
    console.log(`ConsoleLogger2 - ${param}`);
  }
}

interface Database {
  logger: Logger
  save(key: string, value: string): void
}

class ExampleDatabase implements Database {
  constructor(public logger: Logger = new ConsoleLogger()) {}

  save(key: string, value: string) {
    this.logger.log(`key - ${key} value - ${value}`);
  }
}

const logger1 = new ConsoleLogger();
const logger2 = new ConsoleLogger2();

const db1 = new ExampleDatabase(logger1);
const db2 = new ExampleDatabase(logger2);
const db3 = new ExampleDatabase();

db1.save('meu', 'deus');
db2.save('token', 'j3nd72kd02jf');
db3.save('capitu', 'bentinho');
