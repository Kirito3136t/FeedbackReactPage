import {v4 as uuidv4} from 'uuid'
import Header from './components/Header'
import {useState} from 'react'
import FeedbackData from './data/feedbackdata'
import FeedbackItem from './components/FeedbackItem'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'

function App(){
    const [feedback,setfeedback]=useState(FeedbackData)
    
    const addFeedback=(newFeedback)=>{
      newFeedback.id=uuidv4()
      setfeedback([newFeedback, ...feedback])
    }

    const deleteFeedback=(id)=>
    {if(window.confirm("Are You Sure You Want To Delete ?"))
    {
      setfeedback(feedback.filter((item)=>item.id !=id))
    }}

    
    return(

        <>
        <Header/>
        <div className='container'>
          <FeedbackForm handleAdd={addFeedback}/>
          <FeedbackStats feedback={feedback}/>
          <FeedbackList feedback={feedback} handledelete ={deleteFeedback}/>
        </div>
        </>
    )
    }
export default App