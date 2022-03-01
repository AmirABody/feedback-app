import { useState, useContext, useEffect } from "react";
import FeedbackContext from "../contexts/FeedbackContext";
import { Feedback, FeedbackContextInterface } from "../interfaces";
import RatingSelect from "./RatingSelect";

const FeedbackForm = () => {
  const [text, setText] = useState<string>("");
  const [rating, setRating] = useState<number>(10);
  const [btnDisabled, setBtnDisabled] = useState<boolean>(true);
  const [message, setMessage] = useState<string>("");

  const { addFeedback, feedbackForEdit, setFeedbackForEdit, updateFeedback } =
    useContext(FeedbackContext) as FeedbackContextInterface;

  useEffect(() => {
    if (feedbackForEdit) {
      setBtnDisabled(false);
      setText(feedbackForEdit.text);
      setRating(feedbackForEdit.rating);
    }
  }, [feedbackForEdit]);

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

  const resetForm = (): void => {
    setText("");
    setRating(10);
    setBtnDisabled(true);
  };

  const cancelEdit = (): void => {
    setFeedbackForEdit(null);
    resetForm()
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (text.trim().length >= 10) {
      const newFeedback: Feedback = {
        id: "0",
        text,
        rating,
      };

      if (feedbackForEdit) {
        updateFeedback(feedbackForEdit.id, newFeedback);
        setFeedbackForEdit(null);
      } else {
        addFeedback(newFeedback);
      }

      resetForm();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded p-4 mb-4">
      {feedbackForEdit && (
        <div className="relative">
          <button
            className="bg-red-50 text-red-500 text-xs px-1 py-[0.15rem] rounded-sm absolute right-0 hover:bg-red-300 hover:text-white transition-all"
            onClick={cancelEdit}
          >
            Cancel Edit
          </button>
        </div>
      )}
      <h2 className="text-gray-900 text-lg text-center font-medium mb-4">
        How would you rate our application?
      </h2>
      <RatingSelect min={1} max={10} rating={rating} setRating={setRating} />
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
          {feedbackForEdit ? "Edit" : "Add"}
        </button>
      </div>
      {message && <div className="text-[0.8rem] text-red-400">{message}</div>}
    </form>
  );
};

export default FeedbackForm;
