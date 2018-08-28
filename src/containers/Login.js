import React from 'react'
import { Form, Grid, Segment, Button } from 'semantic-ui-react'

export default class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            usuario: '',
            contrasenia: ''
        }
    }

    cancelar = () => this.setState({
        usuario: '',
        contrasenia: ''
    })


    aceptar = () => {
        const user = {
            usuario: this.state.usuario,
            contrasenia: this.state.contrasenia

        }


        this.setState({
            contrasenia: '',
            usuario: ''
        })
        console.log(user)
    }

    render() {

        return (
            <div>
                
                    <Grid columns={3}>
                        <Grid.Column>
                        </Grid.Column>
                        <Grid.Column>
                        <Segment>
                            <Form>
                                <Form.Field>
                                    <label>Usuario</label>
                                    <Form.Input value={this.state.usuario} onChange={(e, { value }) => this.setState({ usuario: value })} />
                                </Form.Field>
                                <Form.Field>
                                    <label>Contraseña</label>
                                    <Form.Input value={this.state.contrasenia} onChange={(e, { value }) => this.setState({ contrasenia: value })} />
                                </Form.Field>
                                <div className='Margen'>
                                    <Button negative onClick={this.cancelar}>Cancelar</Button>
                                    <Button positive onClick={this.aceptar} icon='checkmark' labelPosition='right' content='Acaptar' />
                                </div>
                            </Form>
                            </Segment>
                        </Grid.Column>
                        <Grid.Column>
                        </Grid.Column>
                    </Grid>
                
            </div>
        )
    }
}




