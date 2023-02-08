import './App.css';
import React,{useState} from "react"
function App() {
  let [countryList,setCountryList]=useState([])
  let getCountrysList=async()=>{
    let reqMethods={
      methods:"GET"
    }
    let rawData=await fetch("/countryList",reqMethods);
    let convertedData=await rawData.json();
    setCountryList(convertedData);
    console.log(convertedData);
  }
  return (
    <div className="App">
      <h1>Countrys List</h1>
     <button type='button' onClick={()=>{
       getCountrysList()
     }}>Get Countrys List</button>
     {countryList.map((c)=>{
      return <div>
        <h1>{c.id}. {c.country}</h1>
      </div>
     })}
    </div>
  );
}

export default App;
