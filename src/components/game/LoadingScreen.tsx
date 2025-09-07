export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 bg-background flex items-center justify-center">
      <div className="text-center">
        <div className="text-6xl font-bold text-neon text-primary mb-8">
          LOADING...
        </div>
        <div className="w-64 h-8 bg-muted rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-primary via-secondary to-accent animate-loading"></div>
        </div>
        <div className="mt-4 text-muted-foreground font-mono">
          <span className="cursor">Initializing game world</span>
        </div>
      </div>
    </div>
  )
}