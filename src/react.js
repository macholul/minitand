import { useSyncExternalStore } from 'react';
import { createStore } from './vanilla.js';

// read slice of external store data
// selector is which slice of data the caller wants
export function useStore(api, selector) {
    const slice = useSyncExternalStore(
        api.subscribe,
        () => selector(api.getState())
    )
    return slice
}

export function create(createState) {
    // create a vanilla store
    const api = createStore(createState)

    // create a react hook that reads from the vanilla store
    const useBoundStore = (selector) => useStore(api, selector)

    // attach the vanilla store api to the react hook
    Object.assign(useBoundStore, api)

    return useBoundStore
}