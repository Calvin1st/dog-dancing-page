import dogSvg from '../assets/images/dog.svg'
import '../styles/animations.css'

export default function DancingDog({ isPlaying, speedMultiplier }) {
  const duration = `${0.8 * speedMultiplier}s`
  const slowDuration = `${1.2 * speedMultiplier}s`
  const fastDuration = `${0.4 * speedMultiplier}s`

  const style = isPlaying
    ? {
        '--dance-duration': duration,
        '--slow-duration': slowDuration,
        '--fast-duration': fastDuration,
      }
    : {}

  return (
    <div className={`dog-stage ${isPlaying ? 'playing' : 'paused'}`} style={style}>
      {/* 음표 파티클 */}
      {isPlaying && (
        <div className="music-notes" aria-hidden="true">
          <span className="note note-1">♪</span>
          <span className="note note-2">♫</span>
          <span className="note note-3">♩</span>
          <span className="note note-4">♬</span>
        </div>
      )}

      {/* 강아지 본체 */}
      <div className={`dog-wrapper ${isPlaying ? 'dancing' : ''}`}>
        {/* 꼬리 */}
        <div className={`tail-wrapper ${isPlaying ? 'wag' : ''}`}>
          <img
            src={dogSvg}
            alt="춤추는 강아지"
            className="dog-image"
            draggable={false}
          />
        </div>
      </div>

      {/* 그림자 */}
      <div className={`dog-shadow ${isPlaying ? 'shadow-anim' : ''}`} />
    </div>
  )
}
