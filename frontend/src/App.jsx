
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateTicket from "./pages/CreateTicket";
import Dashboard from "./pages/Dashboard";
import TicketDetail from "./pages/TicketDetail";
import Header from './components/Header';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="h-screen w-screen bg-gray-100 flex flex-col items-center overflow-hidden">
      <BrowserRouter>
    <ToastContainer position="top-center"/>
    <Header />
        <div className="flex-1 w-[80%]  overflow-hidden">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/create" element={<CreateTicket />} />
        <Route path="/ticket/:id" element={<TicketDetail />} />
      </Routes>
        </div>
    </BrowserRouter>
    </div>
  )
}

export default App
