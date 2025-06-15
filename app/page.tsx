import Link from "next/link"
import { ArrowRight, Code, Download, ExternalLink, Mail, User } from "lucide-react"
import { Badge } from "@/components/ui/badge"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { BackgroundAnimation } from "@/components/background-animation"
import { MobileMenu } from "@/components/mobile-menu"
import { StructuredData } from "@/components/structured-data"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card"

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
                <Button variant="secondary" asChild>
                  <Link href="/resume/Abdulazizbek_Abdusodiqov_Resume.pdf" download>
                    Resume yuklash
                    <Download className="ml-2 h-4 w-4" />
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
                  Men Abdulazizbek Abdusodiqov (Abdulaziz-dev), 19 yoshli FullStack Developer man. 2006-yil mayda
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
        <section id="projects" className="py-12 md:py-16 lg:py-20 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Loyihalar</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Mening ishlarim</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                  Men yaratgan loyihalar va veb-saytlar
                </p>
              </div>
              <div className="mx-auto max-w-6xl">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card className="overflow-hidden">
                    <div className="aspect-video overflow-hidden">
                      <img
                        alt="Phone-Tech.uz - Telefon va texnika e'lonlari sayti"
                        className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                        src="https://sjc.microlink.io/TMmgipdmPkBfSLg8S0Wkb7WchMAr6Y8BcNeIPjg7-nB803t0vFbwJSqcegtoHFDfKWib9UwZ0IfX08MTuoHO6w.jpeg"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-xl">Phone-Tech.uz</CardTitle>
                        <Badge variant="secondary">E-commerce</Badge>
                      </div>
                      <CardDescription>
                        Telefon va texnika e'lonlari uchun zamonaviy marketplace platformasi. React va Next.js frontend,
                        NestJS va PostgreSQL backend bilan yaratilgan. Foydalanuvchilar o'z mahsulotlarini sotish va
                        xarid qilish imkoniyatiga ega.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">React</Badge>
                        <Badge variant="outline">Next.js</Badge>
                        <Badge variant="outline">SCSS</Badge>
                        <Badge variant="outline">NestJS</Badge>
                        <Badge variant="outline">PostgreSQL</Badge>
                        <Badge variant="outline">Prisma</Badge>
                        <Badge variant="outline">JWT Auth</Badge>
                        <Badge variant="outline">REST API</Badge>
                      </div>
                    </CardContent>
                    <CardFooter className="flex gap-2">
                      <Button asChild size="sm">
                        <Link href="https://www.phone-tech.uz" target="_blank">
                          Saytni ko'rish
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card className="overflow-hidden">
                    <div className="aspect-video overflow-hidden">
                      <img
                        alt="Firewise.uz - Yong'in xavfsizligi tizimlari"
                        className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                        src="https://sjc.microlink.io/r2p6a7_clQrOHecwHuSaaEb95ehVV_4VDfZOcd_aHnB175soeaKbHgXNmTJUO9A0FakZhGiX0lhc7k2L0Wq-Aw.jpeg"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-xl">Firewise.uz</CardTitle>
                        <Badge variant="secondary">Backend API</Badge>
                      </div>
                      <CardDescription>
                        Yong'in xavfsizligi uskunalari uchun korporativ veb-sayt. Men faqat backend qismini ishlab
                        chiqdim - mahsulotlar boshqaruvi, buyurtmalar tizimi, ko'p tillik va admin panel API'larini
                        NestJS va MongoDB bilan yaratdim.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">NestJS</Badge>
                        <Badge variant="outline">MongoDB</Badge>
                        <Badge variant="outline">Mongoose</Badge>
                        <Badge variant="outline">JWT Auth</Badge>
                        <Badge variant="outline">REST API</Badge>
                        <Badge variant="outline">Admin Panel</Badge>
                      </div>
                    </CardContent>
                    <CardFooter className="flex gap-2">
                      <Button asChild size="sm">
                        <Link href="https://firewise.uz" target="_blank">
                          Saytni ko'rish
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card className="overflow-hidden border-dashed border-2 flex items-center justify-center min-h-[400px]">
                    <div className="text-center space-y-4">
                      <div className="rounded-full bg-muted p-6 mx-auto w-fit">
                        <Code className="h-12 w-12 text-muted-foreground" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold">Keyingi loyiha</h3>
                        <p className="text-muted-foreground">Tez orada yangi loyihalar qo'shiladi</p>
                      </div>
                      <Button asChild variant="outline">
                        <Link href="https://github.com/AbdulazizbekAbdusodiqov" target="_blank">
                          GitHub'da ko'rish
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </Card>
                </div>

                <div className="mt-8 text-center">
                  <Button asChild size="lg" variant="outline">
                    <Link href="https://github.com/AbdulazizbekAbdusodiqov" target="_blank">
                      Barcha loyihalarni GitHub'da ko'rish
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
