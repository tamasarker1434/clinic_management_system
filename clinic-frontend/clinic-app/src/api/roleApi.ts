import axios from "axios";
import { Role } from "../models/Role";

const API_URL = "http://localhost:8081/api/roles"; // your backend endpoint

let roles: Role[] = [
  { id: "1", name: "Admin"},
  { id: "2", name: "Doctor" },
  { id: "3", name: "Nurse"}
];
export const getRoles = async () => {
  // const response = await axios.get(API_URL);
  // return response.data;
  return [...roles];
};

export const createRole = async (role: { id: string, name: string; }) => {
  const response = await axios.post(API_URL, role);
  return response.data;
};

export const updateRole = async (id: string, role: { name: string; }) => {
  const response = await axios.put(`${API_URL}/${id}`, role);
  return response.data;
};

export const deleteRole = async (id: string) => {
  await axios.delete(`${API_URL}/${id}`);
};
