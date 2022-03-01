import { useContext } from "react";
import FeedbackContext from "../contexts/FeedbackContext";
import { motion, AnimatePresence } from "framer-motion";
import { FeedbackContextInterface } from "../interfaces";
import FeedbackItem from "./FeedbackItem";

const FeedbackList = () => {
  const { feedbacks } = useContext(FeedbackContext) as FeedbackContextInterface;

  return (
    <div className="flex flex-col gap-y-5">
      <AnimatePresence>
        {feedbacks.map((feedback) => (
          <motion.div
            key={feedback.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem key={feedback.id} feedback={feedback} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default FeedbackList;
