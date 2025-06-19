import './App.css';
import { useState, useEffect } from 'react'; 
import axios from 'axios';
import Home from './components/Home/Home.jsx';
import Header from './components/Header/Header.jsx';


function App() {

  

  const [persInfo, setInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
    
    
    useEffect(() => {
        const url = "https://rickandmortyapi.com/api/character";
        axios.get(url).then((resp) => {
            const allInfo = resp.data;
            setInfo(allInfo);
            setLoading(false);
        }).catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    }, [setInfo]);


    

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    let pers = {};
    
    
    if(persInfo != null || persInfo != 0 ) {
      pers = persInfo.results
    };
    

  return (
    <div className="App">
      <Header/>
      
      <h1>Список персонажей</h1>
      <Home props = {pers}/>
    </div>
  );
}

export default App;
