import axios from "axios";
import { Cliente } from "../types/clientes";

const API_URL = "http://localhost:32831/cliente";

export const listarClientes = async (): Promise<Cliente[]> => {
  const response = await axios.get(`${API_URL}/clientes`);
  return response.data;
};

export const cadastrarCliente = async (cliente: Cliente): Promise<Cliente> => {
  // Envie o cliente no formato esperado pelo backend
  const response = await axios.post(`${API_URL}/cadastrar`, cliente);
  return response.data;
};

export const atualizarCliente = async (cliente: Cliente): Promise<Cliente> => {
  // Atualiza o cliente com base no objeto completo
  const response = await axios.put(`${API_URL}/atualizar`, cliente);
  return response.data;
};

export const excluirCliente = async (id: number): Promise<void> => {
  // DELETE com body: axios permite isso via 'data'
  await axios.delete(`${API_URL}/excluir`, { data: { id } });
};
