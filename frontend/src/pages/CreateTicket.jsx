import { useState } from "react";
import { createTicket } from "../api/ticketApi";
import { useNavigate } from "react-router-dom";
  import { toast } from 'react-toastify';

export default function CreateTicket() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    description: ""
  })

  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const data = await createTicket(form)
    if(data.success){
      toast.success(data.message)
    }
    else{
      toast.error(data.message)
    }

    setLoading(false)
    navigate("/")
  }

  return (
    <div className="h-full flex items-center justify-center p-4">
      
      <div className="bg-white w-full max-w-md p-6 rounded-2xl shadow-md">
        
        <h1 className="text-2xl font-bold mb-6 text-center">
          Create Support Ticket
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          
          <div>
            <label className="text-sm font-medium text-gray-600">
              Name
            </label>
            <input
              type="text"
              required
              placeholder="Enter your name"
              className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-600">
              Issue Description
            </label>
            <textarea
              required
              rows="4"
              placeholder="Describe your issue..."
              className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-lg text-white font-semibold transition ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            {loading ? "Processing..." : "Submit Ticket"}
          </button>
        </form>

      </div>
    </div>
  )
}