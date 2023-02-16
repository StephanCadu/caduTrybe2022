import React from 'react';
import './App.css';

// exercício de porps
// import Image from './Image';
/* <Image
  source='https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg'
  alternativeText='Cute cat staring'
/> */

// exercícios 1 e 2 composição de componentes
// import Album from './components/Album';
// const album01 = {
//   image: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/Coldplay_-_Mylo_Xyloto.JPG/220px-Coldplay_-_Mylo_Xyloto.JPG',
//   title: 'Mylo Xyloto',
//   releaseDate: {
//     year: '2011',
//     month: '10',
//     day: '24',
//   },
//   others: {
//     recordCompany: 'Capitol, Parlophone',
//     formats: 'CD, digital'
//   }
// };

// const album02 = {
//   image: 'https://upload.wikimedia.org/wikipedia/pt/thumb/5/5d/Coldplay_-_Ghost_Stories.jpg/220px-Coldplay_-_Ghost_Stories.jpg',
//   title: 'Ghost Stories',
//   releaseDate: {
//     year: '2014',
//     month: '05',
//     day: '16',
//   },
//   others: {
//     recordCompany: 'Parlophone',
//     formats: 'CD, digital'
//   }
// };
// return (
//   <div>
//    <Album album={ album01 }/>
//    <Album album={ album02 }/>
//   </div>
//  );

// exemplo componentes sendo repassados
// import UserProfile from './UserProfile';

// class App extends React.Component {
//   render() {
//     const joao = {
//       id: 102,
//       name: "João",
//       email: "joao@gmail.com",
//       avatar: "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png"
//     };

//     const amelia = {
//       id: 77,
//       name: "Amélia",
//       email: "amelia@gmail.com",
//       avatar: "https://cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_640.png"
//     };

//     return (
//       <div className="App">
//         <UserProfile user={joao} />
//         <UserProfile user={amelia} />
//       </div>
//     );
//   }
// }

// exercício final de composicão de componentes
// import Order from './Order';

// class App extends React.Component {
//   render() {
//     const headphone = {
//       id: 102,
//       user: "cena@gmail.com",
//       product: "Razer Headphone",
//       price: {
//         value: 99.99,
//         currency: "dollars"
//       }
//     };

//     const energyDrink = {
//       id: 77,
//       user: "cena@gmail.com",
//       product: "Monster 500mL",
//       price: {
//         value: 9.99,
//         currency: "dollars"
//       }
//     };

//     const shape = {
//       id: 69,
//       user: "cadu@gmail.com",
//       product: 'Shape Primitive Tiago Lemos 8.0',
//       price: {
//         value: 0.00,
//         currency: "free"
//       }
//     };

//     return (
//       <div className="App">
//         <h1> Orders recently created </h1>
//         <Order order={headphone} />
//         <Order order={energyDrink} />
//         <Order order={shape} />
//       </div>
//     );
//   }
// }

// exemplo lista de componentes
// class App extends React.Component {
//   render() {
//     const shoppingList = ['leite', 'arroz', 'feijão', 'banana', 'carne'];
//     const items = shoppingList.map((item, ind) => (<li key={ind}>{ item }</li>));
  
//     return (
//       <div>
//         <h2>Lista de compras</h2>
//         <ul>{items}</ul>
//       </div>
//     );
//   }
// }

// exercício de fixação lista de componentes e chaves
import UserProfile from './UserProfile';

class App extends React.Component {
  render() {
    const users = [
      {
        id: 102,
        name: "João",
        email: "joao@gmail.com",
        avatar: "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png"
      },
      {
        id: 77,
        name: "Amélia",
        email: "amelia@gmail.com",
        avatar: "https://cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_640.png"
      },
    ]
    return (
      <div className="App">
        {/* criando os usuários dinamicamente e
        adicionando uma chave pra cada */}
        {users.map((user) => <UserProfile user={user} key={user.id} />)}
      </div>
    );
  }
}

export default App;