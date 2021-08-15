import api from "./api";

export default async function Auth(data): Promise<any> {
  return api.post("auth", data);
}
