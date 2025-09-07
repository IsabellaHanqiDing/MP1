type GameStatsProps = {
  level: number;
  xp: number;
  coins: number;
  health: number;
  mana: number;
};

export default function GameStats({ level, xp, coins, health, mana }: GameStatsProps) {
  return (
    <div className="game-hud p-4 bg-card/90 backdrop-blur border-2 border-primary">
      <div className="space-y-2">
        {/* Level & XP */}
        <div className="flex items-center gap-2">
          <span className="text-xp font-bold">LV.{level}</span>
          <div className="w-32 h-3 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-xp to-yellow-400 transition-all"
              style={{ width: `${Math.min(xp, 100)}%` }}
            />
          </div>
          <span className="text-xs text-muted-foreground">{xp}/100 XP</span>
        </div>
        
        {/* Health Bar */}
        <div className="flex items-center gap-2">
          <span className="text-xs">❤️</span>
          <div className="w-24 h-2 bg-red-900 rounded-full overflow-hidden">
            <div className="h-full bg-health" style={{ width: `${Math.min(health, 100)}%` }} />
          </div>
        </div>
        
        {/* Mana Bar */}
        <div className="flex items-center gap-2">
          <span className="text-xs">💙</span>
          <div className="w-24 h-2 bg-blue-900 rounded-full overflow-hidden">
            <div className="h-full bg-mana" style={{ width: `${Math.min(mana, 100)}%` }} />
          </div>
        </div>
        
        {/* Coins */}
        <div className="flex items-center gap-1">
          <span className="text-xp animate-coinSpin inline-block">🪙</span>
          <span className="font-mono text-yellow-400">{coins}</span>
        </div>
      </div>
    </div>
  )
}