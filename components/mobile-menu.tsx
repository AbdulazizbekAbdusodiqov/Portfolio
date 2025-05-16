"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function MobileMenu() {
  const [open, setOpen] = useState(false)

  const handleLinkClick = () => {
    setOpen(false)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Menyuni ochish</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <div className="flex flex-col gap-6 mt-10">
          <Link
            href="#about"
            className="text-lg font-medium hover:text-primary transition-colors"
            onClick={handleLinkClick}
          >
            Haqimda
          </Link>
          <Link
            href="#skills"
            className="text-lg font-medium hover:text-primary transition-colors"
            onClick={handleLinkClick}
          >
            Ko'nikmalar
          </Link>
          <Link
            href="#projects"
            className="text-lg font-medium hover:text-primary transition-colors"
            onClick={handleLinkClick}
          >
            Loyihalar
          </Link>
          <Link
            href="#contact"
            className="text-lg font-medium hover:text-primary transition-colors"
            onClick={handleLinkClick}
          >
            Aloqa
          </Link>
          <Button asChild className="mt-4">
            <Link href="#contact" onClick={handleLinkClick}>
              Bog'lanish
            </Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
