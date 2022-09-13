import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Home';


function App() {
  // const [sampleNumber, setSampleNumber] = useState(0);
  // const [number,setNumber]=useState(0)
  // //console.log(min,"min")
  // const [min,setMin]=useState("")
  // const [max,setMax]=useState(0)
  // const dispatch=useDispatch()

  // const getRandomNumber = () => {         
     
      
  // }
  // console.log(number,"number")
  // // console.log(min,"min2")
  // console.log(sampleNumber,"sampleNumber")
  // // var timer = setInterval(() => {    
  // //   console.log(number)    
  // //   setSampleNumber(Math.floor(Math.random() * (max) + min)) 
  // //   setNumber(sampleNumber+number)   
  // //   console.log(number,"I am  nu mber1")  
  // //   clearInterval(timer);
  // //   console.log("here")
  // //     }, 20000);

  // // useEffect(() => {
    
  // //   }, []);
  

  // useEffect(() => {
  //   var timer = setInterval(() => {   
  //     // const end = value;
  //     // const half = value / 2;
  //     // console.log(half, "I am half");
  //     // const pak = indpak[Match][half - 1].score;
  //     // const ind = indpak[Match][end - 1].scoreind;
  //     // var tempDate = new Date();
  //     // var time = tempDate.getHours() + ":" + tempDate.getMinutes();
  //     var wickets=Math.floor(Math.random() * (10) + 1)
  //     console.log(wickets)
  //     dispatch(setwickets(wickets))
  //     setMax(max+wickets)
  //     console.log(min,"I am min")
  //     console.log(max,"I am max")

  //     if (wickets==0) {
  //       console.log("I came here");
  //       // setName(end - 1);
  //       // setStart("");
  //       // if (ind > pak) {
  //       //   setResult(teamoneu+ " Won the Match");
  //       //   if (teamoneu===team){
  //       //     setfinalResult("YOU WON THE MATCH")
  //       //   }
  //       //   else{
  //       //     setfinalResult("YOU LOST THE MATCH")
  //       //   }
         
  //       // } else if (ind < pak) {
  //       //   setResult(teamtwou+" Won the Match");
  //       //   if (teamtwou===team){
  //       //     setfinalResult("YOU WON THE MATCH")
  //       //   }
  //       //   else{
  //       //     setfinalResult("YOU LOST THE MATCH")
  //       //   }
         
  //       // } else if (ind === pak) {
  //       //   setResult("Match Drawn");
  //       //   setfinalResult("YOUR MATCH DRAWN")
  //       // }
        
        
  //     }clearInterval(timer);
    
  //   }, 5000);
  // }, []);

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
        </Routes>
      </Router>
    </div>
    // <div className="App">
    //    <h1>{}</h1>
    //   <button onClick={getRandomNumber}>{'Genrate'}</button>
    //   <p>{sampleNumber}</p>
    //   <p>{number}</p>
     
    // </div>
  );
}

export default App;
