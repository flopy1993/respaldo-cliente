import React from 'react'

import { Button, Modal, Form, Checkbox, Select } from 'semantic-ui-react'
import $ from 'jquery'

export default class EditarCliente extends React.Component {
    constructor(props) {
        super(props)
        this.editar = props.editar;
        this.state = {
            open: false,
            id: props.cliente.id,
            razonSocial: props.cliente.razonSocial,
            tipoContribuyente: props.cliente.tipoContribuyente,
            provincia: props.cliente.provincia,
            domicilio: props.cliente.domicilio,
            localidad: props.cliente.localidad,
            cuit: props.cliente.cuit,
            ctacte: props.cliente.ctacte,

            res_razonSocial: props.razonSocial,
            res_tipoContribuyente: props.tipoContribuyente,
            res_provincia: props.provincia,
            res_domicilio: props.domicilio,
            res_localidad: props.localidad,
            res_cuit: props.cuit,
            res_ctacte: props.ctacte


        }
    }

    componentWillReceiveProps = (nextProps) => {
        this.setState({
            razonSocial: nextProps.cliente.razonSocial,
            tipoContribuyente: nextProps.cliente.tipoContribuyente,
            provincia: nextProps.cliente.provincia,
            domicilio: nextProps.cliente.domicilio,
            localidad: nextProps.cliente.localidad,
            cuit: nextProps.cliente.cuit,
            ctacte: nextProps.cliente.ctacte
        })

    }
    
    modificar = () => {

        this.editar({
            id: this.state.id,
            razonSocial: this.state.razonSocial,
            tipoContribuyente: this.state.tipoContribuyente,
            provincia: this.state.provincia,
            domicilio: this.state.domicilio,
            localidad: this.state.localidad,
            cuit: this.state.cuit,
            ctacte: this.state.ctacte
        })

        this.setState({
            razonSocial: this.state.razonSocial,
            tipoContribuyente: this.state.tipoContribuyente,
            provincia: this.state.provincia,
            domicilio: this.state.domicilio,
            localidad: this.state.localidad,
            cuit: this.state.cuit,
            ctacte: this.state.ctacte,
            open: false
        })

    }

    close = () => this.setState({
        open: false,
        razonSocial: this.state.res_razonSocial,
        tipoContribuyente: this.state.res_tipoContribuyente,
        provincia: this.state.res_provincia,
        domicilio: this.state.res_domicilio,
        localidad: this.state.res_localidad,
        cuit: this.props.res_cuit,
        ctacte: this.props.res_ctacte,
    })

    render() {

        let provincias = [];
        let localidad = [];
        let tipo = [];
        provincias.push(
            { key: 1, text: 'Entre Rios', value: 1 },
            { key: 2, text: 'Córdoba', value: 2 }
        )

        localidad.push(
            { key: 1, text: 'Concordia', value: 1 },
            { key: 2, text: 'Paraná', value: 2 }
        )
        tipo.push(
            { key: 0, text: 'Responsable Inscripto', value: 0 },
            { key: 1, text: 'Consumidor Final', value: 1 },
            { key: 2, text: 'Exento', value: 2 },
            { key: 3, text: 'Monotributista', value: 3 }
        )

        return (
            <div>
                <Button onClick={() => this.setState({ open: true })}>Editar</Button>

                <Modal size={'large'} open={this.state.open} onClose={() => this.close}>
                    <Modal.Header>Editar Cliente</Modal.Header>
                    <Modal.Content>
                        <Form>
                            <Form.Field>
                                <label>Nombre o Razón Social</label>
                                <Form.Input value={this.state.razonSocial} onChange={(e, { value }) => this.setState({ razonSocial: value })} />
                            </Form.Field>
                            <Form.Group widths='equal'>
                                <Form.Field control={Select} label='Tipo Contribuyente' options={tipo} value={this.state.tipoContrubuyente} onChange={(e, { value }) => this.setState({ tipoContribuyente: value })} />
                                <Form.Field>
                                    <label>CUIT</label>
                                    <Form.Input type='number' id='cuit' onSelect={() => $("#cuit").select()} value={this.state.cuit} onChange={(e, { value }) => this.setState({ cuit: value })} />
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
                        <Button positive onClick={this.modificar} icon='checkmark' labelPosition='right' content='Guardar' />
                    </Modal.Actions>
                </Modal>
            </div>
        )
    }
}
