import React from 'react'
import { Form, Select, Segment, Button } from 'semantic-ui-react'
import $ from 'jquery'


export default class Empresas extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            razonSocial: '',
            cuit: 0,
            ingBrutos: '',
            inicioActividades: '',
            tipoContribuyente: '',
            domicilio: '',
            telefono: '',
            email: '',
            datosExtra: '',
            logo: ''
        }
    }

    close = () => this.setState({
        razonSocial: '',
        cuit: 0,
        ingBrutos: '',
        inicioActividades: '',
        tipoContribuyente: '',
        domicilio: '',
        telefono: '',
        email: '',
        datosExtra: '',
        logo: ''
       
    })
    

    guardar = () => {
    const empresa = {
        razonSocial: this.state.razonSocial,
        cuit: this.state.cuit,
        tipoContribuyente: this.state.tipoContribuyente,
        domicilio: this.state.domicilio,
        telefono: this.state.telefono,
        email: this.state.email,
        datosExtra: this.state.datosExtra,
        logo: this.state.logo
    }

    
    this.setState({  
        razonSocial: '',
        cuit: 0,
        ingBrutos: '',
        inicioActividades: '',
        tipoContribuyente: '',
        domicilio: '',
        telefono: '',
        email: '',
        datosExtra: '',
        logo: '' })
    console.log(empresa)
    }
 
    render() {
       
        let tipoContribuyente = [];
        tipoContribuyente.push(
            { key: 0, text: 'Responsable Inscripto', value: 0 },
            { key: 1, text: 'Consumidor Final', value: 1 },
            { key: 2, text: 'Exento', value: 2 },
            { key: 3, text: 'Monotributista', value: 3 }
        )

        return (
            <div className='Segment'>
                <Segment >
                <Form>
                    
                    <Form.Group widths='equal'>
                        <Form.Field>
                            <label>Nombre o Razón Social</label>
                            <Form.Input value={this.state.razonSocial} onChange={(e, { value }) => this.setState({ razonSocial: value })} />
                        </Form.Field>
                        <Form.Field>
                            <label>Inicio de Actividades</label>
                            <Form.Input value={this.state.inicioActividades} onChange={(e, { value }) => this.setState({ inicioActividades: value })} />
                        </Form.Field>
                        </Form.Group>
                        <Form.Group widths='equal'>
                        <Form.Field>
                            <label>CUIT</label>
                            <Form.Input type='number' id='cuit' onSelect={() => $("#cuit").select()} value={this.state.cuit} onChange={(e, { value }) => this.setState({ cuit: value })} />
                        </Form.Field>
                        <Form.Field control={Select} value={this.state.tipoContribuyente} onChange={(e, { value }) => this.setState({ tipoContribuyente: value })} label='Tipo Contribuyente' options={tipoContribuyente} />
                        <Form.Field>
                            <label>Ingresos brutos</label>
                            <Form.Input value={this.state.ingBrutos} onChange={(e, { value }) => this.setState({ ingBrutos: value })} />
                        </Form.Field>
                        </Form.Group>
                        <Form.Group widths='equal'>
                        <Form.Field>
                            <label>Domicilio</label>
                            <Form.Input value={this.state.domicilio} onChange={(e, { value }) => this.setState({ domicilio: value })} />
                        </Form.Field>
                        <Form.Field>
                            <label>Teléfono</label>
                            <Form.Input value={this.state.telefono} onChange={(e, { value }) => this.setState({ telefono: value })} />
                        </Form.Field>
                        </Form.Group>
                        <Form.Field>
                            <label>Datos Extra</label>
                            <Form.Input value={this.state.datosExtra} onChange={(e, { value }) => this.setState({ datosExtra: value })} />
                        </Form.Field>
                        <Form.Field>
                            <label>Logo</label>
                            <Form.Input value={this.state.logo} onChange={(e, { value }) => this.setState({ logo: value })} />
                        </Form.Field>                    
                </Form>
                <div className='Margen'>
                        <Button negative onClick={this.close}>Cancelar</Button>
                        <Button positive onClick={this.guardar} icon='checkmark' labelPosition='right' content='Guardar' />
                </div>
                </Segment>
            </div>
        )
    }

}