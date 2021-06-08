import React from 'react';
import Producto from './Componentes/producto';
import Navegacion from './Componentes/Navegacion'
import {Container,Row} from 'reactstrap';
import './App.css';
import {listaProductos} from './listaProductos.json';


class App extends React.Component{
  constructor (){
    super();
    this.state ={
      listaProductos
    };
  }

  render(){
    const arregloComponentes = this.state.listaProductos.map(
      (listaProductos, i) => {
        return(
          <Producto
            key={i}
            titulo={listaProductos.titulo}
            imagen={listaProductos.imagen}
            descripcion={listaProductos.descripcion}
            precio={listaProductos.precio}
            stock={listaProductos.stock}
          />
        )
      }
    );
    return (
      <Container>
        <Navegacion 
        titulo="Cart shopping with React"
        />
        <Row>
          {arregloComponentes}
        </Row>  
      </Container>
    );
  }
}

export default App;
