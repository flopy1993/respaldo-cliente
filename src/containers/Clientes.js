import React from 'react'
import {connect} from 'react-redux'
import {AddCliente, EditCliente, DeleteCliente} from '../actions'
import NuevoCliente from '../components/NuevoCliente'


class Clientes extends React.Component {
    constructor(props){
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
        this.AddCliente(item)
    } 

    render(){
        console.log(this.clientes)
        return (
            <NuevoCliente agregar={this.agregar}/>
        )
    }
}

function mapStateToProps(state, props) {
    return {
        clientes: state.clientes
    }
}

export default connect (
    mapStateToProps, {AddCliente, EditCliente, DeleteCliente}
)(Clientes)


