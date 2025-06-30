import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

export interface Produto {
  nome: string;
}

interface FormularioCadastroProdutoProps {
  aoCadastrar: (produto: Produto) => void;
}

export default function FormularioCadastroProduto({
  aoCadastrar,
}: FormularioCadastroProdutoProps) {
  const [nome, setNome] = useState("");

  const cadastrarProduto = (e: React.FormEvent) => {
    e.preventDefault();

    if (!nome.trim()) {
      alert("Preencha o nome do produto");
      return;
    }

    aoCadastrar({ nome: nome.trim() });

    alert(`Produto cadastrado: ${nome}`);

    setNome("");
  };

  return (
    <Container className="mt-4">
      <h2>Cadastro de Produto</h2>
      <Form onSubmit={cadastrarProduto}>
        <Form.Group className="mb-3" controlId="formNome">
          <Form.Label>Nome do Produto</Form.Label>
          <Form.Control
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Ex: Ração Premium"
          />
        </Form.Group>

        <Button variant="primary" type="submit" disabled={!nome.trim()}>
          Cadastrar
        </Button>
      </Form>
    </Container>
  );
}
