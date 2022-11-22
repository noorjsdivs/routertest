import axios from "axios";

export async function getUsers() {
  let userDate = await axios.get("https://jsonplaceholder.typicode.com/users");
  return userDate;
}
