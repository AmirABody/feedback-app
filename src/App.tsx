import Header from "./components/Header";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackList from "./components/FeedbackList";
import FeedbackForm from "./components/FeedbackForm";
import { useState } from "react";
import { Feedback } from "./interfaces";
import { feedbacks as feedbacksData } from "./data/feedbacks";

function App() {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>(feedbacksData);

  // Delete Feedback
  const deleteFeedback = (id: number): void => {
    if (window.confirm("Are you sure you want to delete the feedback!?"))
      setFeedbacks(feedbacks.filter((feedback) => feedback.id !== id));
  };

  return (
    <div className="bg-purple-800 min-h-screen">
      <Header />
      <div className=" max-w-xl mx-auto p-6">
        <FeedbackForm />
        <FeedbackStats feedbacks={feedbacks} />
        <FeedbackList feedbacks={feedbacks} handleDelete={deleteFeedback} />
      </div>
    </div>
  );
}

export default App;
