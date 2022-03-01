import { useContext } from "react";
import FeedbackContext from "../contexts/FeedbackContext";
import { FeedbackContextInterface } from "../interfaces";

const FeedbackStats = () => {
  const { feedbacks } = useContext(FeedbackContext) as FeedbackContextInterface;

  // Calculate ratings average
  let average = (
    feedbacks.reduce((sum, feedback) => sum + feedback.rating, 0) /
    feedbacks.length
  )
    .toFixed(1)
    .replace(/[.,]0$/, "");

  return (
    <div className="flex justify-between text-white font-bold mb-5">
      <h4>{feedbacks.length} Reviews</h4>
      <h4>Average Rating: {isNaN(+average) ? 0 : average}</h4>
    </div>
  );
};

export default FeedbackStats;
