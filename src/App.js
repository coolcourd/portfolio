import React, { Component } from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import './App.css';
import database from './.firebase'


export const Data = React.createContext('')

class App extends Component {
constructor(props){
  super(props)
  this.state = {
    data: []
  }
}

componentDidMount(){
    database.ref("posts").once('value').then((x) => {
        this.setState({data: JSON.parse(x.val())})
      })
}

  render() {
    return (
      <div className="App">
        <Data.Provider value={this.state.data}>
        <Header/>
        <Main data={this.state.data}/>
        </Data.Provider>
      </div>
    )
  }
}

export default App;
