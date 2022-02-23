import React from 'react';
import { render, screen } from '@testing-library/react';
import { RaceCard } from './RaceCard';

test('renders race info', () => {
  const race = {
    Venue: "Test venue",
    CountryCode: "AUS",
    Race1: {
      RaceNumber: "1234",
      AdvertisedStartTime: "/Date(1645558200000)/"
    }
  };

  const expectedTime = (new Date(parseInt(race.Race1.AdvertisedStartTime.replace(/\/Date\((.*?)\)\//gi, "$1")))).toLocaleTimeString();

  render(<RaceCard race={race} />);

  expect(screen.getByText(/Test venue/i)).toBeInTheDocument();
  expect(screen.getByText(/AUS/i)).toBeInTheDocument();
  expect(screen.getByText(/1234/i)).toBeInTheDocument();
  expect(screen.getByText(expectedTime, {exact: false})).toBeInTheDocument();
});
