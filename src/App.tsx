import "./App.css"
import React from "react";
import { useState } from "react";
import Header from "./components/Header/components/Header";
import Sidebar from "./components/Sidebar/components/Sidebar";
import Watch from "./pages/Watch/index";
import Home from "./pages/Home/index";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { ThemeProvider } from "@mui/material";
import { darkTheme, lightTheme } from "./utils/Theme"; 


function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (

    
    <div className="App"><ThemeProvider theme={darkMode ? darkTheme : lightTheme}>

    <Router>

      <Header />

      <Routes>

        <Route path="/" 
            element =
            <Home />
            
            ></Route>

        <Route path="/watch"
        element = <Watch/>>
        </Route>

      </Routes>

    </Router>
    </ThemeProvider>
    </div>
  );
}

export default App;
