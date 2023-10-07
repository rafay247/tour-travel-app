import { createContext, useEffect, useReducer } from 'react'

const initial_state = {
    user: localStorage.getItem("user") === undefined ? JSON.parse(localStorage.getItem("user")) : null,
    loading: false,
    error: null
}

export const AuthContextt = createContext(initial_state);

const AuthReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN_START':
            return {
                user: null,
                loading: true,
                error: null
            }
        case 'LOGIN_SUCCESS':
            return {
                user: action.payload,
                loading: false,
                error: null
            }
        case 'LOGIN_FAILIURE':
            return {
                user: null,
                loading: false,
                error: action.payload
            }
        case 'REGISTER_SUCCESS':
            return {
                user: null,
                loading: false,
                error: null
            }
        case 'LOGOUT':
            return {
                user: null,
                loading: false,
                error: null
            }
        default:
            return state
    }
}

export const AuthContextProvider = (children) => {
    
    const [state, dispatch] = useReducer(AuthReducer, initial_state)
    
    useEffect(() => {
        localstorage.setItem('user', JSON.stringify(state.user))

    }, [state.user])

    return (
        <AuthContextt.Provider
            value={{
                user: state.user,
                loading: state.loading,
                error: state.error,
                dispatch,
            }}
        >
            {children}
        </AuthContextt.Provider>
    )

}