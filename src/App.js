import React from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      robotos: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ robotos: users }))
      .catch(error => console.log('I have errored'));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value  });
  }

  render() {
    const { robotos, searchField } = this.state;
    const filteredRobotos = robotos.filter( r =>
      r.name.toLowerCase().includes(searchField.toLocaleLowerCase()) ||
      r.email.toLowerCase().includes(searchField.toLocaleLowerCase())
    );
    
    return (
      <div className="App">
        <h1 className='ff-odsans principal-title'>Robotos Rolodex</h1>
        <SearchBox
          placeholder='search robotos'
          handleChange={this.handleChange}
        />
        <CardList robotos={filteredRobotos} />
      </div>
    );
  }
}

export default App;
