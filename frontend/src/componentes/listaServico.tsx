import { useState } from "react";
import { Container, Table, Button } from "react-bootstrap";

export interface Servico {
  nome: string;
}

interface ListaServicosProps {
  abrirCadastro: () => void;
}

export default function ListaServicos({ abrirCadastro }: ListaServicosProps) {
  const [servicos, setServicos] = useState<Servico[]>([]);

  const deletarServico = (nome: string) => {
    const atualizados = servicos.filter((s) => s.nome !== nome);
    setServicos(atualizados);
  };

  return (
    <Container className="mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>Serviços Cadastrados</h3>
        <Button variant="primary" onClick={abrirCadastro}>
          Novo Serviço
        </Button>
      </div>

      {servicos.length === 0 ? (
        <p>Nenhum serviço cadastrado ainda.</p>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {servicos.map((servico, index) => (
              <tr key={index}>
                <td>{servico.nome}</td>
                <td>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => deletarServico(servico.nome)}
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
