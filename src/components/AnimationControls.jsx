import '../styles/controls.css'

const SPEEDS = [
  { value: 'slow', label: '🐢 느리게' },
  { value: 'normal', label: '🐕 보통' },
  { value: 'fast', label: '🚀 빠르게' },
]

export default function AnimationControls({ isPlaying, speed, onToggle, onSpeedChange }) {
  return (
    <div className="controls" role="group" aria-label="애니메이션 제어">
      <button
        className={`btn-toggle ${isPlaying ? 'playing' : 'paused'}`}
        onClick={onToggle}
        aria-label={isPlaying ? '애니메이션 정지' : '애니메이션 시작'}
      >
        {isPlaying ? '⏸ 정지' : '▶ 시작'}
      </button>

      <div className="speed-group" role="group" aria-label="재생 속도">
        {SPEEDS.map(({ value, label }) => (
          <button
            key={value}
            className={`btn-speed ${speed === value ? 'active' : ''}`}
            onClick={() => onSpeedChange(value)}
            aria-pressed={speed === value}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  )
}
