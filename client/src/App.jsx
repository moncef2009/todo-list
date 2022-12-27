import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyForm from "./components/Form";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Resgister from "./pages/Resgister";
import Todos from "./components/Todos";

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
            <Route path="/todos" element={<Todos />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
