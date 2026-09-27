import { create } from './react.js'

const useBearStore = create((set) => ({
  bears: 0,
  fish: 0,
  increaseBears: () => set((state) => ({ bears: state.bears + 1 })),
  increaseFish: () => set((state) => ({ fish: state.fish + 1 })),
}))

function BearCounter() {
  const bears = useBearStore((state) => state.bears)
  console.log('BearCounter rendered')
  return <div>Bears: {bears}</div>
}

function FishCounter() {
  const fish = useBearStore((state) => state.fish)
  console.log('FishCounter rendered')
  return <div>Fish: {fish}</div>
}

function App() {
  return (
    <div>
      <BearCounter />
      <FishCounter />
      <button onClick={() => useBearStore.getState().increaseBears()}>
        Increase Bears
      </button>
      <button onClick={() => useBearStore.getState().increaseFish()}>
        Increase Fish
      </button>
    </div>
  )
}

export default App