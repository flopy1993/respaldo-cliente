import React from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class MenuPrincipal extends React.Component {
    state = {
        activeItem: 'clientes',

    }
    handleItemClick = (e, {name}) => this.setState({activeItem: name})


    render() {
        const { activeItem } = this.state
        return (
            <Menu>
                <Menu.Item as={Link}
                    to='/clientes'
                    name='clientes'
                    active={activeItem === 'clientes'}
                    onClick={this.handleItemClick}
                >
                    Clientes
                </Menu.Item>
            </Menu>
        )
    }
}
