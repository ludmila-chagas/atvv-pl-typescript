import { Component } from "react";
import Cachorro from '../static/dog.webp';
import Wave from '../static/wave.svg';
import './telaInicial.css';

type Props = {
    tema: string;
};

export default class TelaInicial extends Component<Props> {
    render() {
        const { tema } = this.props;

    return (
        <div className="container-fluid d-flex align-items-center justify-content-center tela-inicial" style={{ backgroundColor: tema }}>
            <div className="row align-items-center">
                <div className="col-md-6 order-md-1">
                    <div className="hero-content text-center text-md-left">
                        <h1 className="display-4" style={{ fontWeight: 'bold' }}>Bem-vindo ao Pet Lovers!</h1>
                        <p className="lead">
                            <span className="description">
                            Aqui você encontra informações sobre clientes e cadastros. Explore e descubra mais sobre nossos serviços.
                            </span>
                        </p>
                    </div>
                </div>
                <div className="col-md-6 d-flex align-items-center justify-content-center">
                    <img
                        src={Cachorro}
                        alt="Imagem de destaque"
                        className="img-fluid rounded"
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 d-flex align-items-end justify-content-center" style={{ position: 'absolute', bottom: 0, width: '100%' }}>
                    <img
                        src={Wave}
                        alt="Footer"
                        className="img-fluid rounded"
                    />
                </div>
            </div>
        </div>
    );
    }
}
