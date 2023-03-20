import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Nav } from './Componenet'

import Shop from './pages/Shop/Shop'
import Cart from './pages/Cart/Cart'

import { ContextProvider } from './Context/Context'

const App = () => {
    return (
        <ContextProvider>
            <div>
                <Router>
                    <Nav />
                    <br />
                    <Routes>
                        
                        <Route exact path="/" element={<Shop />} />
                        <Route path="/Cart" element={<Cart />} />
                        

                    </Routes>
                </Router>
            </div>
        </ContextProvider>
    )
}

export default App