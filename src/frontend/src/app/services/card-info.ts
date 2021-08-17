import api from "./api";

export type CardInfoResonse = {
  card_number: string;
  expirate_at: string;
  messages: Array<any>;
  name: string;
  status: String;
  updated_at: string;
  value: string;
};

export default async function cardInfoService(): Promise<CardInfoResonse> {
  const {
    data: { data },
  } = await api.get("/info");
  return data;
}
