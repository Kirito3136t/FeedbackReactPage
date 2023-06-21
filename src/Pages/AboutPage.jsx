import Card from "../components/shared/Card"
import {Link} from 'react-router-dom'

function AboutPage() {
  return (
    <Card>
        <div className="about">
            <h1>This is About Page</h1>
            <p>This is a feedback page for customers to review and give their opinion</p>
            <p>Verson 1.0.0</p>
            <Link to="/">Back to Home</Link>
        </div>
      
    </Card>
  )
}

export default AboutPage
