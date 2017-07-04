import React, { Component } from 'react'
import $ from 'jquery'
import './App.css'
import Train from './components/train'
import TrainDetails from './components/trainDetails'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      trains: {},
      trainDetails: {},
      isShowingModal: false,
    }
    this.fetchTrainDetails = this.fetchTrainDetails.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleClick = this.handleClick.bind(this)
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

fetchTrainDetails(trainNumber, departureDate) {
  $.ajax({
    url:'https://rata.digitraffic.fi/api/v1/compositions/'+trainNumber+'?departure_date='+departureDate,
    type: 'GET',
    success:function(data) {
      this.setState({
        trainDetails: data,
        isShowingModal: true
      })
    }.bind(this),
  })
}

handleClick() {
  this.setState({isShowingModal: true})
}

handleClose() {
  this.setState({isShowingModal: false})
}
  render() {
    const trains = this.state.trains
    console.log(this.state.trainDetails)
    return (
      <div className="App">
        {trains &&
          Object.keys(trains).map(key => (
            <Train
              key={key}
              trainType={trains[key].trainType}
              trainNumber={trains[key].trainNumber}
              departureDate={trains[key].departureDate}
              fetchDetails={this.fetchTrainDetails}
            />
          ))
        }
        <TrainDetails
          isShowingModal={this.state.isShowingModal}
          handleClick={this.handleClick}
          handleClose={this.handleClose}
          trainDetails={this.state.trainDetails}
        />
      </div>
    );
  }
}

export default App
