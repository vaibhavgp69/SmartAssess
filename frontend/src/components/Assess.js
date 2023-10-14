import { Alert, Button, Typography } from "@material-tailwind/react";
import { useState, useEffect } from "react";
import { Quest } from "./Quest";
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react";



const Stopwatch = () => {

const [time, setTime] = useState(0);
const [data,setData] = useState({})
const [isRunning, setIsRunning] = useState(false);
const [post,setPost] = useState({seconds:0,correct:0})
const [curr,setCurr] = useState(0)
const [isLoading,setIsLoading] = useState(0)
const aid = parseInt(window.location.href.slice(-2,))

function hc(){
saveAPIData2()
window.open("/home","_self")
}

useEffect(() => {
    setPost({seconds:(60*minutes)+seconds,correct:curr})

    let intervalId;
    if (isRunning) {
      // setting time from 0 to 1 every 10 milisecond using javascript setInterval method
      intervalId = setInterval(() => setTime(time + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

const hours = Math.floor(time / 360000);

const minutes = Math.floor((time % 360000) / 6000);

const seconds = Math.floor((time % 6000) / 100);

const milliseconds = time % 100;

const saveAPIData2 = async()=>{
  console.log(JSON.stringify({
    "assessment_id":aid,
    "is_correct":curr,
    "time_taken":(minutes*60)+seconds
}))
  const url = 'http://127.0.0.1:8000/api/newmcq'
  setIsLoading(1)
    let result = await fetch(url,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
          "assessment_id":aid,
          "is_correct":curr,
          "time_taken":(minutes*60)+seconds
      })
    })

   result = await result.json()
   setData(result)
   console.log(data)
   setIsRunning(1)
}

  function reset(){
    setTime(0)
    setIsRunning(0)
    saveAPIData2()
  }

  return (
    <div className="h-[720px]">
    <br></br>
    <br></br>
    <div></div>
      <div className="stopwatch-buttons">
        
      </div>
    <br></br>
    <br></br>
    <Typography className="text-center  " variant="h2">{data.question}</Typography>
    <br></br>
    <Typography className="text-center  " color="blue" variant="h5">1. {data.option_a}</Typography>
    <br></br>
    <Typography className="text-center  " color="blue" variant="h5">2. {data.option_b}</Typography>
    <br></br>
    <Typography className="text-center  " color="blue" variant="h5">3. {data.option_c}</Typography>
    <br></br>
    <Typography className="text-center  " color="blue" variant="h5">4. {data.option_d}</Typography>
    <br></br>
    <br></br>
    <div className="flex">
      <Tabs value="html" orientation="vertical" className="ml-[42rem]">
        <TabsHeader className="w-32" >
            
            <Tab onClick={()=>setCurr(1?data.correct_answer==='a':0)} value='A' >
              1
            </Tab>

            <Tab onClick={()=>setCurr(1?data.correct_answer==='b':0)} value='B' >
              2
            </Tab>

            <Tab onClick={()=>setCurr(1?data.correct_answer==='c':0)} value='C' >
              3
            </Tab>

            <Tab onClick={()=>setCurr(1?data.correct_answer==='d':0)} value='D' >
              4
            </Tab>

        </TabsHeader>
        
      </Tabs>

      <Alert color="blue" className="w-[6rem] ml-[1rem] h-[3.5rem]">
        {minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}:
        {milliseconds.toString().padStart(2, "0")}
    </Alert>

    
      
    </div>
    <br></br>
    <Button className="ml-[43rem]" onClick={reset}>Submit</Button>
    <Button className="ml-[43rem] px-[2.2rem] mt-5" onClick={hc}>End</Button>


    </div>
  );
};

export default Stopwatch;