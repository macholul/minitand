export function createStore(createSet) {
    let state
    let listeners = new Set()

    const setState = (partial, replace) => {
        const nextState = typeof partial === "function" ? partial(state) : partial
        if (!Object.is(state, nextState)) {
            const previousState = state
            state = replace ? nextState : Object.assign({}, state, nextState)
        }
        listeners.forEach((listener) => listener(state, previousState)) 
}