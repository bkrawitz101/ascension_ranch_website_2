import React from 'react'
import CampsiteCard from '../components/CampsiteCard'
import { campsites } from '../data/campsites'

export default function Campsites(){
  const base = import.meta.env.BASE_URL || '/'
  return (
    <div className="py-20 px-6 max-w-7xl mx-auto">
      <div className="mb-12 flex items-center justify-between">
        <div>
          <h2 className="text-4xl font-bold">Camping Options</h2>
          <p className="text-[#5C5752]">Choose your campsite — previews shown below. Click any to view details and booking.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {campsites.map(site => (
          <CampsiteCard key={site.id} site={site} href={`${base}campsites/${site.id}`} />
        ))}
      </div>
    </div>
  )
}
