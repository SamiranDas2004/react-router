import React, { useEffect, useState } from 'react'

function Github() {
    
    const [Data,setData]=useState([]);

    useEffect(()=>{
        fetch(`https://api.github.com/users/SamiranDas2004`)
        .then(response=>response.json())
        .then(data=>{
            console.log(data);
            setData(data)
        })
    },[])
  return (
    <div>Github followers :{Data.location}
    <img src={Data.avatar_url}/>
    </div>
  )
}

export default Github