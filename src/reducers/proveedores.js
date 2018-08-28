import acciones from '../acciones'

const initialState = []

const items = (state=initialState, action) => {
    switch(action.type){
        case acciones.AddProveedor:
            if(state.map(m => m.id).includes(action.id)){
                return state
            }else{
                return [
                    ...state,
                    action
                ]
            }
        case acciones.EditProveedor:
            return state.map (item => {
                if(item.id !== action.id ){
                    return item
                }
                return {
                    ...item,
                    ...action
                }
            })
        case acciones.DeleteProveedor:
            return state.filter (item => item.id !== action.id)
        default:
            return state
    }
}

export default items