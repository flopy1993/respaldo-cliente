import React from 'react'
import {connect} from 'react-redux'
import {AddProveedor, EditProveedor, DeleteProveedor} from '../actions'
import NuevoProveedor from '../components/NuevoProveedor'
import ListaProveedores from '../components/ListaProveedores'


class Proveedores extends React.Component {
    constructor(props){
        super(props)
        this.proveedores = props.proveedores
        this.AddProveedor = props.AddProveedor
        this.DeleteProveedor = props.DeleteProveedor
        this.EditProveedor = props.EditProveedor
    }

    componentWillReceiveProps(nextProps) {
        this.proveedores = nextProps.proveedores
    }
    
    agregar = (item) => {
        item.id = this.proveedores.length
        this.AddProveedor(item)
    }
    
    editar = (item) => {
        this.EditProveedor(item)
    } 

    render(){
        console.log(this.proveedores)
        return (
            <div>
            <ListaProveedores editar={this.editar} proveedores={this.proveedores}/>
            <NuevoProveedor agregar={this.agregar}/>
            </div>
        )
    }
}

function mapStateToProps(state, props) {
    return {
        proveedores: state.proveedores
    }
}

export default connect (
    mapStateToProps, {AddProveedor, EditProveedor, DeleteProveedor}
)(Proveedores)