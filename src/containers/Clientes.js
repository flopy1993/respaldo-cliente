import React from 'react'
import { connect } from 'react-redux'
import { AddCliente, EditCliente, DeleteCliente } from '../actions'
import ListaClientes from '../components/ListaClientes'
import NuevoCliente from '../components/NuevoCliente'



class Clientes extends React.Component {
    constructor(props) {
        super(props)
        this.clientes = props.clientes
        this.AddCliente = props.AddCliente
        this.DeleteCliente = props.DeleteCliente
        this.EditCliente = props.EditCliente
    }

    componentWillReceiveProps(nextProps) {
        this.clientes = nextProps.clientes
    }

    agregar = (item) => {
        item.id = this.clientes.length
        this.AddCliente(item)
    }

    editar = (item) => {
        this.EditCliente(item)
    }

    render() {
        console.log(this.clientes)
        return (
            <div>
                <ListaClientes clientes={this.clientes} editar={this.editar}/>    
                <NuevoCliente agregar={this.agregar} />               
            </div>
        )
    }
}

function mapStateToProps(state, props) {
    return {
        clientes: state.clientes
    }
}

export default connect(
    mapStateToProps, { AddCliente, EditCliente, DeleteCliente }
)(Clientes)


