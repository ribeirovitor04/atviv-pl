import { useState } from "react";
import { Container, Table, Button } from "react-bootstrap";

interface Produto {
  nome: string;
}

interface ListaProdutosProps {
  abrirCadastro: () => void;
}

export default function ListaProdutos({ abrirCadastro }: ListaProdutosProps) {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  const deletarProduto = (nome: string) => {
    const atualizados = produtos.filter((p) => p.nome !== nome);
    setProdutos(atualizados);
  };

  return (
    <Container className="mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>Produtos Cadastrados</h3>
        <Button variant="primary" onClick={abrirCadastro}>
          Novo Produto
        </Button>
      </div>

      {produtos.length === 0 ? (
        <p>Nenhum produto cadastrado ainda.</p>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {produtos.map((produto, index) => (
              <tr key={index}>
                <td>{produto.nome}</td>
                <td>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => deletarProduto(produto.nome)}
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
