import sendRequest from "../send-request";
const BASE_URL = "/api/contact";
export async function signUp(userData) {
  return sendRequest(`${BASE_URL}/signUpContact`, "POST", userData);
}
export async function logIn(credentials) {
  return sendRequest(`${BASE_URL}/login`, "POST", credentials);
}
export async function update(credentials) {
  console.log(credentials);
  return sendRequest(`${BASE_URL}/update`, "POST", credentials);
}

