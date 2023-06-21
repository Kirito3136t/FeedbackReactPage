import FeedbackItem from "./FeedbackItem"
import PropTypes from 'prop-types'
import { useContext } from "react"
import FeedbackContext from "../context/FeedbackContext"

function Feedbacklist() {

  const {feedback} = useContext(FeedbackContext)
    
    if(!feedback || feedback.length===0){
        return <p>No Feedback Yet</p>
    }
    
  return (
    <div className="Feedback-list">
      {feedback.map((item)=>(
     <FeedbackItem 
     key={item.id} 
     item={item}
     />
      ))}
     
    </div>
    
  )
}


export default Feedbacklist
