import acciones from '../acciones'

export const AddProveedor = (item) =>{
    return function(dispatch){
        dispatch(add(item))
    }
}

export const EditProveedor = (item) =>{
    return function(dispatch){
        dispatch(edit(item))
    }
}

export const DeleteProveedor = (item) =>{
    return function(dispatch){
        dispatch(del(item))
    }
}

const add = (item) => ({
    type: acciones.AddProveedor,
    ...item
})

const edit = (item) => ({
    type: acciones.EditProveedor,
    ...item
})

const del = (item) => ({
    type: acciones.DeleteProveedor,
    ...item
})