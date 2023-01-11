"use strict";
// both classes make sense by themselves, but they are agregated because of the context
// (ex: account has friends, but without the account, the friends still exists)
// agregation example
class Friend {
    constructor() {
        this.nickname = '';
    }
    getNickname() {
        return this.nickname;
    }
    setNickname(nickname) {
        this.nickname = nickname;
    }
}
class SocialMediaAccount2 {
    constructor() {
        this.friends = new Array();
    }
    addFriend(friend) {
        this.friends.push(friend);
    }
    printFriends() {
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
class ConsoleLogger {
    log(param) {
        console.log(`ConsoleLogger - ${param}`);
    }
}
class ConsoleLogger2 {
    log(param) {
        console.log(`ConsoleLogger2 - ${param}`);
    }
}
class ExampleDatabase {
    constructor(logger = new ConsoleLogger()) {
        this.logger = logger;
    }
    save(key, value) {
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
