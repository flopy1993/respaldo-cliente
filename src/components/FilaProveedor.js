import React from 'react';
import EditarProveedor from './EditarProveedor';

const FilaProveedor =(props)=>{
    return(
        <tr>
            <td className="centeraligned"> <EditarProveedor editar={props.editar} proveedor={props.proveedor}/> </td>
            <td>{props.proveedor.razonSocial}</td>
            <td>{props.proveedor.tipoContribuyente}</td>
            <td>{props.proveedor.cuit}</td>
            <td>{props.proveedor.provincia}</td>  
            <td>{props.proveedor.localidad}</td>            
            <td>{props.proveedor.domicilio}</td>              
        </tr>                
    )
}

export default FilaProveedor;