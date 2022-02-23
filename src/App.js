import './App.css';
import { useFetchRaces } from './api/fetchRaces';
import { useState } from 'react';
import * as _ from 'lodash';
import { CategorySelect } from './components/CategorySelect';
import { RaceCard } from './components/RaceCard';

function App() {

  const {categories, races} = useFetchRaces();
  const [category, setCategory] = useState([])

  const onCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);
  }

  return (
    <div className="App">
      <h1>Bet Right</h1>
      <CategorySelect categories={categories} onCategoryChange={onCategoryChange} />
      {_.take(races[category], 5).map(race => <RaceCard race={race} /> )}
    </div>
  );
}

export default App;
