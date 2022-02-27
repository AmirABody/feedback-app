import { Feedback } from "../interfaces";
import { FaTimes } from "react-icons/fa";

interface FeedbackItemProps {
  feedback: Feedback;
  handleDelete: (id: number) => void;
}

const FeedbackItem = ({ feedback, handleDelete }: FeedbackItemProps) => {
  return (
    <div className="bg-white p-5 rounded-md relative">
      <div className="absolute -top-0 -left-0 bg-amber-500 rounded-full text-white w-7 aspect-square -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-xs font-bold shadow">
        {feedback.rating}
      </div>
      <div
        className="cursor-pointer float-right text-red-600 mb-2"
        onClick={() => {
          handleDelete(feedback.id);
        }}
      >
        <FaTimes size={18} />
      </div>
      <div className="text-justify text-sm text-gray-900 clear-right">
        {feedback.text}
      </div>
    </div>
  );
};

export default FeedbackItem;
