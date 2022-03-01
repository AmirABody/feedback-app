export interface Feedback {
  id: string;
  rating: number;
  text: string;
}

export interface FeedbackContextInterface {
  feedbacks: Feedback[];
  feedbackForEdit: Feedback | null;
  addFeedback: (newFeedback: Feedback) => void;
  deleteFeedback: (id: string) => void;
  updateFeedback: (id: string, updFeedack: Feedback) => void;
  setFeedbackForEdit: (feedback: Feedback | null) => void
}
