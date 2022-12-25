import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import MyForm from "./components/Form";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Resgister from "./pages/Resgister";

function App() {
  return (
    <>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Resgister />} />
            <Route path="/add_todo" element={<MyForm />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
