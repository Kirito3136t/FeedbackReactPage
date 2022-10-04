import FeedbackItem from "./FeedbackItem"
import PropTypes from 'prop-types'

function Feedbacklist({feedback,handledelete}) {
    console.log(feedback)
    if(!feedback || feedback.length===0){
        return <p>No Feedback Yet</p>
    }
    
  return (
    <div className="Feedback-list">
      {feedback.map((item)=>(
     <FeedbackItem key={item.id} 
     item={item}
     handleDelete={handledelete}
     />
      ))}
     
    </div>
    
  )
}

Feedbacklist.propTypes={
  feedback: PropTypes.arrayOf(
    PropTypes.shape(
      {
        id:PropTypes.number.isRequired,
        text:PropTypes.string.isRequired,
        rating:PropTypes.number.isRequired
      }
    )
  )
}
export default Feedbacklist
