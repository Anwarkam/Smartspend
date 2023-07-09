import React from "react";
import Home from "./components/home";
import Header from "./components/header";
import { 
  Route, 
  BrowserRouter as Router,
   Routes, 
  } from "react-router-dom";
import AddExpense from "./components/pages/ass-expense";
import Footer from "./components/footer";



function App() {
  return (
    <Router>
     <Header />
     
     <Routes>
     
     <Route path="/" exact Component={Home} />
      <Route path="/add-expense" Component={AddExpense} />
      </Routes>
     <Footer />
     
     
     
    
    </Router>
    
  );
}

export default App;
