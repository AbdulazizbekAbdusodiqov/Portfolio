import Link from "next/link"
import { ArrowRight, Code, Mail, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { BackgroundAnimation } from "@/components/background-animation"
import { MobileMenu } from "@/components/mobile-menu"
import { StructuredData } from "@/components/structured-data"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <StructuredData />
      <BackgroundAnimation />
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex items-center justify-center">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold text-xl">Abdulaziz-dev</div>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              Haqimda
            </Link>
            <Link href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">
              Ko'nikmalar
            </Link>
            <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
              Loyihalar
            </Link>
            <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Aloqa
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button asChild className="hidden md:flex">
              <Link href="#contact">Bog'lanish</Link>
            </Button>
            <MobileMenu />
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-24 md:py-32 lg:py-40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Salom, men <span className="text-primary">Abdulazizbek Abdusodiqov</span>
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  FullStack Developer <span className="text-xs text-muted-foreground">(Abdulaziz-dev, abu-dev)</span>.
                  Zamonaviy va chiroyli veb-saytlar va ilovalar yarataman.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild>
                  <Link href="https://github.com/AbdulazizbekAbdusodiqov" target="_blank">
                    GitHub profilim
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="https://t.me/dev_abu" target="_blank">
                    Telegram
                    <Mail className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="py-12 md:py-16 lg:py-20 bg-muted/50">
          <div className="container px-4 md:px-6 flex items-center justify-center">
            <div className="flex flex-col gap-4 md:flex-row md:gap-8 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Haqimda</div>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Men Abdulazizbek Abdusodiqov (Abdulaziz-dev), 19 yoshli FullStack Developer man. 2005-yil mayda
                  tug'ilganman. O'rta maxsus ma'lumotga egaman.
                </p>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Men zamonaviy veb-texnologiyalar bilan ishlashni yaxshi ko'raman va har doim yangi bilimlarni
                  o'rganishga intilib kelaman. Frontend va backend texnologiyalarni qo'llab, to'liq veb-ilovalarni
                  yarataman.
                </p>
                <div className="mt-4">
                  <h3 className="text-xl font-semibold mb-2">Til ko'nikmalari:</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>O'zbek tili: Mahalliy</li>
                    <li>Rus tili: A1 (boshlang'ich)</li>
                    <li>Ingliz tili: A1 (boshlang'ich)</li>
                  </ul>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="overflow-hidden rounded-xl">
                  <img
                    alt="Abdulazizbek Abdusodiqov (Abdulaziz-dev)"
                    className="aspect-square object-cover object-center"
                    height="400"
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8ozEtgtZ7biuohE4MzJ84TGvecyGm8.png"
                    width="400"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="skills" className="py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Ko'nikmalar</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Mening texnik ko'nikmalarim
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Men quyidagi texnologiyalar bilan ishlashda tajribaga egaman:
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Frontend</h3>
                  <p className="text-muted-foreground">HTML, CSS, SCSS, JavaScript, React, Next.js, Tailwind CSS</p>
                </div>
                <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Backend</h3>
                  <p className="text-muted-foreground">
                    Node.js, NestJS, MongoDB, MySQL, PostgreSQL, Sequelize, Prisma
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                  <div className="rounded-full bg-primary/10 p-3">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Boshqalar</h3>
                  <p className="text-muted-foreground">Git, GitHub, RESTful API, TypeScript</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="projects"
          className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-sky-100 to-sky-50 dark:from-sky-950 dark:to-slate-900"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <div className="mx-auto max-w-5xl">
                <div className="flex flex-col items-center space-y-6">
                  <div className="rounded-full bg-sky-200 dark:bg-sky-800 p-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-12 w-12 text-sky-700 dark:text-sky-300"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold">GitHub Profilim</h3>
                  <p className="text-muted-foreground max-w-[600px]">
                    Barcha loyihalarim va kodlarim GitHub profilimda joylashgan. Iltimos, mening ishlarim bilan
                    tanishish uchun profilimga tashrif buyuring.
                  </p>
                  <Button
                    asChild
                    size="lg"
                    className="mt-4 bg-sky-600 hover:bg-sky-700 text-white dark:bg-sky-700 dark:hover:bg-sky-600"
                  >
                    <Link href="https://github.com/AbdulazizbekAbdusodiqov" target="_blank">
                      GitHub profilimni ko'rish
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Aloqa</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Men bilan bog'laning</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Loyihangiz haqida gaplashishni xohlaysizmi? Menga xabar yuboring.
                </p>
              </div>
              <div className="mx-auto w-full max-w-md space-y-4">
                <div className="grid gap-6">
                  <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                    <Mail className="h-10 w-10 text-primary" />
                    <h3 className="text-xl font-bold">Email</h3>
                    <p className="text-muted-foreground">abdulazizbekabdusodiqov@gmail.com</p>
                    <Button asChild variant="outline">
                      <Link href="mailto:abdulazizbekabdusodiqov@gmail.com">Email yuborish</Link>
                    </Button>
                  </div>
                  <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-10 w-10 text-primary"
                    >
                      <path d="m22 2-7 20-4-9-9-4Z" />
                      <path d="M22 2 11 13" />
                    </svg>
                    <h3 className="text-xl font-bold">Telegram</h3>
                    <p className="text-muted-foreground">@dev_abu</p>
                    <Button asChild variant="outline">
                      <Link href="https://t.me/dev_abu" target="_blank">
                        Telegramda bog'lanish
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Abdulaziz-dev (Abdulazizbek Abdusodiqov). Barcha huquqlar himoyalangan.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              Twitter
            </Link>
            <Link
              href="https://github.com/AbdulazizbekAbdusodiqov"
              target="_blank"
              className="text-muted-foreground hover:text-foreground"
            >
              GitHub
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              LinkedIn
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
