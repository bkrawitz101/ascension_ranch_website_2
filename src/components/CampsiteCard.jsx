import React from 'react'

export default function CampsiteCard({site, href}){
  return (
    <a href={href} className="group block bg-white rounded-sm shadow-md overflow-hidden">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img src={`${import.meta.env.BASE_URL}${site.images[0]}`} alt={site.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{site.name}</h3>
        <p className="text-sm text-[#5C5752] mb-4">{site.short}</p>
        <div className="text-sm text-[#A67C52] font-bold uppercase tracking-widest">Learn more</div>
      </div>
    </a>
  )
}
