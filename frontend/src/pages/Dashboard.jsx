import { useEffect, useState } from "react";
import { getTickets } from "../api/ticketApi";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import { HashLoader  } from "react-spinners";

export default function Dashboard() {
  const [tickets, setTickets] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchTickets = async () => {
    setLoading(true)
    const data = await getTickets()
    if(!data.success){
      setLoading(false)
      toast.error(data.message)
      return
    }

    setTickets(data.tickets)
    setLoading(false)
  }
  useEffect(() => {
    fetchTickets()
  }, []);

  if(loading){
    return (
    <div className="h-full w-full flex justify-center items-center">     
      <HashLoader 
        color={"#2b7fff"}
        loading={loading}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
  }

  return (
    <div className="h-full p-6 overflow-y-auto no-scrollbar">
      <h1 className="text-2xl font-bold mb-6">Support Tickets</h1>

      <div className="grid gap-4">
        {tickets.map((t) => (
          <Link
            to={`/ticket/${t._id}`}
            key={t._id}
            className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition"
          >
            
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