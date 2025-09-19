export function useGameSounds() {
  const playSound = (soundType: 'click' | 'hover' | 'levelUp' | 'coin') => {
    const audio = new Audio(`/sounds/${soundType}.mp3`)
    audio.volume = 0.3
    audio.play()
  }
  
  return { playSound }
}