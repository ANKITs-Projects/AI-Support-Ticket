import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTicket, updateStatus, updateReply } from "../api/ticketApi";

export default function TicketDetail() {
  const { id } = useParams()
  const [ticket, setTicket] = useState(null)
  const [reply, setReply] = useState("")

  const fetchTicket = async () => {
    const res = await getTicket(id)
    setTicket(res);
      setReply(res.aiReply || "")
  }

  useEffect(() => {
    fetchTicket()
  }, [id])

  if (!ticket) {
    return <div className="p-6">Loading...</div>
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow">

        {/* Header */}
        <h1 className="text-2xl font-bold mb-4">Ticket Detail</h1>

        {/* User Info */}
        <div className="mb-4">
          <p className="text-sm text-gray-600">
            <span className="font-semibold">Name:</span> {ticket.name}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-semibold">Email:</span> {ticket.email}
          </p>
        </div>

        {/* Description */}
        <div className="mb-4">
          <h2 className="font-semibold mb-1">Issue</h2>
          <p className="text-gray-800 bg-gray-50 p-3 rounded-lg">
            {ticket.description}
          </p>
        </div>

        {/* Badges */}
        <div className="flex gap-2 mb-4">
          <span
            className={`px-3 py-1 text-xs rounded-full font-semibold ${
              ticket.category === "PAYMENT"
                ? "bg-green-100 text-green-700"
                : ticket.category === "LOGIN"
                ? "bg-blue-100 text-blue-700"
                : ticket.category === "BUG"
                ? "bg-red-100 text-red-700"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {ticket.category}
          </span>

          <span
            className={`px-3 py-1 text-xs rounded-full font-semibold ${
              ticket.status === "OPEN"
                ? "bg-yellow-100 text-yellow-700"
                : "bg-green-100 text-green-700"
            }`}
          >
            {ticket.status}
          </span>
        </div>

        {/* AI Reply */}
        <div className="mb-4">
          <h2 className="font-semibold mb-1">AI Suggested Reply</h2>
          <textarea
            value={reply}
            onChange={(e) => setReply(e.target.value)}
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows="4"
          />
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <button
            onClick={() => {
              updateReply(id, reply)
              fetchTicket()
            } }
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Update Reply
          </button>

          <button
            onClick={() => {
              updateStatus(id, "RESOLVED")
              fetchTicket()
            }}
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
          >
            Mark Resolved
          </button>
        </div>

        {/* Created Time */}
        <p className="text-xs text-gray-400 mt-4">
          Created at: {new Date(ticket.createdAt).toLocaleString()}
        </p>

      </div>
    </div>
  )
}