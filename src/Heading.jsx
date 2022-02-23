import React from 'react'

export default function Heading() {
 const heading_style={
    
     color:"White",

     textAlign:"center",
  marginTop:"10px"
    }
 
    return (
   <>
   
   <div className='col' style={heading_style}>
      <h1>Top 6 NetFlix Series</h1>
    </div>
<hr style={{color:"white"
}} />
</>
  )
}
