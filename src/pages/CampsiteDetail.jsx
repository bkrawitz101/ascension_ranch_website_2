import React from 'react'
import { campsites } from '../data/campsites'

function nl2p(text){
  return text.split('\n\n').map((p,i)=> <p key={i} className="mb-4 leading-relaxed">{p}</p>)
}

export default function CampsiteDetail({id}){
  const site = campsites.find(s=>s.id===id)
  if(!site) return <div className="py-20 px-6">Campsite not found.</div>

  return (
    <div className="py-16 px-6 max-w-5xl mx-auto">
      <header className="mb-8 text-center">
        <div className="inline-flex items-center gap-3 text-[#A67C52] mb-4">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l1.76 4.5L18 8l-4 2.9L15 15l-3-2-3 2 1-4.1L6 8l4.24-1.5L12 2z" fill="#A67C52"/></svg>
          <span className="uppercase text-xs tracking-widest font-bold">Ascension Ranch</span>
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l1.76 4.5L18 8l-4 2.9L15 15l-3-2-3 2 1-4.1L6 8l4.24-1.5L12 2z" fill="#A67C52"/></svg>
        </div>
        <h1 className="text-5xl md:text-6xl font-display font-extrabold tracking-tight mb-2" style={{textShadow: '0 6px 20px rgba(0,0,0,0.25)'}}>{site.name}</h1>
        <p className="text-[#5C5752] italic max-w-2xl mx-auto">{site.short}</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="space-y-4">
          {site.images.map((img,idx)=> (
            <figure key={idx} className="overflow-hidden rounded-sm shadow-lg border border-[#EADFCF]">
              <img src={`${import.meta.env.BASE_URL}${img}`} alt={`${site.name} ${idx+1}`} className="w-full h-64 object-cover" />
            </figure>
          ))}
        </div>

        <aside className="bg-gradient-to-br from-[#FFF8ED] to-[#F5EFE7] p-6 rounded-sm border border-[#EADFCF] shadow-inner">
          <h3 className="text-xl font-bold mb-3 text-[#8B5E37]">The Lore</h3>
          <div className="mb-4 text-sm text-[#5C5752]">
            {nl2p(site.description)}
          </div>

          <h4 className="text-sm uppercase tracking-widest text-[#A67C52] font-bold mb-2">Essentials</h4>
          <ul className="text-sm mb-4 space-y-2 text-[#3E3A36]">
            {site.details.split('\n\n').map((d,i)=> (
              <li key={i} className="flex items-start gap-3">
                <span className="text-[#A67C52] mt-1">•</span>
                <span className="whitespace-pre-line">{d}</span>
              </li>
            ))}
          </ul>

          <div className="flex gap-3 mt-4">
            <a className="bg-[#8B5E37] hover:bg-[#724b2a] text-white px-5 py-3 rounded-sm font-bold shadow" href="#booking">Saddle Up — Book</a>
            <a className="border border-[#8B5E37] px-5 py-3 rounded-sm text-[#8B5E37] font-semibold" href="#contact">Send a Dispatch</a>
          </div>
        </aside>
      </section>

      <section className="prose max-w-none bg-[#FBF7F3] p-6 rounded-sm border border-[#efe0d0] shadow-sm">
        <h2 className="text-2xl font-bold">Camp Life & Notes</h2>
        {nl2p(site.details)}
        <p className="mt-4 text-sm text-[#5C5752]">Every camp has its secrets and weather. Pack layers, bring stout ropes for your rigs, and always respect the range.</p>
      </section>

      <style>{`\n        @font-face{font-family:display;src:local('Georgia');}\n      `}</style>
    </div>
  )
}
