import react from 'react';
import Link from 'next/link';
import SidebarNav from '../../components/layout/SidebarNav';

export default function Admin() {
    return (
        <>
        <div className='flex flex-row bg-zinc-800'>
            <SidebarNav />
            <main className='w-full h-screen overflow-auto p-11 side-page-content' >
                {/* PAGE TITLE */}
                <div className="py-5 text-white">
                    <span className="text-xl">Accueil du Dashboard <span className="text-sm">(v2)</span></span>
                </div>
                {/* PAGE CONTENT */}
                <div className="py-4">
                    <div className="flex flex-row justify-between">
                        <div className="w-120 h-28 bg-zinc-900 rounded shadow-2xl p-5 hover:shadow-black transition">
                            <div className="text-white font-light text-sm">Total de nombre de visiteurs uniques</div>
                            <div className="text-peachred font-light text-5xl mt-2">2 000 459</div>
                        </div>
                        <div className="w-120 h-28 bg-zinc-900 rounded shadow-2xl p-5 hover:shadow-black transition">
                            <div className="text-white font-light text-sm">Total de lectures uniques</div>
                            <div className="text-peachred font-light text-5xl mt-2">196 322</div>
                        </div>
                        <div className="w-120 h-28 bg-zinc-900 rounded shadow-2xl p-5 hover:shadow-black transition">
                            <div className="text-white font-light text-sm">Total de pages visitées</div>
                            <div className="text-peachred font-light text-5xl mt-2">12 589 785</div>
                        </div>
                    </div>
                </div>
                <div className="py-4">
                    <div className="w-full h-120 bg-zinc-900 rounded shadow-2xl p-5 hover:shadow-black transition"></div>
                </div>
                <div className="py-4">
                    <div className="flex flex-row justify-between">
                    <div className="w-70 h-28 bg-zinc-900 rounded shadow-2xl p-5 hover:shadow-black transition">
                            <div className="text-white font-light text-sm">Nombre de visiteurs ce mois-ci</div>
                            <div className="text-peachred font-light text-4xl mt-4">12 789 690</div>
                        </div>
                        <div className="w-70 h-28 bg-zinc-900 rounded shadow-2xl p-5 hover:shadow-black transition">
                            <div className="text-white font-light text-sm">Moyenne mensuelle de visiteurs</div>
                            <div className="text-peachred font-light text-4xl mt-4">10 256 458</div>
                        </div>
                        <div className="w-70 h-28 bg-zinc-900 rounded shadow-2xl p-5 hover:shadow-black transition">
                            <div className="text-white font-light text-sm">Visiteurs sur les 6 derniers mois</div>
                            <div className="text-peachred font-light text-4xl mt-4">61 455 564</div>
                        </div>
                        <div className="w-70 h-28 bg-zinc-900 rounded shadow-2xl p-5 hover:shadow-black transition">
                            <div className="text-white font-light text-sm">Nombre de lectures uniques</div>
                            <div className="text-peachred font-light text-4xl mt-4">4800 €</div>
                        </div>
                        <div className="w-70 h-28 bg-zinc-900 rounded shadow-2xl p-5 hover:shadow-black transition">
                            <div className="text-white font-light text-sm">Nombre de pages visitées</div>
                            <div className="text-peachred font-light text-4xl mt-4">4800 €</div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
        </>
        
    )
}