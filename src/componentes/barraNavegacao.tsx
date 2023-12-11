import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

type Props = {
    tema: string;
    botoes: string[];
    seletorView: Function;
};

export default class BarraNavegacao extends Component<Props> {
    constructor(props: Readonly<Props>) {
        super(props);
        this.gerarListaBotoes = this.gerarListaBotoes.bind(this);
    }

    gerarListaBotoes() {
        if (this.props.botoes.length <= 0) {
            return <></>;
        } else {
            let lista = this.props.botoes.map((valor) => (
                <li key={valor} className="nav-item">
                    <a
                        className="nav-link"
                        style={{ color: '#0e0708', fontSize: '26px' }}
                        href="#"
                        onClick={(e) => this.props.seletorView(valor, e)}
                    >
                        {valor}
                    </a>
                </li>
            ));
            return lista;
        }
    }

    render() {
        let tema = this.props.tema;
        return (
            <>
                <nav className="navbar navbar-expand-lg" data-bs-theme="light" style={{ backgroundColor: tema }}>
                    <div className="container-fluid">
                        <span className="navbar-brand mb-0 h1" style={{ color: '#0e0708', fontSize: '32px', fontWeight: 'bold', paddingLeft: '70px' }}>
                            PetLovers
                        </span>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                            <ul className="navbar-nav">
                                {this.gerarListaBotoes()}
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        );
    }
}
