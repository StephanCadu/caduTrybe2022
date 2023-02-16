"use strict";
// composition is a way to combine classes and define if the class is composed by other or not
// (ex: account is composed by profile)
// composition example
class Profile {
    constructor() {
        this.name = '';
        this.email = '';
    }
    setName(name) {
        this.name = name;
    }
    setEmail(email) {
        this.email = email;
    }
    toString() {
        return `name - [${this.name}] - email - [${this.email}]`;
    }
}
class SocialMediaAccount {
    constructor() {
        // Cria nossa composição com o perfil
        this.profile = new Profile();
    }
    editProfile(name, email) {
        this.profile.setName(name);
        this.profile.setEmail(email);
    }
    printProfile() {
        console.log(this.profile.toString());
    }
}
const socialMediaAccount = new SocialMediaAccount();
socialMediaAccount.editProfile('Manuella', 'manu@trybe.com');
socialMediaAccount.printProfile();
