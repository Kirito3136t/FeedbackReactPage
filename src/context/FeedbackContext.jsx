import { createContext ,useState} from 'react'
import {v4 as uuidv4} from 'uuid'

const FeedbackContext = createContext()



export const FeedbackProvider = ({children})=>{
    const [feedback,setFeedback]=useState([{
        id:1,
        text:'This item is from context',
        rating:8
    }
  ])

  const [feedbackEdit,setFeedbackEdit] = useState({
    item:{},
    edit:false}
  )

    const addFeedback=(newFeedback)=>{
        newFeedback.id=uuidv4()
        setFeedback([newFeedback, ...feedback])
      }
    
    const deleteFeedback=(id)=>
    {if(window.confirm("Are You Sure You Want To Delete ?"))
    {
      setFeedback(feedback.filter((item)=>item.id !==id))
    }}

    const editFeedback=(item)=>{
      setFeedbackEdit({
        item,
        edit:true
      })
    }

    const updateFeedback = (id,updID) => {
      setFeedback(feedback.map((item)=>item.id===id ? {
        ...item , ...updID}:item))
    }

    return <FeedbackContext.Provider value={{
      feedback,
      feedbackEdit,
      deleteFeedback,
      addFeedback,
      editFeedback,
      updateFeedback,
      }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext