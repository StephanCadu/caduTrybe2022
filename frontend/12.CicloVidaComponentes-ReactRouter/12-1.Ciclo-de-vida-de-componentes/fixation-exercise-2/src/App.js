import React, { Component } from 'react'
import User from './components/User'

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      myUser: [],
    }
  }

  fetchUser = async () => {
    const userReturn = await fetch('https://api.randomuser.me/');
    const { results } = await userReturn.json();
    this.setState({
      loading: false,
      myUser: results,
    });
  }

  componentDidMount() {
    this.fetchUser();
  }

  shouldComponentUpdate(_, nextState) {
    const { myUser } = nextState;
    const userAge = myUser[0].dob.age;
    if(userAge > 50) return false;
    return true;
  }

  render() {
    const { loading, myUser } = this.state;
    const myLoading = <p>Carregando...</p>;

    return (
      <div>
        { loading ? myLoading :
          myUser.map((user) => <User key={ user.email } user={ user } />)
        }
      </div>

    )
  }
}

