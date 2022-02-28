import { motion, AnimatePresence } from "framer-motion";
import FeedbackItem from "./FeedbackItem";
import { Feedback } from "../interfaces";

interface FeedbackListProps {
  feedbacks: Feedback[];
  handleDelete: (id: string) => void;
}

const FeedbackList = ({ feedbacks, handleDelete }: FeedbackListProps) => {
  return (
    <div className="flex flex-col gap-y-5">
      <AnimatePresence>
        {feedbacks.map((feedback) => (
          <motion.div key={feedback.id} initial={{opacity: 0}} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <FeedbackItem
              key={feedback.id}
              feedback={feedback}
              handleDelete={handleDelete}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default FeedbackList;
