import { useState, useEffect } from "react";
import { Container, Table, Button } from "react-bootstrap";
import { Cliente } from "../types/clientes"; // caminho ajustado
import { listarClientes, excluirCliente } from "../services/clienteService";

interface ListaClientesProps {
  abrirCadastro: () => void;
}

export default function ListaClientes({ abrirCadastro }: ListaClientesProps) {
  const [clientes, setClientes] = useState<Cliente[]>([]);

  useEffect(() => {
    async function carregar() {
      try {
        const dados = await listarClientes();
        setClientes(dados);
      } catch (error) {
        alert("Erro ao carregar clientes");
      }
    }
    carregar();
  }, []);

  const deletarCliente = async (id?: number) => {
    if (!id) return alert("Cliente inválido para exclusão");
    try {
      await excluirCliente(id);
      setClientes(clientes.filter((c) => c.id !== id));
    } catch {
      alert("Erro ao excluir cliente");
    }
  };

  return (
    <Container className="mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>Clientes Cadastrados</h3>
        <Button onClick={abrirCadastro} variant="primary">
          Novo Cliente
        </Button>
      </div>

      {clientes.length === 0 ? (
        <p>Nenhum cliente cadastrado ainda.</p>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Nome Social</th>
              <th>Email</th>
              <th>Telefone</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((cliente) => (
              <tr key={cliente.id}>
                <td>{cliente.nome}</td>
                <td>{cliente.nomeSocial}</td>
                <td>{cliente.email ?? "—"}</td>
                <td>
                  {cliente.telefones
                    .map((t) => `(${t.ddd}) ${t.numero}`)
                    .join(", ") || "—"}
                </td>
                <td>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => deletarCliente(cliente.id)}
                  >
                    Excluir
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
}
