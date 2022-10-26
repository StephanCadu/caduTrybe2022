const alex = {
    name: 'Alex',
    age: 26,
    likes: ['fly fishing'],
    nationality: 'Australian',
  };
  
  const gunnar = {
    name: 'Gunnar',
    age: 30,
    likes: ['hiking', 'scuba diving', 'taking pictures'],
    nationality: 'Icelandic',
  };

const jhon = {
  name: 'Jhon',
  age: 23,
  likes: ['reading', 'playing chess']
};

const personLikes = ({ name, age, likes, nationality = 'Brazilian' }) => `${name} is ${age} years old, is ${nationality} and likes ${likes.join(', ')}`;

console.log(personLikes(alex));
console.log(personLikes(gunnar));
console.log(personLikes(jhon));
