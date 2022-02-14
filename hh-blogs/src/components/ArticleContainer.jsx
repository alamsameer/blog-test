import React ,{useEffect} from 'react'
import Article from './Article'
export default function ArticleContainer() {
    useEffect( ()=>{
        async function fetchData(){
            let data = await fetch("https://api.healthhighway.co.in/explore/get-blogs/1/100/", { 
                method : 'POST',
                headers : {
                    "Content-Type" : "application/json"
                },
                timeout : 5000
              })
            let json = await data.json()
            console.log(json);
        }
        fetchData()
    },[])
  return (
    <div className='article-contaner'>
        article 
        <Article/>
    </div>
  )
}
