import "./App.css";
import { ThemeProvider } from "@emotion/react";
import themes from "./theme/themes";
import Header from "./components/Header";

function App() {
  const theme = themes["dark"];
  return (
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  );
}

export default App;
