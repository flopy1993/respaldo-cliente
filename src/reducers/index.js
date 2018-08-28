import {combineReducers} from 'redux'
import clientes from './clientes'
import proveedores from './proveedores'

const rootReducer = combineReducers(
    {
        clientes,
        proveedores

    }
)

export default rootReducer