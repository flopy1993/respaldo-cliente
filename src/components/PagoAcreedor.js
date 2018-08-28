import React from 'react'
import { Form } from 'semantic-ui-react'

export default class PagoAcreedor extends React.Component {
    state = {
        proveedor: '',
        fecha:'',
        recibo:'',
        monto:''
    }
     render(){
         return(
             <div>
                 <Form>                 
                        <Form.Field>
                            <label>Proveedor: </label>
                            <Form.Input value={this.state.proveedor} onChange={(e, { value }) => this.setState({ proveedor: value })} />
                        </Form.Field>  
                        <Form.Field>
                            <label>Fecha: </label>
                            <Form.Input value={this.state.fecha} onChange={(e, { value }) => this.setState({ fecha: value })} />
                        </Form.Field>
                        <Form.Field>
                            <label>Número de recibo:</label>
                            <Form.Input value={this.state.recibo} onChange={(e, { value }) => this.setState({ recibo: value })} />
                        </Form.Field>
                        <Form.Field>
                            <label>Monto: </label>
                            <Form.Input value={this.state.monto} onChange={(e, { value }) => this.setState({ monto: value })} />
                        </Form.Field>                  
                </Form>

             </div>
         )
     }
} 