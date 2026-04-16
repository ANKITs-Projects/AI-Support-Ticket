import { useEffect, useState } from "react";
import { getTickets } from "../api/ticketApi";
import { Link } from "react-router-dom";
  import { toast } from 'react-toastify';

export default function Dashboard() {
  const [tickets, setTickets] = useState([])

  const fetchTickets = async () => {
    const data = await getTickets()
    if(!data.success){
      toast.error(data.message)
      return
    }

    setTickets(data.tickets)
  }
  useEffect(() => {
    fetchTickets()
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6">Support Tickets</h1>

      <div className="grid gap-4">
        {tickets.map((t) => (
          <Link
            to={`/ticket/${t._id}`}
            key={t._id}
            className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition"
          >
            {/* Description */}
            <p className="text-gray-800 font-medium mb-2">
              {t.description.slice(0, 60)}...
            </p>

            <div className="flex items-center justify-between">
              <div className="flex gap-2">
               
                <span
                  className={`px-3 py-1 text-xs rounded-full font-semibold ${
                    t.category === "PAYMENT"
                      ? "bg-green-100 text-green-700"
                      : t.category === "LOGIN"
                      ? "bg-blue-100 text-blue-700"
                      : t.category === "BUG"
                      ? "bg-red-100 text-red-700"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {t.category}
                </span>

                <span
                  className={`px-3 py-1 text-xs rounded-full font-semibold ${
                    t.status === "OPEN"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-green-100 text-green-700"
                  }`}
                >
                  {t.status}
                </span>
              </div>

              <span className="text-xs text-gray-500">
                {new Date(t.createdAt).toLocaleString()}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}