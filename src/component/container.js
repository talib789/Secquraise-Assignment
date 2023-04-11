import React, { useEffect } from 'react'

const Container = (props) => {
  const data="./images/" + props.id.Name + ".jpg";
  useEffect(()=>{
  console.log(data)
  },[data])

  return (
    <>
    <div className="flex flex-col">
      <div className="text-xl font-bold mt-24 pl-5">{props.id.Gender}</div>
      <img src={ require("./images/" + props.id.Name + ".jpg") } alt="images" className="mt-20 mr-10 mb-10 h-100 w-96"></img>
      </div>
    </>
  )
}

export default Container