import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

export interface Servico {
  nome: string;
}

interface CadastroServicoProps {
  aoCadastrar: (servico: Servico) => void;
}

export default function CadastroServico({ aoCadastrar }: CadastroServicoProps) {
  const [nome, setNome] = useState("");

  const cadastrarServico = (e: React.FormEvent) => {
    e.preventDefault();

    if (!nome.trim()) {
      alert("Preencha o nome do serviço");
      return;
    }

    aoCadastrar({ nome: nome.trim() });

    alert(`Serviço cadastrado: ${nome}`);

    setNome("");
  };

  return (
    <Container className="mt-4">
      <h2>Cadastro de Serviço</h2>
      <Form onSubmit={cadastrarServico}>
        <Form.Group className="mb-3" controlId="formNomeServico">
          <Form.Label>Nome do Serviço</Form.Label>
          <Form.Control
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Ex: Banho e Tosa"
          />
        </Form.Group>

        <Button variant="primary" type="submit" disabled={!nome.trim()}>
          Cadastrar
        </Button>
      </Form>
    </Container>
  );
}
