import React from 'react'

function Index(props) {
  return (
   
    <div className="wrapper mt-8">
    {props.type === 'link' ? 
    <a href={props.link} className={" font-bold text-white mx-auto border-white border text-center py-3 px-8 hover:bg-zion-lightblue hover:bg-opacity-50" }
    target={props.target}
    >
        {props.text}
    </a> : 
    <button className={" font-bold text-white mx-auto border-white border text-center py-3 px-8 hover:bg-zion-lightblue hover:bg-zion-lightblue hover:bg-opacity-50"} >
    {props.text}
    </button>
    }
    </div>
  )
}

export default Index