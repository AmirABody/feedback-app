import FeedbackItem from "./FeedbackItem";
import { Feedback } from "../interfaces";

interface FeedbackListProps {
  feedbacks: Feedback[];
  handleDelete: (id: number) => void;
}

const FeedbackList = ({ feedbacks, handleDelete }: FeedbackListProps) => {
  return (
    <div className="flex flex-col gap-y-5">
      {feedbacks.map((feedback) => (
        <FeedbackItem key={feedback.id} feedback={feedback} handleDelete={handleDelete} />
      ))}
    </div>
  );
};

export default FeedbackList;
