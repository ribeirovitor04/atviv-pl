import { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { Cliente, Telefone } from "../types/clientes"; // ajuste o caminho conforme o seu projeto

interface CadastroClienteProps {
  aoCadastrar: (cliente: Cliente) => void;
}

export default function CadastroCliente({ aoCadastrar }: CadastroClienteProps) {
  const [nome, setNome] = useState("");
  const [nomeSocial, setNomeSocial] = useState("");
  const [email, setEmail] = useState("");
  const [telefoneDDD, setTelefoneDDD] = useState("");
  const [telefoneNumero, setTelefoneNumero] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [codigoPostal, setCodigoPostal] = useState("");
  const [informacoesAdicionais, setInformacoesAdicionais] = useState("");

  const cadastrarCliente = (e: React.FormEvent) => {
    e.preventDefault();

    if (!nome.trim()) {
      alert("Preencha o nome");
      return;
    }

    if (telefoneDDD.length !== 2 || telefoneNumero.length < 8) {
      alert("DDD e número de telefone inválidos");
      return;
    }

    const cliente: Cliente = {
      nome: nome.trim(),
      nomeSocial: nomeSocial.trim(),
      email: email.trim() || null,
      endereco: {
        rua: rua.trim(),
        numero: numero.trim(),
        bairro: bairro.trim(),
        cidade: cidade.trim(),
        estado: estado.trim(),
        codigoPostal: codigoPostal.trim(),
        informacoesAdicionais: informacoesAdicionais.trim() || undefined,
      },
      telefones: [
        {
          ddd: telefoneDDD,
          numero: telefoneNumero,
        } as Telefone,
      ],
    };

    console.log("Cliente a enviar:", cliente);

    aoCadastrar(cliente);

    alert(`Cliente cadastrado: ${nome}`);

    // Limpa os campos
    setNome("");
    setNomeSocial("");
    setEmail("");
    setTelefoneDDD("");
    setTelefoneNumero("");
    setRua("");
    setNumero("");
    setBairro("");
    setCidade("");
    setEstado("");
    setCodigoPostal("");
    setInformacoesAdicionais("");
  };

  return (
    <Container className="mt-4">
      <h2>Cadastro de Cliente</h2>
      <Form onSubmit={cadastrarCliente}>
        <Form.Group className="mb-3" controlId="formNome">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Ex: João da Silva"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formNomeSocial">
          <Form.Label>Nome Social</Form.Label>
          <Form.Control
            type="text"
            value={nomeSocial}
            onChange={(e) => setNomeSocial(e.target.value)}
            placeholder="Ex: Joãozinho"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="exemplo@dominio.com"
          />
        </Form.Group>

        <Row>
          <Col md={2}>
            <Form.Group className="mb-3" controlId="formTelefoneDDD">
              <Form.Label>DDD</Form.Label>
              <Form.Control
                type="text"
                maxLength={2}
                value={telefoneDDD}
                onChange={(e) =>
                  setTelefoneDDD(e.target.value.replace(/\D/g, ""))
                }
                placeholder="21"
                required
              />
            </Form.Group>
          </Col>
          <Col md={10}>
            <Form.Group className="mb-3" controlId="formTelefoneNumero">
              <Form.Label>Telefone</Form.Label>
              <Form.Control
                type="text"
                maxLength={9}
                value={telefoneNumero}
                onChange={(e) =>
                  setTelefoneNumero(e.target.value.replace(/\D/g, ""))
                }
                placeholder="912345678"
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <h4>Endereço</h4>

        <Row>
          <Col md={8}>
            <Form.Group className="mb-3" controlId="formRua">
              <Form.Label>Rua</Form.Label>
              <Form.Control
                type="text"
                value={rua}
                onChange={(e) => setRua(e.target.value)}
                placeholder="Rua Exemplo"
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group className="mb-3" controlId="formNumero">
              <Form.Label>Número</Form.Label>
              <Form.Control
                type="text"
                value={numero}
                onChange={(e) => setNumero(e.target.value)}
                placeholder="123"
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="formBairro">
              <Form.Label>Bairro</Form.Label>
              <Form.Control
                type="text"
                value={bairro}
                onChange={(e) => setBairro(e.target.value)}
                placeholder="Bairro Exemplo"
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="formCidade">
              <Form.Label>Cidade</Form.Label>
              <Form.Control
                type="text"
                value={cidade}
                onChange={(e) => setCidade(e.target.value)}
                placeholder="Cidade Exemplo"
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={4}>
            <Form.Group className="mb-3" controlId="formEstado">
              <Form.Label>Estado</Form.Label>
              <Form.Control
                type="text"
                value={estado}
                onChange={(e) => setEstado(e.target.value)}
                placeholder="Estado Exemplo"
              />
            </Form.Group>
          </Col>

          <Col md={4}>
            <Form.Group className="mb-3" controlId="formCodigoPostal">
              <Form.Label>Código Postal</Form.Label>
              <Form.Control
                type="text"
                value={codigoPostal}
                onChange={(e) => setCodigoPostal(e.target.value)}
                placeholder="00000-000"
              />
            </Form.Group>
          </Col>

          <Col md={4}>
            <Form.Group className="mb-3" controlId="formInfoAdicionais">
              <Form.Label>Informações Adicionais</Form.Label>
              <Form.Control
                type="text"
                value={informacoesAdicionais}
                onChange={(e) => setInformacoesAdicionais(e.target.value)}
                placeholder="Complemento, pontos de referência etc."
              />
            </Form.Group>
          </Col>
        </Row>

        <Button variant="primary" type="submit" disabled={!nome.trim()}>
          Cadastrar
        </Button>
      </Form>
    </Container>
  );
}
