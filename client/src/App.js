import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'; 

function App() {
  const [bikes, setBikes] = useState([]); 
  useEffect(() => {
    axios.get('http://localhost:5000/api/bikes')
    .then(r => {
      console.log(r.data); 
      setBikes(r.data)
    })
    .catch(
      error => console.log(error)
    )
  }, [])

  if(!bikes){
    return (
      <div>
        <p>Loading Data....</p>
      </div>
    )
  }
  return (
    <div className="App">
      {
        bikes.map(bike => <div key={bike.id}><h3>{bike.year} {bike.make} {bike.model}</h3></div>)
      }
    </div>
  );
}

export default App;
