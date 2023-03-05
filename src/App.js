import { useState } from 'react';

import CardsContainer from './components/CardsContainer/CardsContainer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';

// import './App.css';

function App() {
  const [flagsData, setFlagsData] = useState({})
  const [searchValue, setSearchValue] = useState('')

  return (
    <>
      <Header />
      <Navbar text={searchValue} setText={setSearchValue} />
      <CardsContainer 
        flagsData={flagsData} 
        setFlagsData={setFlagsData} 
        filter={searchValue} />
    </>
  );
}

export default App;
