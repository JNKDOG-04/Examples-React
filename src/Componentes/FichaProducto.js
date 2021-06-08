import React from 'react';
import {ModalFooter, ModalBody, ModalHeader,CardImg,Modal,Container,Button} from 'reactstrap'
import './FichaProducto.css';
import {listaCarrito} from '../listaCarrito.json';

class  FichaProducto extends React.Component{
    constructor(props){
        super();
        this.state ={
            modal: false,
            listaCarrito,
            stock : props.props.stock
        };
        this.toggle = this.toggle.bind(this);
        this.agregarCarrito = this.agregarCarrito.bind(this);
    }
    toggle(){
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    agregarCarrito(){
        listaCarrito.push({
            "titulo": this.props.props.titulo,
            "precio": this.props.props.precio
        });
        this.setState(prevState => ({
            modal: !prevState.modal
        }));

        if(this.state.stock !== 0){
            this.setState(prevState => ({
                stock: prevState.stock - 1
            }));
        }else{
            alert('Producto agotado');
        }

        const badge = document.getElementById("badge1");
        badge.innerText = listaCarrito.length;
    }

    render(){
        return(
        <Container>
            <Button onClick={this.toggle}>Ver ficha</Button>
            <Modal isOpen={this.state.modal}>
            <ModalHeader>{this.props.props.titulo}</ModalHeader>
            <ModalBody>
                <CardImg src={this.props.props.imagen}></CardImg>
                <p><b>Características</b></p>
                {this.props.props.descripcion}
                <p><b>Precio: $</b> {this.props.props.precio} MX</p>
                <p ><b>Existencia: </b>{this.state.stock}</p>
            </ModalBody>
            <ModalFooter className="modalFooter">
                <Button color="primary" onClick={this.agregarCarrito}>Agregar al carrito</Button>
                <Button color="secondary" onClick={this.toggle}>Volver atrás</Button>
            </ModalFooter>
            
            </Modal>
        </Container>
        );
    }
}
export default FichaProducto;