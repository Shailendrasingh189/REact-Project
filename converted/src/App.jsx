import { useState } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// const themes = [
//   { color: "primary", bg: "light" }, // Primary text on Light background
//   { color: "secondary", bg: "dark" }, // Secondary text on Dark background
//   { color: "success", bg: "warning" }, // Success text on Warning background
//   { color: "danger", bg: "info" }, // Danger text on Info background
//   { color: "warning", bg: "success" }, // Warning text on Success background
//   { color: "info", bg: "danger" }, // Info text on Danger background
//   { color: "light", bg: "secondary" }, // Light text on Secondary background
//   { color: "dark", bg: "light" }, // Dark text on Light background
//   { color: "primary", bg: "warning" }, // Primary text on Warning background
//   { color: "success", bg: "danger" }, // Success text on Danger background
// ];

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  // const [themeIndex, setThemeIndex] = useState(0);

  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#2b2f32";
      document.body.style.color = "#fff";
      showAlert("Dark Mode Enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#fff";
      document.body.style.color = "#2b2f32";
      showAlert("Light Mode Enabled", "success");
    }
  };

  // const changeTheme = () => {
  //   setThemeIndex((prevIndex) => (prevIndex + 1) % themes.length);
  //   document.body.style.backgroundColor = themes[themeIndex].bg;
  //   document.body.style.color = themes[themeIndex].color;

  //   console.log(themes[themeIndex].color);
  // };


  return (
    <>
      <Router>
        <div
          className=
          // {`
            "vh-100" 
            //  text-${themes[themeIndex].color} bg-${themes[themeIndex].bg}
            // `}
        >
          <Navbar
            title="MyWeb"
            mode={mode}
            // themeIndex={themes[themeIndex]}
            toggleMode={toggleMode}
            // changeTheme={changeTheme}
          />
          {/* <RouterProvider router={router} /> */}
          {<Alert alert={alert} />}
          <div className="container my-3">
            <Routes>
              <Route
                path="/"
                element={
                  <TextForm
                    heading="Enter the text to analyze"
                    showAlert={showAlert}
                    mode= {mode}
                  />
                }
              />
              <Route path="/about" element={<About mode={mode} />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
