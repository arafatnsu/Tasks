import React, { Component } from 'react'
import $ from 'jquery'
import './App.css'
import Train from './components/train'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      trains: {}
    }
  }

  getTrains() {
    $.ajax({
      url:'https://rata.digitraffic.fi/api/v1/live-trains?station=SLO',
      type: 'GET',
      success:function(data) {
        this.setState({trains: data})
      }.bind(this),
    })
}

componentDidMount() {
  this.getTrains()
}


  render() {
    const trains = this.state.trains
    return (
      <div className="App">
        {trains &&
          Object.keys(trains).map(key => (
            <Train
              key={key}
              trainType={trains[key].trainType}
              trainNumber={trains[key].trainNumber}
            />
          ))
        }
      </div>
    );
  }
}

export default App
