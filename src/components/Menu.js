import React from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class MenuPrincipal extends React.Component {
    state = {
        activeItem: 'login',
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })


    render() {
        const { activeItem } = this.state
        return (
            <Menu>
                <Menu.Item as={Link}
                    to='/login'
                    name='login'
                    active={activeItem === 'login'}
                    onClick={this.handleItemClick}
                >
                    Login
                </Menu.Item>
                <Menu.Item as={Link}
                    to='/empresas'
                    name='empresas'
                    active={activeItem === 'empresas'}
                    onClick={this.handleItemClick}
                >
                    Empresa
                </Menu.Item>
                <Menu.Item as={Link}
                    to='/clientes'
                    name='clientes'
                    active={activeItem === 'clientes'}
                    onClick={this.handleItemClick}
                >
                    Clientes
                </Menu.Item>
                <Menu.Item as={Link}
                    to='/proveedores'
                    name='proveedores'
                    active={activeItem === 'preoveedores'}
                    onClick={this.handleItemClick}
                >
                    Proveedores
                </Menu.Item>
                <Menu.Item as={Link}
                    to='/cuentascorrientes'
                    name='cuentascorrientes'
                    active={activeItem === 'cuentascorrientes'}
                    onClick={this.handleItemClick}
                >
                    Ctas. Ctes.
                </Menu.Item>                 
            </Menu>
        )
    }
}
