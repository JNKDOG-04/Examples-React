import React from 'react';
import {Popover, PopoverHeader, PopoverBody, Table ,Button ,Badge} from 'reactstrap';
import {listaCarrito} from '../listaCarrito';

class Carro extends React.Component{
    constructor(){
        super();
        this.state ={
            popoverOpen: false,
            listaCarrito
        };
        this.toggle = this.toggle.bind(this);
        this.total = this.total.bind(this);
    }
    toggle(){
        this.setState(prevState => ({
            popoverOpen: !prevState.popoverOpen
        }));
    }

    total(){
        let suma = 0; 
        this.state.listaCarrito.map(
            (listaCarrito, i) => {
                suma += parseFloat(listaCarrito.precio);
                return(suma);
            }
        );
        return(suma);
    }

    render(){
        const arregloCarrito = this.state.listaCarrito.map(
            (listaCarrito, i) => {
                return (
                    <tr>
                        <td>{(i += 1)}</td>
                        <td>{listaCarrito.titulo}</td>
                        <td>{listaCarrito.precio}</td>
                    </tr>
                );
            }
        )
        return(
            <div>
                <Button id="Popover1" color="info">
                <span className="material-icons">shopping_cart</span>
                <Badge color="secondary" id="badge1">{listaCarrito.length}</Badge>
                </Button>

                <Popover target="Popover1" placement="bottom" isOpen={this.state.popoverOpen} toggle={this.toggle}>
                    <PopoverHeader>Lista de productos</PopoverHeader>
                        <PopoverBody>
                            <Table>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Prodcuto</th>
                                        <th>Precio</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {arregloCarrito}
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td><b>Total:</b></td>
                                        <td></td>
                                        <td>${Intl.NumberFormat("en-MX").format(this.total())}</td>
                                    </tr>
                                </tfoot>
                            </Table>
                        </PopoverBody>
                    
                </Popover>
            </div>
        );
    }
}
    
export default Carro;