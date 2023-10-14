import { useState } from "react"
import { Button, Input } from "@material-tailwind/react"
import { useEffect } from "react"
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export function Dashboard(){
    const [library,setLibrary] = useState([])
    const [data,setData] = useState()

    useEffect(()=>{
        getAPIData()
    },[])

    const getAPIData = async()=>{
        
        const url = 'http://127.0.0.1:8000/api/newsession'
        let result = await fetch(url)
        result = await result.json()
        setLibrary(result)
        console.log(library)
    }

    const [s,setS] = useState()
    console.log(s)
    return(

        <div>
            <div className="mb-[6rem]"><br></br></div>
            <Typography color="blue-gray" style={{fontSize:'24px',marginLeft:'43rem'}}>
                New Session :
            </Typography>
            <br></br>
            <Input size="lg" onChange={(e)=>setS(e.target.value)} value={s} className="w-[25rem] ml-[35rem]" />
            <br></br>
            
            <Button variant="gradient" className="flex items-center gap-1 ml-[39rem]">
            <br></br>
            
            
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
          />
        </svg>
        <input type="file" accept=".pdf" onChange={(event) => setData(event.target.files[0])} />
      </Button>
            <br></br>
        
            <Button className="mb-5 ml-[45rem]">Submit</Button>
            

            <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap"}}>
            
            {library.map((i)=>(
                 <Card className="w-[25rem] ml-20 mb-10">
      <CardHeader shadow={false} floated={false} className="h-[20rem]">
        <img
          src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-large" style={{fontFamily:"cursive",fontSize:"20px",textAlign:"justify"}}>
            {i.session_name.slice(8,)}
          </Typography>
          
        </div>
        
      </CardBody>
      <CardFooter className="pt-0">
        
        <Button
          ripple={false}
          fullWidth={true}
          className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
        >
        <a href={i.pdf_file}>
        Read 
        </a>
        </Button>

        <Button
          ripple={false}
          fullWidth={true}
          className="bg-blue-gray-900/10 text-blue-gray-900 mt-5 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
        >
          Assessment
        </Button>

      </CardFooter>
    </Card>
            ))}
            </div>

        </div>
    )
}