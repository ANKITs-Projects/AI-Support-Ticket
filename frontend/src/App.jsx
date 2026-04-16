
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateTicket from "./pages/CreateTicket";
import Dashboard from "./pages/Dashboard";
import TicketDetail from "./pages/TicketDetail";
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
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
