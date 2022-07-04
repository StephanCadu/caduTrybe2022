const str = 'Cadu e Caio e Cacau'

// console.log(str.split('a'));

const list1 = [
    {
      firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java',
    },
    {
      firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python',
    },
    {
      firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby',
    },
  ];

  const greetDevelopers = (list) => list.map((obj) => ({...obj, [obj.greeting]: `Hi ${obj.firstName}, what do you like the most about ${obj.language}?`}));

  const greetDevs = (list) => list.map((obj) => Object.assign(obj, { greeting: `Hi ${obj.firstName}, what do you like the most about ${obj.language}?` } ));

//   console.log(greetDevelopers(list1));

  console.log(greetDevs(list1));
