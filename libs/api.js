import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "karinachka",
  apiKey: process.env.API_KEY,
});
