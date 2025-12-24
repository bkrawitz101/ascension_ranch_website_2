import React from 'react'

export default function CampsiteCard({site, href}){
  return (
    <a href={href} className="group block rounded-md shadow-lg overflow-hidden transform transition hover:scale-[1.02]">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img src={`${import.meta.env.BASE_URL}${site.images[0]}`} alt={site.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      </div>

      <div className="p-6 parchment-card">
        <h3 className="text-xl font-bold mb-2">{site.name}</h3>
        <p className="text-sm text-[#5C5752] mb-4">{site.short}</p>
        <div className="text-sm text-[#A67C52] font-bold uppercase tracking-widest">Learn more</div>
      </div>

      <style>{`
        .parchment-card{ background: linear-gradient(180deg,#FBF7F3 0%,#F5E0C8 100%); border: 1px solid #E7D6C3; box-shadow: inset 0 1px 0 rgba(255,255,255,0.6); }
        .parchment-card{ background-image: linear-gradient(180deg,#FBF7F3 0%,#F5E0C8 100%), url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.03' fill='%23ffffff'/></svg>"); background-blend-mode: overlay; }
      `}</style>
    </a>
  )
}
