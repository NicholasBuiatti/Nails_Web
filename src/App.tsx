import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {motion} from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {BrowserRouter as Router} from "react-router-dom";
import AppRoutes from "./router/AppRouter";

import "./App.css";
const queryClient = new QueryClient();
function App() {
  return (
    <>
    <QueryClientProvider client={queryClient}>
      <Router>
      <div className="flex flex-col relative min-h-screen bg-[#FFFDFE] text-gray-800">
          <motion.div
            className="bg-blue-200 sticky top-0 z-50"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Navbar />
          </motion.div>
          <div className="flex-1">
            <AppRoutes />
          </div>
          <div className="bg-blue-200 items-end">
            <Footer />
          </div>
        </div>
      </Router>
    </QueryClientProvider>
    </>
  );
}

export default App;
