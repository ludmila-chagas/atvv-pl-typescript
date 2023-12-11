import React from "react";
import "./formularioCadastroCliente.css";
import Pets from '../static/dogdog.png';

interface Props {
  tema: string;
}

export default class FormularioCadastroCliente extends React.Component<Props> {
  render() {
    const { tema } = this.props;

    return (
      <div className="container d-flex align-items-center justify-content-center tela-inicial">
        <form className="form">
          <p className="title">Cadastrar Cliente </p>
          <label>
            <input className="input" type="text" placeholder="" required />
            <span>Nome</span>
          </label>
          <label>
            <input className="input" type="text" placeholder="" required />
            <span>Telefone</span>
          </label>

          <label>
            <input className="input" type="email" placeholder="" required />
            <span>Email</span>
          </label>

          <label>
            <input className="input" type="text" placeholder="" required />
            <span>Endereço</span>
          </label>

          <label>
            <input className="input" type="text" placeholder="" required />
            <span>CEP</span>
          </label>
          <button className="submit">Cadastrar</button>
        </form>
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <img
            src={Pets}
            alt="Imagem de destaque"
            className="img-fluid"
          />
        </div>
      </div>

    );
  }
}
