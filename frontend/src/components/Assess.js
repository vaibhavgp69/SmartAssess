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
const [data,setData] = useState({question:"Who does vibhav love most?",Answer1:"kisn",Answer2:"rushli",Answer3:"vibhav",Answer4:"chavna",Correct:"chavna"})
const [isRunning, setIsRunning] = useState(false);
const [post,setPost] = useState({seconds:0,correct:0})
const [curr,setCurr] = useState(0)

function hc(){
console.log(curr)
console.log(minutes)
console.log(seconds)
console.log(data.Correct)
setPost({seconds:seconds,correct:curr})
console.log(post)
}

useEffect(() => {
    setIsRunning(1)
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

  return (
    <div className="stopwatch-container">
    <br></br>
    <div></div>
      
      <div className="stopwatch-buttons">
        
      </div>
    <br></br>
    <br></br>
 
    <Typography className="text-center  " variant="h2">{data.question}</Typography>
    
    <br></br>
    <div className="flex">
      <Tabs value="html" orientation="vertical" className="ml-[42rem]">
        <TabsHeader className="w-32" >
            
            <Tab onClick={()=>setCurr(1?data.Answer1===data.Correct:0)} value={data.Answer1} >
              {data.Answer1}
            </Tab>

            <Tab onClick={()=>setCurr(1?data.Answer2===data.Correct:0)} value={data.Answer2} >
              {data.Answer2}
            </Tab>

            <Tab onClick={()=>setCurr(1?data.Answer3===data.Correct:0)} value={data.Answer3} >
              {data.Answer3}
            </Tab>

            <Tab onClick={()=>setCurr(1?data.Answer4===data.Correct:0)} value={data.Answer4} >
              {data.Answer4}
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
    <Button className="ml-[43rem]" onClick={hc}>Submit</Button>


    </div>
  );
};

export default Stopwatch;