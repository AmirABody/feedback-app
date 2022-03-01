import { createContext, useState, useEffect } from "react";
import { Feedback, FeedbackContextInterface } from "../interfaces";

const FeedbackContext = createContext<FeedbackContextInterface | null>(null);

interface FeedbackProviderProps {
  children: React.ReactNode;
}

export const FeedbackProvider = ({ children }: FeedbackProviderProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [feedbackForEdit, setFeedbackForEdit] = useState<Feedback | null>(null);

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  // Fetch Feedbacks
  const fetchFeedbacks = async () => {
    const res = await fetch("/feedbacks?_sort=id&_order=desc");
    const data = await res.json();

    setFeedbacks(data);
    setIsLoading(false);
  };

  // Add Feedback
  const addFeedback = async (newFeedback: Feedback) => {
    const res = await fetch("/feedbacks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFeedback),
    });
    const data = await res.json();

    setFeedbacks([data, ...feedbacks]);
  };

  // Delete Feedback
  const deleteFeedback = async (id: string) => {
    if (window.confirm("Are you sure you want to delete the feedback!?")) {
      await fetch(`/feedbacks/${id}`, {
        method: "DELETE",
      });
      setFeedbacks(feedbacks.filter((feedback) => feedback.id !== id));
    }
  };

  // Update Feedback
  const updateFeedback = async (id: string, updFeedack: Feedback) => {
    const res = await fetch(`/feedbacks/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...updFeedack, id })
    });
    const data = await res.json();

    setFeedbacks(
      feedbacks.map((feedback) =>
        feedback.id === id ? { ...data } : feedback
      )
    );
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedbacks,
        feedbackForEdit,
        isLoading,
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
