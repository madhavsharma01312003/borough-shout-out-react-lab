import { useState } from 'react'

import './App.css'
import BoroughCard from './BoroughCard';
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <h1>🗽 Welcome to Borough Shout-Out</h1>

      <button onClick={() => setCount(count + 1)}>
        Clicked {count} times
      </button>

      <h2>NYC Boroughs</h2>
<BoroughCard borough="Brooklyn" bgColor="lightblue" />
<BoroughCard borough="Manhattan" bgColor="lightgreen" />
<BoroughCard borough="Bronx" bgColor="#D5E8D4" />
<BoroughCard borough="Staten Island" bgColor="#F8CECC" />
<BoroughCard /> {/* Defaults to Queens */}


      <p>React + TypeScript + Vite setup complete ✅</p>
    </div>
  );
}

export default App;
