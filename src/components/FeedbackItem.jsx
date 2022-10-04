import Card from "./shared/Card"
import PropTypes from 'prop-types'
import {FaTimes} from 'react-icons/fa'
function FeedbackItem({item,handledelete}) {
    // const [rating,setRating] = useState(7)
    // const[text,setText] = useState('The comment i want to show .')
    // const handleclick = () =>{
    //     setRating((prev)=>{
    //         return (prev+1)
    //     })
    // }
    
    // const deletefeedback=()=>(handledelete(item.id))
   
    return (
    <Card >
        <div className="num-display">{item.rating}</div>
        <button onClick={()=>(handledelete(item.id))} className="close">
          <FaTimes color="Purple"/>
        </button>
        <div className="text-display">{item.text}</div>
        {/* <button onClick={handleclick}>Click</button> */}
   </Card>
  )
}

FeedbackItem.propTypes={
  item:PropTypes.object.isRequired
}

export default FeedbackItem