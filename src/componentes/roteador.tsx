import React, { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import ListaCliente from "./listaClientes";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import TelaInicial from "./telaInicial";

type state = {
    tela: string;
};

export default class Roteador extends Component<{}, state> {
    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = {
            tela: "Home",
        };
        this.selecionarView = this.selecionarView.bind(this);
    }

    selecionarView(novaTela: string, evento: Event) {
        evento.preventDefault();
        console.log(novaTela);
        this.setState({
            tela: novaTela,
        });
    }

    render() {
        let barraNavegacao = (
            <BarraNavegacao
                seletorView={this.selecionarView}
                tema="#FFffff"
                botoes={["Home", "Clientes", "Cadastre-se"]}
            />
        );

        if (this.state.tela === "Home") {
            return (
                <>
                    {barraNavegacao}
                    <TelaInicial tema="#FFffff"/>
                </>
            );
        } else if (this.state.tela === "Clientes") {
            return (
                <>
                    {barraNavegacao}
                    <ListaCliente tema="#DC8686" />
                </>
            );
        } else
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroCliente tema="#e3f2fd" />
                </>
            );
    }
}
