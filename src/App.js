import Header from './components/Header'
import {useState} from 'react'
import FeedbackData from './data/feedbackdata'
import FeedbackItem from './components/FeedbackItem'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'

function App(){
    const [feedback,setfeedback]=useState(FeedbackData)
    const deleteFeedback=(id)=>
    {if(window.confirm("Are You Sure You Want To Delete ?"))
    {
      setfeedback(feedback.filter((item)=>item.id !=id))
    }}
    return(

        <>
        <Header/>
        <div className='container'>
          <FeedbackForm/>
          <FeedbackStats feedback={feedback}/>
          <FeedbackList feedback={feedback} handledelete ={deleteFeedback}/>
        </div>
        </>
    )
    }
export default App