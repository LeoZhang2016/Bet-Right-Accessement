import React from 'react';
import dayjs from 'dayjs';
import  './RaceCard.css';

const RaceCard = ({race}) => {

  const timeInfo = new Date(parseInt(race.Race1.AdvertisedStartTime.replace(/\/Date\((.*?)\)\//gi, "$1")));
  
  const timestamp = Date.parse(timeInfo);

  return (
    <div key={race.Race1.EventId} className="race-item-container">
      <h2><span>Venue Name:</span> {race.Venue}</h2>
      <p><span>Race number: </span>{race.Race1.RaceNumber}</p>
      {/* <p>Advertised start time: {(new Date(parseInt(race.Race1.AdvertisedStartTime.replace(/\/Date\((.*?)\)\//gi, "$1")))).toLocaleTimeString()}</p> */}
      <p><span>Advertised start time: </span> {dayjs(timestamp).format('DD MMM YYYY hh:mm a')}</p>
  </div>
  )
}

export { RaceCard }
