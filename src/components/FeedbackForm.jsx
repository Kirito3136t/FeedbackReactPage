import Card from "./shared/Card"
import {useState} from 'react'
import Button from "./shared/Button"

function FeedbackForm() {

    const [text,setText]=useState('')
    const [BtnDisabled,setbtnDisabled]=useState(true)
    const [message,setMessage]=useState('')

    const changetext=(e)=>{
      if(text === ''){
        setbtnDisabled(true)
        setMessage(null)
      }
      else if(text !== '' && message.trim().length <= 10){
        const message=''
        setMessage('Text Must Be Atleast 10 charachters ')
        setbtnDisabled(true)
      }
      else{
        setbtnDisabled(false)
        setMessage(null)
      }
        setText(e.target.value);
    }
    
  return (
    <Card>
      <form >
          <h2>How would u Rate Your Service With Us </h2>
          {/* {wdjnaodowidjajdadw} */}
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
