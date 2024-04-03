import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'
import Card from './Card';

function App() {
  const [apiData, setApiData] = useState([])
  const [filteredData,setFilteredData] = useState([]);
  useEffect(()=>{
      axios.get("https://restcountries.com/v3.1/all")
      .then((res)=>{
        setApiData(res.data);
        setFilteredData(res.data);
      })
      .catch((err)=>{
        console.log(err);
      })
  },[])

  const filter=(e)=>{
    setFilteredData(apiData.filter((fl)=>{
      return fl.name.common.toLowerCase().includes((e.target.value).toLowerCase());
    }))
  }
  // console.log(filteredData);
  return (
    <div className='body'>
      <div>
        <input type='text' onChange={filter} placeholder='Search for countries...'/>
      </div>
      <div className='countryCard1'>
      {filteredData.map((el)=>{
        return (<Card data={el} key={el.cca3}/>)
      })}
      </div>
    </div>
  )
}

export default App;