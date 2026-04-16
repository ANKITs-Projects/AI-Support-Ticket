const BASE_URL = import.meta.env.VITE_BACKEND_URL;

export const createTicket = async (data) => {
  const res = await fetch(`${BASE_URL}/tickets`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return await res.json();
}

export const getTickets = async () => {
  const res = await fetch(`${BASE_URL}/tickets`)
  return await res.json()
};

export const getTicket = async (id) => {
  const res = await fetch(`${BASE_URL}/tickets/${id}`)
  return await res.json()
};

export const updateStatus = async (id, status) => {
  const res = await fetch(`${BASE_URL}/tickets/${id}/status`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status }),
  });
  return await res.json()
};

export const updateReply = async (id, reply) => {
  const res = await fetch(`${BASE_URL}/tickets/${id}/reply`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ reply }),
  });
  return await res.json()
};
