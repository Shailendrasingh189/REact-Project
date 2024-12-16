import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import NoteState from "./context/notes/NoteState";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import LoginForm from "./pages/LoginForm";
import SignUpForm from "./pages/SignUpForm";

function App() {
  return (
    <>
      <NoteState>
        <Navbar />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick={true}
          rtl={false}
          pauseOnFocusLoss={false}
          draggable={true}
          pauseOnHover={true}
          limit={3}
          style={{ marginTop: "50px" }}
        />
        <div className="w-full absolute mt-16 h-[calc(100vh-4rem)] overflow-y-auto bg-neutral-900">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SignUpForm />} />
          </Routes>
        </div>
      </NoteState>
    </>
  );
}

export default App;
