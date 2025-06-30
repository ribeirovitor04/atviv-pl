import { useState } from "react";
import BarraNavegacao from "./barraNavegacao";
import ListaClientes from "./listaClientes";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import ListaProdutos from "./listaProdutos";
import ListaServicos from "./listaServico";
import FormularioCadastroProduto from "./formularioCadastroProduto";
import CadastroServico from "./formularioCadastroServico";

export default function Roteador() {
  const [tela, setTela] = useState("Home");
  const tema = "#e3f2fd";

  const selecionarView = (novaTela: string, evento: React.MouseEvent) => {
    evento.preventDefault();
    setTela(novaTela);
  };

  // Funções para abrir telas de cadastro a partir das listas
  const abrirCadastroCliente = () => setTela("CadastroCliente");
  const abrirCadastroProduto = () => setTela("CadastroProduto");
  const abrirCadastroServico = () => setTela("CadastroServico");

  const barraNavegacao = (
    <BarraNavegacao
      seletorView={selecionarView}
      tema={tema}
      botoes={["Home", "Clientes", "Produtos", "Serviços"]}
    />
  );

  let componente;

  switch (tela) {
    case "Clientes":
      componente = <ListaClientes abrirCadastro={abrirCadastroCliente} />;
      break;
    case "CadastroCliente":
      componente = (
        <FormularioCadastroCliente aoCadastrar={() => setTela("Clientes")} />
      );
      break;
    case "Produtos":
      componente = <ListaProdutos abrirCadastro={abrirCadastroProduto} />;
      break;
    case "CadastroProduto":
      componente = (
        <FormularioCadastroProduto aoCadastrar={() => setTela("Produtos")} />
      );
      break;
    case "Serviços":
      componente = <ListaServicos abrirCadastro={abrirCadastroServico} />;
      break;
    case "CadastroServico":
      componente = <CadastroServico aoCadastrar={() => setTela("Serviços")} />;
      break;
    default:
      componente = <h2 style={{ padding: "1rem" }}>🏠 Bem-vindo!</h2>;
  }

  return (
    <>
      {barraNavegacao}
      {componente}
    </>
  );
}
