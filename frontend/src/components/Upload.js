import { useState } from "react"
import { Button } from "@material-tailwind/react"

export function Dashboard(){
    const [data,setData] = useState()
    console.log(data)

    const saveAPIData = async()=>{
        
        const url = ''
        let result = await fetch(url,{
            method:"POST",
            headers:{"Content-Type":"multipart/form-data"},
            body:data
        })

       result = await result.json()
       console.log(result)
       

    }

    return(
        <div>
            <div className="mb-[6rem]"><br></br></div>
            <input type="file" onChange={(event) => setData({ selectedFile: event.target.files[0] })} />
            <Button type="button" onClick={saveAPIData} className="mt-6" fullWidth>
            upload
          </Button>
        </div>
    )
}