import './App.css';
import { useState, useEffect } from 'react'

const url = "http://localhost:3001"


function App() {
  
  const [data, setData] = useState()
  
  useEffect(() => {
    const getApi = async (url) => {
      const response = await fetch(url, {mode:'cors'});
      const apiData = await response.json();
      setData(apiData);
    }
    getApi(url);
  }, []);

  return (
    <div>
      {data}
    </div>
  );
}

export default App;
