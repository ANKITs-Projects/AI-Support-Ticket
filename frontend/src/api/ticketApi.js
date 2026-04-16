const BASE_URL = import.meta.env.VITE_BACKEND_URL;

export const createTicket = async (data) => {
  const res = await fetch(`${BASE_URL}/tickets`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const responce = await res.json()
  return responce
}

export const getTickets = async () => {
  const res = await fetch(`${BASE_URL}/tickets`)
  const responce = await res.json()
  return responce
};

export const getTicket = async (id) => {
  const res = await fetch(`${BASE_URL}/tickets/${id}`)
  const responce = await res.json()
  return responce
};

export const updateStatus = async (id, status) => {
  const res = await fetch(`${BASE_URL}/tickets/${id}/status`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status }),
  });
  const responce = await res.json()
  return responce
};

export const updateReply = async (id, reply) => {
  const res = await fetch(`${BASE_URL}/tickets/${id}/reply`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ reply }),
  });
  const responce = await res.json()
  return responce
};
