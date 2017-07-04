import React from 'react'
import {ModalContainer, ModalDialog} from 'react-modal-dialog'

const TrainDetails = ({
  isShowingModal,
  handleClick,
  handleClose,
  trainDetails,
}) => (
  <div onClick={handleClick}>
      {
        isShowingModal &&
        <ModalContainer onClose={handleClose}>
          <ModalDialog onClose={handleClose}>
            <h3 className="text-info text-center">
              {trainDetails.trainType}{trainDetails.trainNumber}:
            </h3>
            <p className="text-info">
              Departure station: {trainDetails.journeySections[0].beginTimeTableRow.stationShortCode}
            </p>
            <p className="text-info">
              Destination station: {trainDetails.journeySections[0].endTimeTableRow.stationShortCode}
            </p>
            <p className="text-info">
              LocomotiveType: {trainDetails.journeySections[0].locomotives[0].locomotiveType}
            </p>
            <p className="text-info">
              PowerType: {trainDetails.journeySections[0].locomotives[0].powerType}
            </p>
            <p className="text-info">
              Maximum speed: {trainDetails.journeySections[0].maximumSpeed} Km/hr
            </p>
            <p className="text-info">
              Total Length: {trainDetails.journeySections[0].totalLength} metres.
            </p>
          </ModalDialog>
        </ModalContainer>
      }
    </div>
)

export default TrainDetails
