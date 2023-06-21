import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'



function Post() {

const navigate = useNavigate()

const onChange =()=> {
console.log('Hello')
navigate('/about')

}
  return (
    <div>
        Post 

        <button onClick={onChange}>Click</button>
    </div>
    
  )
}

export default Post