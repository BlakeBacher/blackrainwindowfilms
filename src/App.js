import React, { Component } from 'react'

import './App.css';
import Add_Car from './components/Add_Car'

class App extends Component {
  constructor(){
    super()

    this.state = {
      addCar: true,

    }
  }

  handleToggle = (e) => {
    this.setState({[e.target.name]: !this.state[e.target.name]})
  }

  render() {
    return (
      <div className='main'>
         <header>BLACK RAIN WINDOW FILMS</header>

          {this.state.addCar ? 
            <Add_Car handleToggle={this.handleToggle}/>
          :  
            <div>
              <button name='addCar' onClick={(e) => {this.handleToggle(e)}}>Add Vehicle</button>
            </div>
          }

      </div>
    );
  }
}

export default App;
