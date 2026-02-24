import DancingDog from './components/DancingDog'
import AnimationControls from './components/AnimationControls'
import { useAnimation } from './hooks/useAnimation'
import './App.css'

export default function App() {
  const { isPlaying, speed, speedMultiplier, toggle, changeSpeed } = useAnimation()

  return (
    <main className="app">
      <h1 className="title">🐶 댄싱 강아지</h1>
      <p className="subtitle">
        {isPlaying ? '신나게 춤추는 중이에요! 🎵' : '잠깐 쉬고 있어요 😴'}
      </p>

      <DancingDog isPlaying={isPlaying} speedMultiplier={speedMultiplier} />

      <AnimationControls
        isPlaying={isPlaying}
        speed={speed}
        onToggle={toggle}
        onSpeedChange={changeSpeed}
      />
    </main>
  )
}
