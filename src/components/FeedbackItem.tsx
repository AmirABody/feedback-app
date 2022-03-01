import { useContext } from "react";
import FeedbackContext from "../contexts/FeedbackContext";
import { Feedback, FeedbackContextInterface } from "../interfaces";
import { FaTimes } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

interface FeedbackItemProps {
  feedback: Feedback;
}

const FeedbackItem = ({ feedback }: FeedbackItemProps) => {
  const { deleteFeedback, setFeedbackForEdit } = useContext(
    FeedbackContext
  ) as FeedbackContextInterface;

  return (
    <div className="bg-white p-5 rounded-md relative">
      <div className="absolute -top-0 -left-0 bg-amber-500 rounded-full text-white w-7 aspect-square -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-xs font-bold shadow">
        {feedback.rating}
      </div>
      <div className="flex justify-end gap-x-2 mb-3">
        <MdEdit
          className="bg-blue-50 p-[0.3rem] rounded-full box-content text-blue-500 cursor-pointer hover:bg-blue-100 transition-all"
          size={16}
          onClick={() => setFeedbackForEdit(feedback)}
        />
        <FaTimes
          className="bg-red-50 p-[0.3rem] rounded-full box-content text-red-600 cursor-pointer hover:bg-red-100 transition-all"
          size={16}
          onClick={() => {
            deleteFeedback(feedback.id);
          }}
        />
      </div>
      <div className="text-justify text-sm text-gray-900">{feedback.text}</div>
    </div>
  );
};

export default FeedbackItem;
