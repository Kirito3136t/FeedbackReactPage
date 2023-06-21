import Card from "./shared/Card"
import { useContext } from "react"
import FeedbackContext from "../context/FeedbackContext"
import {FaTimes,FaEdit} from 'react-icons/fa'
function FeedbackItem({item}) {

  const{deleteFeedback,editFeedback} = useContext(FeedbackContext)
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
        <button onClick={()=>(deleteFeedback(item.id))} className="close">
          <FaTimes color="Purple"/>
        </button>
        <button onClick={()=>{editFeedback(item)}}className="edit">
          <FaEdit color="purple"/>
        </button>
        <div className="text-display">{item.text}</div>
        {/* <button onClick={handleclick}>Click</button> */}
   </Card>
  )
}

export default FeedbackItem