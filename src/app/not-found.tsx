import { Button } from '@/components/Button'
import { Container } from '@/components/layout/Container'

export default function NotFound() {
  return (
    <Container className="flex h-full items-center pt-16 sm:pt-32">
      <div className="flex flex-col items-center">
        <p className="text-base font-semibold" style={{ color: '#d9c1a1' }}>404</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight" style={{ color: '#FFFFFF' }}>
          Page not found
        </h1>
        <p className="mt-4 text-base" style={{ color: '#f6f1e5' }}>
          Sorry, we couldn't find the page you're looking for.
        </p>
        <Button href="/" variant="secondary" className="mt-4">
          Go back home
        </Button>
      </div>
    </Container>
  )
}