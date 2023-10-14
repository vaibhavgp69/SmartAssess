import { useState } from "react"
import { Button } from "@material-tailwind/react"
import { useEffect } from "react"

export function Dashboard(){
    const [data,setData] = useState()
    const [library,setLibrary] = useState([])
    console.log(data)

    const saveAPIData = async()=>{

        const url = 'http://127.0.0.1:8000/api/newsession'
        let formData = new FormData()
        formData.append('pdf_file',data)
        let result = await fetch(url,{
            method:"POST",
            body:formData
        })

       result = await result.json()
       console.log(result)       
       window.location.reload() 
    }


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

    return(
        <div>
            <div className="mb-[6rem]"><br></br></div>
            <div>
            {library.map((i)=>(
                <div>
                    {i.session_name}
                </div>
            ))}
            </div>
            <input type="file" accept=".pdf" onChange={(event) => setData(event.target.files[0])} />
            <Button type="button" onClick={saveAPIData} className="mt-6" fullWidth>
            upload
          </Button>
        </div>
    )
}