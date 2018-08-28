import React from 'react';

import EditarCliente from './EditarCliente';

const FilaCliente =(props)=>{
    return( 
        <tr>          
            <td className="center aligned" > <EditarCliente editar={props.editar} cliente={props.cliente}/> </td>            
            <td>{props.cliente.razonSocial}</td>
            <td>{props.cliente.tipoContribuyente}</td>
            <td>{props.cliente.cuit}</td>
            <td>{props.cliente.provincia}</td>  
            <td>{props.cliente.localidad}</td>            
            <td>{props.cliente.domicilio}</td>              
        </tr>
    )
}

export default FilaCliente;