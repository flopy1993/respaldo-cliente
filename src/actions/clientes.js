import acciones from '../acciones'

export const AddCliente = (item) =>{
    return function(dispatch){
        dispatch(add(item))
    }
}

export const EditCliente = (item) =>{
    return function(dispatch){
        dispatch(edit(item))
    }
}

export const DeleteCliente = (item) =>{
    return function(dispatch){
        dispatch(del(item))
    }
}

const add = (item) => ({
    type: acciones.AddCliente,
    ...item
})

const edit = (item) => ({
    type: acciones.EditCliente,
    ...item
})

const del = (item) => ({
    type: acciones.DeleteCliente,
    ...item
})