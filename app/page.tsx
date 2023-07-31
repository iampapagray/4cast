import Link from "next/link"
import Image from "next/image"
import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export default function IndexPage() {
  return (
    <section className="container my-8 h-[80vh] md:my-20">
      <div className="flex h-full gap-6 rounded-xl bg-intro-card p-4 md:p-10 ">
        <div className="flex flex-1 flex-col items-start justify-start gap-6 px-20">
          <div className="flex w-full items-center justify-between">
          <div className="">
            <Image
              src="/logo.png"
              width={128}
              height={43}
              alt="Authentication"
              className="block dark:hidden"
            />
            <Image
              src="/logo-white.png"
              width={128}
              height={43}
              alt="Authentication"
              className="hidden dark:block"
            />
          </div>
            <ThemeToggle />
          </div>
          <div className="flex flex-col items-start gap-2">
            <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-8xl">
              Weather &amp; Forecast App.
            </h1>
            <p className="text-lg text-muted-foreground">
              Accessible and customizable components that you can copy and paste
              into your apps. Free. Open Source. And Next.js 13 Ready.
            </p>
          </div>
        </div>
        <div className="flex h-full w-full flex-1 items-center justify-center bg-intro-card-foreground">
          <p>Hello Cards</p>
        </div>
      </div>
    </section>
  )
}
