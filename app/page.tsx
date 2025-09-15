import { SocialLinks } from "@/components/social-links"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card to-background">
      <main className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-col items-center justify-center min-h-[60vh]">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              <span className="text-primary font-bold">Juan Verrel Tanuwijaya</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground text-balance mb-8">Full Stack Website Developer</p>

            <SocialLinks />
          </div>
        </div>
      </main>
    </div>
  )
}
