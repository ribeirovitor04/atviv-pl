export interface Link {
  rel: string;
  href: string;
}

export interface Telefone {
  id?: number;
  ddd: string;
  numero: string;
  links?: Link[];
}

export interface Endereco {
  id?: number;
  estado: string;
  cidade: string;
  bairro: string;
  rua: string;
  numero: string;
  codigoPostal: string;
  informacoesAdicionais?: string;
  links?: Link[];
}

export interface Cliente {
  id?: number;
  nome: string;
  nomeSocial: string;
  email?: string | null;
  endereco: Endereco;
  telefones: Telefone[];
  links?: Link[];
}
