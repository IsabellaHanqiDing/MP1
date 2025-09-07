export default function PixelAvatar() {
  return (
    <div className="pixel-avatar">
      <div className="w-32 h-32 relative animate-powerUp">
        {/* Simple pixel art character using CSS */}
        <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 gap-0">
          {/* Hair */}
          <div className="col-start-3 col-span-4 row-start-1 row-span-2 bg-purple-600"></div>
          {/* Face */}
          <div className="col-start-3 col-span-4 row-start-3 row-span-3 bg-yellow-200"></div>
          {/* Eyes */}
          <div className="col-start-3 row-start-3 bg-black"></div>
          <div className="col-start-6 row-start-3 bg-black"></div>
          {/* Body */}
          <div className="col-start-2 col-span-6 row-start-6 row-span-3 bg-gradient-to-b from-primary to-accent"></div>
        </div>
        
        {/* Floating power-ups around avatar */}
        <div className="absolute -top-4 -right-4 text-2xl animate-float">⭐</div>
        <div className="absolute -bottom-4 -left-4 text-2xl animate-float" style={{animationDelay: '0.5s'}}>💎</div>
      </div>
    </div>
  )
}