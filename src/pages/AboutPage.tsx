import { Link } from "react-router-dom"

const AboutPage = () => {
  return (
    <div className="text-white font-semibold">
      <h4 className="text-center text-lg mb-2">About Page</h4>
      <h4 className="mb-2">This is an app for creating feedbacks for your service!</h4>

      <div className="text-slate-300 underline underline-offset-2">
        <Link to="/">Home</Link>
      </div>
    </div>
  )
}

export default AboutPage