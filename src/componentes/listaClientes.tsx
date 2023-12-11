import { Component } from "react";
import "./listaClientes.css";
import PlusIcon from "../static/plus.png";

type Servico = {
  id: number;
  nome: string;
  valor: number;
};

type PetServico = {
  servicoId: number;
  data: Date;
};

type Pet = {
  nome: string;
  raca: string;
  petServicos: PetServico[];
};

type Cliente = {
  id: number;
  nome: string;
  nomePet: string;
  pets: Pet[];
  telefone: string;
  email: string;
};

type State = {
  clientes: Cliente[];
  detalhesVisiveis: { [clienteId: number]: boolean };
};

type Props = {
  tema: string;
};

export default class ListaCliente extends Component<Props, State> {
  servicos: Servico[] = [
    { id: 1, nome: "Banho", valor: 30.0 },
    { id: 2, nome: "Tosa", valor: 40.0 },
    { id: 3, nome: "Vacina", valor: 50.0 },
    { id: 4, nome: "Corte de unhas", valor: 15.0 },
    { id: 5, nome: "Consulta veterinária", valor: 60.0 },
    { id: 6, nome: "Limpeza de gaiola", valor: 20.0 },
  ];

  constructor(props: Props) {
    super(props);
    this.state = {
      clientes: [
        {
          id: 1,
          nome: "João",
          nomePet: "Bob",
          pets: [
            {
              nome: "Cachorro",
              raca: "Labrador",
              petServicos: [
                { servicoId: 1, data: new Date("2023-01-15") },
                { servicoId: 2, data: new Date("2023-02-20") },
                { servicoId: 3, data: new Date("2023-03-10") },
              ],
            },
          ],
          telefone: "(11) 9876-5432",
          email: "cliente1@email.com",
        },
        {
          id: 2,
          nome: "Maria",
          nomePet: "Marshal",
          pets: [
            {
              nome: "Gato",
              raca: "Persa",
              petServicos: [
                { servicoId: 3, data: new Date("2023-04-05") },
              ],
            },
            {
              nome: "Gato",
              raca: "Persa",
              petServicos: [
                { servicoId: 3, data: new Date("2023-04-05") },
              ],
            }
          ],
          telefone: "(22) 8765-4321",
          email: "cliente2@email.com",
        },
      ],
      detalhesVisiveis: {},
    };
  }

  toggleDetalhes = (clienteId: number) => {
    this.setState((prevState) => ({
      detalhesVisiveis: {
        ...prevState.detalhesVisiveis,
        [clienteId]: !prevState.detalhesVisiveis[clienteId],
      },
    }));
  };

  formatarData = (data: Date) => {
    const dia = String(data.getDate()).padStart(2, "0");
    const mes = String(data.getMonth() + 1).padStart(2, "0");
    const ano = data.getFullYear();
    return `${dia}-${mes}-${ano}`;
  };

  render() {
    const { tema } = this.props;

    return (
      <div className="blog-card-container">
        {this.state.clientes.map((cliente) => (
          <div key={cliente.id} className="blog-card">
            <h3 className="blog-card-title">{cliente.nome}</h3>
            <p>
              <span className="blog-card-author">Telefone: </span> {cliente.telefone}
            </p>
            <p>
              <span className="blog-card-author">Email: </span> {cliente.email}
            </p>
            <div className="details">
              <button className="pet-details" onClick={() => this.toggleDetalhes(cliente.id)}>
                {this.state.detalhesVisiveis[cliente.id] ? "Esconder Pets" : "Mostrar Pets"}
              </button>
              <button className="add-btn">
                <img src={PlusIcon} className="icon" alt="Adicionar Pet" />
              </button>
            </div>
            {this.state.detalhesVisiveis[cliente.id] && (
              <div>
                {cliente.pets.map((pet) => (
                  <div key={pet.nome} className="pet-container">
                    <p><span className="blog-card-author">Nome: </span>{pet.nome}</p>
                    <p><span className="blog-card-author">Raça: </span>{pet.raca}</p>
                    {pet.petServicos.map((petServico) => {
                      const servico = this.servicos.find((s) => s.id === petServico.servicoId);
                      return (
                        servico && (
                          <div key={servico.id} className="servico-container">
                            <p><span className="blog-card-author">Serviço: </span>{servico.nome}</p>
                            <p><span className="blog-card-author">Valor: R$</span>{servico.valor.toFixed(2)}</p>
                            <p><span className="blog-card-author">Data: </span>{this.formatarData(petServico.data)}</p>
                          </div>
                        )
                      );
                    })}
                    <hr className="blog-card-separator" />
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }
}
