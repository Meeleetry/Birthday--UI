import { useState } from 'react';
import './App.css';
import products from './Data';
import List from './List';

function App() {
  const [people, setPeople] = useState(products);
  return <main>
    <section className="container">
      <h3>{people.length} birthdays today</h3>
      <List people={people}/>
      <button onClick={() => setPeople([])}>Clear all</button>
    </section>
  </main>

}
export default App;
