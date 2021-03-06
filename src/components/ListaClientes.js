import React, { Component } from 'react';
import  { Container, Table, Label } from 'semantic-ui-react';
import FilaCliente from './FilaCliente';


export default class ListaClientes extends Component {   
    
    constructor(props){
        super(props);
        this.clientes = props.clientes;
        this.editar = props.editar;
    }

    
    componentWillReceiveProps = (nextProps) => {
        this.clientes = nextProps.clientes;
    }

    
    render(){
        const lista = this.clientes.map((cli)=> <FilaCliente key={cli.id} cliente={cli} editar={this.editar}/>);        
       
        return (
            <Container>
                
                <Table compact color={"green"} striped verticalAlign={"bottom"} >
                    <Table.Header> 
                        <Table.Row>
                            <Table.HeaderCell colSpan={8}><Label size="huge"> Clientes: </Label></Table.HeaderCell>
                        </Table.Row>
                        <Table.Row>
                            <Table.HeaderCell></Table.HeaderCell>                            
                            <Table.HeaderCell>Razon Social</Table.HeaderCell>
                            <Table.HeaderCell>Tipo Contribuyente</Table.HeaderCell>
                            <Table.HeaderCell>CUIT</Table.HeaderCell>
                            <Table.HeaderCell>Provincia</Table.HeaderCell>
                            <Table.HeaderCell>Localidad</Table.HeaderCell>
                            <Table.HeaderCell>Domicilio</Table.HeaderCell>                                             
                        </Table.Row>
                    </Table.Header>
                    <tbody>
                        {lista}
                    </tbody>
                </Table>
            </Container>
        )
    }
}

