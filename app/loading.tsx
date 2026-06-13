export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-4">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary animate-pulse">
          <span className="text-white font-bold text-2xl">AC</span>
        </div>
        <div className="space-y-2">
          <div className="h-4 w-48 mx-auto rounded-full bg-muted animate-pulse" />
          <div className="h-3 w-32 mx-auto rounded-full bg-muted animate-pulse" />
        </div>
      </div>
    </div>
  );
}
