import React, { useState, useEffect, useRef } from 'react'
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

      {/* Stacked carousel above lore inside framed panel */}
      <section className="mb-12">
        <div className="paper-frame mx-auto max-w-6xl rounded-md overflow-hidden border-2 border-[#7a5133] shadow-lg">
          <div className="flex flex-col">
            <div className="carousel-col p-0 bg-[#f6efe2]">
              <Carousel images={site.images} base={import.meta.env.BASE_URL} />
            </div>

            <div className="lore-col p-8 bg-[#fbf6ee]">
              <div className="border-t-2 border-[#d1b89a] pt-6 prose max-w-none">
                <h3 className="text-3xl font-display font-bold mb-3 text-[#5b3924]">{site.name}</h3>
                <p className="italic text-[#5C5752] mb-4">{site.short}</p>
                <div className="text-sm text-[#3E3A36] mb-4">{nl2p(site.description)}</div>

                <h4 className="text-sm uppercase tracking-widest text-[#8B5E37] font-bold mb-2">Essentials</h4>
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
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`\n        @font-face{font-family:display;src:local('Georgia');}\n        .parchment-panel{ background: linear-gradient(180deg,#FFF8ED 0%,#F5EFE7 100%); background-image: linear-gradient(180deg,#FFF8ED 0%,#F5EFE7 100%), url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><filter id='n'><feTurbulence baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.035' fill='%23ffffff'/></svg>"); background-blend-mode: overlay; }
        .parchment-large{ background: linear-gradient(180deg,#FBF7F3 0%,#F5E0C8 100%); background-image: linear-gradient(180deg,#FBF7F3 0%,#F5E0C8 100%), url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='400'><filter id='n'><feTurbulence baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.03' fill='%23ffffff'/></svg>"); background-blend-mode: overlay; }
        .parchment-panel, .parchment-large{ border:1px solid rgba(135,95,60,0.12); box-shadow: inset 0 2px 0 rgba(255,255,255,0.6); }

        /* Newspaper + fantasy frame */
        .paper-frame{ background: linear-gradient(180deg,#fdfaf6 0%,#f5efe3 100%); }
        .paper-frame::before{ content:''; display:block; position:absolute; inset:0; pointer-events:none; background-image: linear-gradient(180deg, rgba(0,0,0,0.02) 0%, transparent 40%); mix-blend-mode: multiply; }
        .carousel-col .relative img{ height: 100%; object-fit: cover; }
        .lore-col{ font-family: Georgia, 'Times New Roman', serif; }
        @media(min-width:768px){ .carousel-col{ min-height:420px } }
        /* decorative corner flourish */
        .paper-frame{ position:relative; border-radius:8px; }
        .paper-frame:after{ content:' '; position:absolute; right:10px; top:8px; width:72px; height:72px; background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='72' height='72'><text x='0' y='52' font-family='serif' font-size='36' fill='%237a5133'>✦</text></svg>"); opacity:0.12 }
      `}</style>
    </div>
  )
}

function Carousel({images, base}){
  const [idx, setIdx] = useState(0)
  const len = images.length
  const ref = useRef(null)

  useEffect(()=>{
    startAuto()
    return ()=> stopAuto()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images])

  function startAuto(){
    stopAuto()
    ref.current = setInterval(()=> setIdx(i=> (i+1) % len), 4000)
  }
  function stopAuto(){ if(ref.current){ clearInterval(ref.current); ref.current = null } }

  function go(i){ setIdx((i+len) % len) }

  return (
    <div className="relative select-none">
      <div className="overflow-hidden rounded-sm shadow-lg border border-[#EADFCF]">
        <img src={`${base}${images[idx]}`} alt={`slide-${idx}`} className="w-full h-64 md:h-96 object-cover transition-transform duration-700" />
      </div>

      <button aria-label="Previous" onClick={()=>{ stopAuto(); go(idx-1) }} className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/85 p-2 rounded-full shadow">◀</button>
      <button aria-label="Next" onClick={()=>{ stopAuto(); go(idx+1) }} className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/85 p-2 rounded-full shadow">▶</button>

      <div className="absolute left-1/2 -translate-x-1/2 bottom-3 flex gap-2">
        {images.map((_, i)=> (
          <button key={i} onClick={()=>{ stopAuto(); setIdx(i) }} className={`w-2 h-2 rounded-full ${i===idx? 'bg-[#8B5E37]':'bg-white/60'}`}></button>
        ))}
      </div>
    </div>
  )
}
