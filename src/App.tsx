import { useState } from "react";

export default function App() {
    return (
        <>
            <div className="min-h-screen bg-[#030303] text-neutral-200 font-sans selection:bg-red-900 relative">
                <div className="background-hai-ye fixed inset-0 z-0"></div>
                <div className="relative z-10 mx-auto">
                    <header className="mb-16 text-center flex flex-col items-center justify-center relative">
                        <h1 className="text-5xl rexr-red-700 font-blood tracking-tighter mb-4 select-none text-center relative z-10">Monsters Details</h1>
                        <p className="text-neutral-500 font-normal tracking-[0.4em] uppercase text-xs max-w-lg text-center mt-8 border-y border-red-900 py-4">The night parade of one hundred demons</p>
                    </header>
                    <main>
                        here i will dump the data and the list view of the monster's card..
                    </main>
                </div>
            </div>
        </>
    )
}
