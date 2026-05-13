import Card from "./Components/Card"
import ThemeBtn from "./Components/Themebtn"
import { ThemeProvider } from "./Context/Context"
import { useState, useEffect } from "react"

function App() {
  const [themeMode, setThemeMode] = useState("light")
  
  const darkTheme = () => {
    setThemeMode("dark")
  } 

  const lightTheme = () => {
    setThemeMode("light")
  }

  // Actual change in Theme


  useEffect(() => {

    if(themeMode === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [themeMode])

  return (
  <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
    <div className="flex flex-wrap min-h-screen items-center">
  <div className="w-full">
      <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          <ThemeBtn />
      </div>
              
      <div className="w-full max-w-sm mx-auto">
        <Card />
      </div>
  </div>
    </div>
  </ThemeProvider>
  )
}

export default App
