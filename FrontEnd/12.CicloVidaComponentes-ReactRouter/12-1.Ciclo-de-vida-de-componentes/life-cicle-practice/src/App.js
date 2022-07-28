import './App.css';
import { Component } from 'react';
// import Counter from './Counter';
// import RickMorty from './RickMorty';
// import DadJoke from './practice/DadJoke';
import Profile from './components/Profile';
import Connections from './components/Connections';

class App extends Component {
  constructor() {
    super();

    this.state = {
      showProfile: true,
    };

    this.changeProfile = this.changeProfile.bind(this);
  }

  changeProfile() {
    const { showProfile } = this.state;

    this.setState({ showProfile: !showProfile });
  }

  render() {
    const { showProfile } = this.state;
    return (
      <div className="gitNetwork d-flex flex-column justify-content-center">
        { showProfile ? <Profile /> : null }
        <div className="central d-flex justify-content-center">
          <button
            className="btn btn-dark align-self-center"
            type="button"
            onClick={ this.changeProfile }
          >
            Mostrar / Ocultar Perfil
          </button>
        </div>
        <Connections />
      </div>
    );
  }
}

export default App;