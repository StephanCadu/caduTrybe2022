import React, { Component } from 'react'

export default class User extends Component {
  render() {
    const {
      user: {
        name: { title, first, last },
        email,
        picture: { large },
        dob: { age },
      }
    } = this.props;

    return (
      <div>
        <div>
          <img src={large} alt={first}/>
          <h2>{`${title} ${first} ${last}`}</h2>
          <p>{email}</p>
          <p>{age}</p>
        </div>
      </div>
    )
  }
}



// montar componente que faça requisição à https://api.randomuser.me/
// renderizar myLoading enquanto espera a requisição
// após a requisição, renderizar foto, nome, email e idade do usuário
// não renderizar se o usuário possuir mais de 50 anos (shouldComponentUpdate('user'))
