
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateTicket from "./pages/CreateTicket";
import Dashboard from "./pages/Dashboard";
import TicketDetail from "./pages/TicketDetail";
import Header from './components/Header';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <BrowserRouter>
    <ToastContainer position="top-center"/>
    <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/create" element={<CreateTicket />} />
        <Route path="/ticket/:id" element={<TicketDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
