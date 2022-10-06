import Card from "./shared/Card"
import {useState} from 'react'
import Button from "./shared/Button"

function FeedbackForm() {

    const [text,setText]=useState('')

    const changetext=(e)=>{
        setText(e.target.value);
    }

  return (
    <Card>
      <form >
          <h2>How would u Rate Your Service With Us </h2>
          {/* {wdjnaodowidjajdadw} */}
          <div className="input-group">
            <input onChange={changetext} type="text" placeholder="Write a review "></input>
            <button type="submit" version="secondary">Submit</button>
          </div>
      </form>
    </Card>
  )
}

export default FeedbackForm
