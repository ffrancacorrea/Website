import { useState } from "react"
import "./App.css"
import { ThemeProvider, Global, css, useTheme } from "@emotion/react"
import themes from "./theme/themes"
import Header from "./components/Header"
import About from "./components/About"
import Projects from "./components/Projects"
import Footer from "./components/Footer"

const GlobalStyle = () => {
  const theme = useTheme()
  return (
    <Global
      styles={css`
        body {
          background: ${theme.backgroundColor};
        }
      `}
    />
  )
}

const App = () => {
  const cachedDarkMode =
    window.localStorage.getItem("cachedDarkMode") === "true"
  const [darkMode, setDarkMode] = useState(cachedDarkMode)

  const handleDarkMode = (mode) => {
    localStorage.setItem("cachedDarkMode", mode)
    setDarkMode(mode)
  }

  return (
    <ThemeProvider theme={darkMode ? themes["dark"] : themes["light"]}>
      <GlobalStyle />
      <Header handleDarkMode={handleDarkMode} darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Projects />
      <Footer />
    </ThemeProvider>
  )
}

export default App
