
import { eventWrapper } from "@testing-library/user-event/dist/utils";
import axios from "axios"
import { useState } from "react";

const Project=()=>{
   
    const city = 'london'; // Replace with the desired city
    const[input,setinput]=useState("")
    const[data,setdata]=useState({})
    const inputhandler=(event)=>{
      setinput(event.target.value)
    }
    
  const handleData=(event)=>{
    event.preventDefault();
    axios.get( `https://api.api-ninjas.com/v1/airquality?city=${input}`, {
        headers: {
          'X-Api-Key': "oLMeXSx/N/c+JCKBM4F/5A==ggDDT4PRCZ29CxFZ",
        },
      })
        .then(response => {
              setdata(response.data);
             console.log(response.data);
        })
        .catch(error => {
          console.error(`Error: ${error.message}`);
        });
      
   }
//    https://api.api-ninjas.com/v1/airquality?city=london
//    `https://api.api-ninjas.com/v1/airquality?city=${city}`
    
// let searchText = document.getElementByID('searchText').value;
// let searchBtn = document.getElementByID('searchBtn').addEventListener('click',search());

// async function search(){
//   let results = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${searchText}/&api_key=dc6zaTOxFJmzC`)
//   console.log(results);
// }

    return(
        <>
        <form onSubmit={handleData}>
          <input type="text" value={input} onChange={inputhandler}/>
          <button type="submit">SEND REQUEST</button>
        </form>
      <br/>
  <h1 style={{backgroundColor:"black",color:"white"}}> AIR QUALITY OF {input} </h1>
  <br/>
      <ol>
   { <h3>Overall_Aqi :{(data.overall_aqi)}</h3>}
   { <div>CO : {JSON.stringify(data.CO)}</div>}
   { <div>NO2 : {JSON.stringify(data.NO2)}</div>}
   { <div>O3 : {JSON.stringify(data.O3)}</div>}
   { <div>PM 10 : {JSON.stringify(data.PM10)}</div>}
   { <div>SO2 : {JSON.stringify(data.SO2)}</div>}

      </ol>

        </>
    )
}
export default Project




// import React, {useEffect, useState} from "react";
// import axios from 'axios';

// function PostListPageByUser() {
//     const [posts, setPost] = useState([]);
//     const [userId, setUserId] = useState([]);
//     let signal = axios.CancelToken.source();

//     function handleChange(event) {
//         setUserId(event.target.value);
//     }

//     function handleSubmit(event) {
//         event.preventDefault();
//         axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`, {
//             cancelToken: signal.token,
//         })
//             .then(res => {
//                 const posts = res.data;
//                 setPost(posts);
//             }).catch(err => {
//             console.log(err);
//         });
//     }

//     return (
//         <form onSubmit={handleSubmit}>
//             <span>Enter User Id</span>
//             <input type="text" onChange={handleChange}/>
//             <button type="submit">Get Posts By User</button>
//             <ul>
//                 {
//                     posts.map(post => <li key={post.id}>{post.title}</li>)
//                 }
//             </ul>
//         </form>
//     );
// }

// export default PostListPageByUser