

import React, { useState, useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'
import {setscore,setwickets,setOvers} from "./randomslice"


function Home() {
  const [sampleNumber, setSampleNumber] = useState(0);
  const [number,setNumber]=useState(0)
  const score=useSelector((state)=>state.Random.value)  
  const wicketsneeded =useSelector((state)=>state.Random.wickets)  
  //console.log(min,"min")
  const value=score
  const [min,setMin]=useState(score)
  const some=min
  console.log(min,"min")
  const [max,setMax]=useState(0)
  const dispatch=useDispatch()

  // const getRandomNumber = () => {      
      
  // }
  const overs=useSelector((state)=>state.Random.overs)
  useEffect(() => {   
    var timer = setInterval(() => {
      
      if(overs<20){
       dispatch(setOvers(overs+1))
        console.log(overs,"overs")
      if (wicketsneeded<10){

        console.log(wicketsneeded,"wicketsneeded")
        var wickets=Math.floor(Math.random())
        dispatch(setwickets(wickets))
        var overscore=Math.floor(Math.random() * (10) + 1)
        console.log(overscore,"overscore")
        dispatch(setscore(overscore))
      }    
      //console.log(wickets)
      
      console.log(score,"I am score")}
     clearInterval(timer)
   
    }, 5000);
  }, [score,wicketsneeded,overs]);

  return (
    <div className="App">
       <h1>{}</h1>
      {/* <button onClick={getRandomNumber}>{'Genrate'}</button> */}
      {/* <p>{sampleNumber}</p> */}
      <p>scoreL:{score}</p>
      <p>{overs}</p>
     
     
    </div>
  );
}

export default Home;
