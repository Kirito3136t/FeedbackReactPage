import Card from "./shared/Card"
import {useState} from 'react'
import Button from "./shared/Button"
import RatingSelect from "./RatingSelect"

function FeedbackForm({handleAdd}) {

    const [text,setText]=useState('')
    const[rating,selectrating]=useState(10)
    const [BtnDisabled,setbtnDisabled]=useState(true)
    const [message,setMessage]=useState('')

    const changetext=(e)=>{
      if(text === ''){
        setbtnDisabled(true)
        setMessage(null)
      }
      else if(text !== '' && text.trim().length <= 10){
       
        setMessage('Text Must Be Atleast 10 charachters ')
        setbtnDisabled(true)
      }
      else{
        setbtnDisabled(false)
        setMessage(null)
      }
        setText(e.target.value);
    }

    const handleSubmit=(e)=>{
      e.preventDefault()
      if(text.trim().length>10){
        const newFeedback={
        text,
        rating
        }
        handleAdd(newFeedback)
        setText('')
      }
    }
    
  return (
    <Card>
      <form onSubmit={handleSubmit} >
          <h2>How would u Rate Your Service With Us </h2>
          <RatingSelect select={(rating)=>{selectrating(rating)}}/>
          <div className="input-group">
            <input onChange={changetext} type='text' placeholder='Write a review ' value={text}></input>
            <Button type='submit' isDisabled={BtnDisabled}>Submit</Button>
          </div>
          {message && <div className="message">{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm
