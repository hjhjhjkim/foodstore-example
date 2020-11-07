import { writable } from "svelte/store";
export const foodstore = writable([
  { name: "치킨", price: 5000 },
  { name: "떡볶이", price: 1300 },
  { name: "콜라", price: 3000 },
]);
