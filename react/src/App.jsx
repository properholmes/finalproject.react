import { Routes, Route } from 'react-router-dom' 
import Header from "./components/Header";
import Quotes from "./components/Quotes";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Homepage from './components/Homepage';



function App() {

 

  return (
    <>
    <Header />
    <Routes>
    <Route exact path="/" element={<Homepage />} />
   {/* Have a separate routes for each game  */}
    </Routes>
    <Footer />
    </>
  )
  
}

export default App
