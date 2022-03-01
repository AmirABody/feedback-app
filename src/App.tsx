import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackList from "./components/FeedbackList";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import { FeedbackProvider } from "./contexts/FeedbackContext";
import AboutPageIcon from "./components/AboutPageIcon";

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <div className="bg-stone-800 min-h-screen">
          <Header />
          <div className=" max-w-xl mx-auto p-6">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <FeedbackForm />
                    <FeedbackStats />
                    <FeedbackList />
                    <Link
                      to="/about"
                      className="fixed text-black bottom-0 right-0 m-4"
                    >
                      <AboutPageIcon />
                    </Link>
                  </>
                }
              />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </div>
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
