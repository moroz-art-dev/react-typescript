import React from 'react'
//import {Switch} from 'react-router'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Navbar} from "./components/Navbar"
import {TodosPages} from "./pages/TodosPages";
import {AboutPages} from "./pages/AboutPages";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <div className="container">
                    <Routes>
                        <Route path="/" caseSensitive={true} element={<TodosPages />} />
                        <Route path="/about" element={<AboutPages />} />
                    </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App;
