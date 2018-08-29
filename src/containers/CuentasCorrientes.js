import React from 'react'
import { Segment, Tab } from 'semantic-ui-react'
import SaldoAcreedor from '../components/SaldoAcreedor'
import PagoAcreedor from '../components/PagoAcreedor'
import MovimientosAcreedores from '../components/MovimientosAcreedores'
import SaldoDeudor from '../components/SaldoDeudor'
import PagoDeudor from '../components/PagoDeudor'
import MovimientosProveedores from '../components/MovimientosDeudores'



export default class CuentasCorrientes extends React.Component {

    render() {
        
    const panes = [
        { menuItem: 'Saldo Acreedor', render: () => <Tab.Pane><SaldoAcreedor/></Tab.Pane> },
        { menuItem: 'Movimientos', render: () => <Tab.Pane><MovimientosAcreedores/></Tab.Pane> },
        { menuItem: 'Ingresar Pago', render: () => <Tab.Pane><PagoAcreedor/></Tab.Pane> },
    
        { menuItem: 'Saldo Deudores', render: () => <Tab.Pane><SaldoAcreedor/></Tab.Pane> },
        { menuItem: 'Movimientos', render: () => <Tab.Pane><MovimientosAcreedores/></Tab.Pane> },
        { menuItem: 'Ingresar Pago', render: () => <Tab.Pane><PagoAcreedor/></Tab.Pane> },
    ]

        return (
            <div className='Segment'>                
                <Segment>
                    <Tab menu={{ fluid: true, vertical: true, tabular: true,  pointing: true}} panes={panes} />                                   
                </Segment>
            </div>

        )
    }
}