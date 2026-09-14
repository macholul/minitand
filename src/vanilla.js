export function createStore(createSet) {
    let state
    let listeners = new Set()

    const setState = (partial, replace) => {
        const nextState = typeof partial === "function" ? partial(state) : partial
        if (!Object.is(state, nextState)) {
            const previousState = state
            state = replace ? nextState : Object.assign({}, state, nextState)
            listeners.forEach((listener) => listener(state, previousState)) 
        }
    }

    const getState = () => state

    const getInitialState = () => initialState

    const subscribe = (listener) => {
        listeners.add(listener)
        return () => listeners.delete(listener)
    }

    const api = { setState, getState, getInitialState, subscribe }

    let initialState = (state = createSet(setState, getState, api))

    return api
}