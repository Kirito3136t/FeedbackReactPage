import Header from './components/Header'
import {useState} from 'react'
import FeedbackData from './data/feedbackdata'
import FeedbackItem from './components/FeedbackItem'
import FeedbackList from './components/FeedbackList'

function App(){
    const [feedback,setfeedback]=useState(FeedbackData)
    const deleteFeedback=(id)=>(
      console.log('App')
    )
    return(

        <>
        <Header/>
        <div className='container'>
          <FeedbackList feedback={feedback} handledelete ={deleteFeedback}/>
        </div>
        </>
    )
    }
export default App