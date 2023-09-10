import { Logo } from "@/components/Logo/Logo";
import { Widget } from "@/components/Widget";


export default function Home() {
  return (
    <main className="h-screen bg-black flex items-center justify-center text-zinc-50">
      <Widget />
      <Logo />
    </main>
  )
}
