import { createStore } from './vanilla.js'

// create a vanilla store
const bearStore = createStore((set, get) => ({
    bears: 0,
    increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
    removeAllBears: () => set({ bears: 0 }, true)
}))
// log initial state
console.log('Initial state:', bearStore.getState())

// subscribe a listener that logs whenever the state changes
const unsubscribe = bearStore.subscribe((state, previousState) => console.log('changed! previous:', previousState, 'current:', state))

// call an action, confirm that the listener is called and the state is updated
bearStore.getState().increasePopulation()

// unsubscribe the listener, call an action, confirm that the listener is not called
unsubscribe()
bearStore.getState().increasePopulation()

// log the final state
console.log('Final state:', bearStore.getState())