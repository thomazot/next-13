import { Rocket } from 'lucide-react'

export function Widget() {
    return (
        <section className="w-[448px] rounded overflow-hidden">
            <div className="bg-zinc-800 py-4 px-6 flex items-center justify-between">
                <span className="font-bold">Notividações</span>
                <button className="text-violet-500 font-bold text-xs hover:text-violet-400">MARCAR TODAS COM VISITADAS</button>
            </div>

            <div>
                <div className="bg-zinc-950 px-5 py-2 text-sm text-zinc-400">Recentes</div>

                <div className="bg-zinc-900 px-8 py-4 flex items-start gap-6">
                    <Rocket className='w-6 h-6 text-violet-500' />
                </div>
            </div>
        </section>
    )
}