import React from 'react'
import { Button, Modal, Form, Checkbox, Select } from 'semantic-ui-react'
import $ from 'jquery'

export default class NuevoCliente extends React.Component {
    constructor(props) {
        super(props)
        this.agregar = props.agregar
        this.state = {
            open: false,
            razonSocial: '',
            tipoContribuyente: 0,
            provincia: 0,
            domicilio: '',
            localidad: 0,
            cuit: 0,
            ctacte: false
        }
    }

    guardar = () => {
        this.agregar({
            razonSocial: this.state.razonSocial,
            tipoContribuyente: this.state.tipoContribuyente,
            provincia: this.state.provincia,
            domicilio: this.state.domicilio,
            localidad: this.state.localidad,
            cuit: this.state.cuit,
            ctacte: this.state.ctacte
        })
        this.setState({  
            open: false,
            razonSocial: '',
            tipoContribuyente: 0,
            provincia: 0,
            domicilio: '',
            localidad: 0,
            cuit: 0,
            ctacte: false })

    }


    close = () => this.setState({  
        open: false,
        razonSocial: '',
        tipoContribuyente: 0,
        provincia: 0,
        domicilio: '',
        localidad: 0,
        cuit: 0,
        ctacte: false })

    render() {

        let provincias = [];
        let localidad = [];
        let tipoContribuyente = [];
        provincias.push(
            { key: 1, text: 'Entre Rios', value: 1 },
            { key: 2, text: 'Córdoba', value: 2 }
        )
        localidad.push(
            { key: 1, text: 'Concordia', value: 1 },
            { key: 2, text: 'Paraná', value: 2 }
        )
        tipoContribuyente.push(
            { key: 1, text: 'Contr1', value: 1 },
            { key: 2, text: 'Contr2', value: 2 }
        )

        return (
            <div>
                <Button onClick={() => this.setState({ open: true })}>Nuevo</Button>

                <Modal size={'large'} open={this.state.open} onClose={() => this.close}>
                    <Modal.Header>Nuevo Cliente</Modal.Header>
                    <Modal.Content>
                        <Form>
                            <Form.Field>
                                <label>Nombre o Razón Social</label>
                                <Form.Input value={this.state.razonSocial} onChange={(e, { value }) => this.setState({ razonSocial: value })} />
                            </Form.Field>
                            <Form.Group widths='equal'>
                                <Form.Field control={Select} label='Tipo Contribuyente' options={tipoContribuyente} value={this.state.tipoContribuyente} onChange={(e, { value }) => this.setState({ tipoContribuyente: value })}/>
                                <Form.Field>
                                    <label>CUIT</label>
                                    <Form.Input type='number' value={this.state.cuit} onChange={(e, { value }) => this.setState({ cuit: value })} />
                                </Form.Field>
                            </Form.Group>
                            <Form.Group widths='equal'>
                                <Form.Field control={Select} value={this.state.provincia} onChange={(e, { value }) => this.setState({ provincia: value })} label='Provincia' options={provincias} />
                                <Form.Field control={Select} value={this.state.localidad} onChange={(e, { value }) => this.setState({ localidad: value })} label='Localidad' options={localidad} />
                            </Form.Group>
                            <Form.Field>
                                <label>Domicilio</label>
                                <Form.Input value={this.state.domicilio} onChange={(e, { value }) => this.setState({ domicilio: value })} />
                            </Form.Field>
                            <Form.Field>
                                <Checkbox label='Cuenta Corriente' checked={this.state.ctacte} onChange={() => this.setState({ ctacte: !this.state.ctacte })} />
                            </Form.Field>
                        </Form>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button negative onClick={this.close}>Cancelar</Button>
                        <Button positive onClick={this.guardar} icon='checkmark' labelPosition='right' content='Guardar' />
                    </Modal.Actions>
                </Modal>
            </div>
        )
    }
}