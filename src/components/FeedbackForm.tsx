import { useState } from "react";
import { Feedback } from "../interfaces";
import RatingSelect from "./RatingSelect";

interface FeedbackFormProps {
  handleAdd: (newFeedback: Feedback) => void;
}

const FeedbackForm = ({ handleAdd }: FeedbackFormProps) => {
  const [text, setText] = useState<string>("");
  const [rating, setRating] = useState<number>(10);
  const [btnDisabled, setBtnDisabled] = useState<boolean>(true);
  const [message, setMessage] = useState<string>("");

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (!value) {
      setMessage("");
      setBtnDisabled(true);
    } else if (value.length < 10) {
      setMessage("Review must be at least 10 characters!");
      setBtnDisabled(true);
    } else {
      setMessage("");
      setBtnDisabled(false);
    }

    setText(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (text.trim().length >= 10) {
      const newFeedback: Feedback = {
        id: "0",
        text,
        rating,
      };

      handleAdd(newFeedback);

      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded p-4 mb-4">
      <h2 className="text-gray-900 text-lg text-center font-medium mb-4">
        How would you rate our application?
      </h2>
      <RatingSelect min={1} max={10} select={(rating) => setRating(rating)} />
      <div className="flex items-center justify-between mb-1">
        <input
          type="text"
          className="focus:outline-none text-gray-700 w-full border-y border-l py-1 px-2 rounded-l-sm"
          value={text}
          placeholder="Write a review"
          onChange={handleTextChange}
        />
        <button
          type="submit"
          className="bg-amber-500 text-white px-3 py-1 rounded-r-sm text-sm self-stretch hover:bg-amber-400 disabled:bg-gray-300 transition-all"
          disabled={btnDisabled}
        >
          Add
        </button>
      </div>
      {message && <div className="text-[0.8rem] text-red-400">{message}</div>}
    </form>
  );
};

export default FeedbackForm;
