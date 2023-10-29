import React, { useEffect, useState } from 'react'

export default function UseEffect() {
    const [value,setValue]= useState(0)
    function handle(){
        setTimeout(()=>{
            setValue(value+1)
        },1000);
    }
    useEffect(()=>{
        handle();
    //when we leave the secondary variable the page could run infinite number of times
    },[])//Here without dependency array the page could run infinte times
    // In dependency array we can place some props or state variables to change the particular value
  return (
    <h1>This Page rendered {value} times</h1>
  )
}
