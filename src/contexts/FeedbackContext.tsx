import { v4 as uuidv4 } from "uuid";
import { createContext, useState } from "react";
import { Feedback, FeedbackContextInterface } from "../interfaces";
import { feedbacks as feedbacksData } from "../data/feedbacks";

const FeedbackContext = createContext<FeedbackContextInterface | null>(null);

interface FeedbackProviderProps {
  children: React.ReactNode;
}

export const FeedbackProvider = ({ children }: FeedbackProviderProps) => {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>(feedbacksData);
  const [feedbackForEdit, setFeedbackForEdit] = useState<Feedback | null>(null);

  // Add Feedback
  const addFeedback = (newFeedback: Feedback): void => {
    newFeedback.id = uuidv4();
    setFeedbacks([newFeedback, ...feedbacks]);
  };

  // Delete Feedback
  const deleteFeedback = (id: string): void => {
    if (window.confirm("Are you sure you want to delete the feedback!?"))
      setFeedbacks(feedbacks.filter((feedback) => feedback.id !== id));
  };

  // Update Feedback
  const updateFeedback = (id: string, updFeedack: Feedback): void => {
    setFeedbacks(
      feedbacks.map((feedback) =>
        feedback.id === id ? { ...updFeedack, id } : feedback
      )
    );
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedbacks,
        feedbackForEdit,
        addFeedback,
        deleteFeedback,
        updateFeedback,
        setFeedbackForEdit,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
