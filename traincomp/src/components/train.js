import React from 'react'

const Train = ({trainType, trainNumber, fetchDetails, departureDate}) => (
  <div className="col-lg-4 col-sm-6 train-section">
    <h4 className="trainLink text-center" onClick={() => fetchDetails(trainNumber, departureDate)}>
      {trainType}{trainNumber}
    </h4>
  </div>
)

export default Train
