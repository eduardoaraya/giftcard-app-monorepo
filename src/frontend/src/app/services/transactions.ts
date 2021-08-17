import api from "./api";

export default async function cardTransactions(
  page: string | null = "?page=1"
): Promise<any> {
  const {
    data: { data },
  } = await api.get("/transactions" + page);
  return data;
}
