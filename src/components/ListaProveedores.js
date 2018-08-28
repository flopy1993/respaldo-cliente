import React from 'react'
import FilaProveedor from './FilaProveedor'
import { Container, Table, Label } from 'semantic-ui-react'


export default class ListaProveedores extends React.Component {
    constructor(props) {
        super(props)
        this.proveedores = props.proveedores;
        this.editar = props.editar;
    }

    componentWillReceiveProps(nextProps) {
        this.proveedores = nextProps.proveedores
    }

    render() {
        const lista = this.proveedores.map((pro) => <FilaProveedor key={pro.id} proveedor={pro} editar={this.editar} />)
        return (
            <Container>                
                <Table compact color={"green"} striped verticalAlign={"bottom"} >
                    <Table.Header> 
                        <Table.Row>
                            <Table.HeaderCell colSpan={8}><Label size="huge"> Proveedores: </Label></Table.HeaderCell>
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