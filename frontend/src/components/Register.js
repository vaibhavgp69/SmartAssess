import { useState } from "react";
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
   
export function Register(){

    const [data,setData] = useState(
        {
            username:"",
            email:"",
            password:""
        }
    )

    function handle(e){
        const newdata = {...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        
    }

    const saveAPIData = async()=>{
        
        const url = ''
        let result = await fetch(url,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(data)
        })

       result = await result.json()
       console.log(result)
       

    }
    
    return(
    <div>
        <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details to register.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
            <Input onChange={(e)=>handle(e)} id="username" value={data.username} size="lg" label="Username" type="text" required/>
            <Input onChange={(e)=>handle(e)} id="email" value={data.email} size="lg" label="Email" type="email" required />
            <Input onChange={(e)=>handle(e)} id="password" value={data.password} type="password" size="lg" label="Password" required />
          </div>
         
          <Button type="submit" onSubmit={saveAPIData} className="mt-6" fullWidth>
            Register
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <a href="#" className="font-medium text-gray-900">
              Sign In
            </a>
          </Typography>
        </form>
      </Card>
    </div>
    )
}

