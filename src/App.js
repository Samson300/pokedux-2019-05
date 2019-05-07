import React from 'react';
import logo from './logo.svg';
import './App.css';
import PokeList from './containers/PokeListContainer';
// If I need to work on styling, I can bring in the dumb version.
// import PokeList from './components/PokeList';

function App() {
  return (
    <div className="App">
      <h1>PokeThings</h1>
      <PokeList />
    </div>
  );
}

export default App;
