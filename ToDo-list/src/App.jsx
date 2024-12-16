import Todo from "./components/Todo";
import { Box, Container, createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
});

function App() {
  return (
    // <div className='bg-stone-600 grid py-4 min-h-screen text-cyan-50'>
    //   <Todo/>
    // </div>
    <ThemeProvider theme={theme}>
      <Box 
        sx={{
          height: "100vh",
          backgroundColor: "#1c1917",
          color: "#ecfeff",
          display: "grid",
          margin:'0',
          padding:'0'

        }}
      >
        <Todo />
      </Box>
    </ThemeProvider>
  );
}

export default App;
