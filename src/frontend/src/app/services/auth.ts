import api from "./api";

type BodyRequest = {
  password: string;
  card_number: string;
};

export function sigin(token: string | null) {
  localStorage.setItem("api-token", token ?? "");
}

export function logout() {
  localStorage.removeItem("api-token");
}

export function getToken() {
  return localStorage.getItem("api-token");
}

export default async function Auth(data: BodyRequest) {
  const response = await api.post("auth", data);
  sigin(response?.data?.token);
  return response;
}
