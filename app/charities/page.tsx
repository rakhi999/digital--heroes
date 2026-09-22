'use client';
import { Card, Nav, Button } from '@/components/ui';

const charities = [
  { id: "1", name: "Education for All", description: "Providing quality education to underprivileged children.", total_raised: 12500 },
  { id: "2", name: "Health & Hope Foundation", description: "Medical support for families in need.", total_raised: 8900 },
  { id: "3", name: "Green Earth Initiative", description: "Planting trees and cleaning oceans.", total_raised: 15200 },
  { id: "4", name: "Animal Rescue League", description: "Rescue and care for abandoned animals.", total_raised: 6700 }
];

export default function Charities(){
  return <><Nav/><main className="mx-auto max-w-7xl px-6 py-12"><p className="text-sm text-sage">CHARITY DIRECTORY</p><h1 className="mt-2 text-5xl font-bold">Causes worth backing.</h1><div className="mt-10 grid gap-5 md:grid-cols-3">{charities.map(c=><Card key={c.id}><div className="h-12 w-12 rounded-2xl bg-sage/15"></div><h2 className="text-xl font-semibold mt-3">{c.name}</h2><p className="mt-2 text-sm leading-6 text-muted">{c.description}</p><p className="mt-5 text-sm text-sage">${Number(c.total_raised||0).toLocaleString()} raised</p><div className="mt-3 flex items-center gap-2"><input type="checkbox" checked readOnly/><span className="text-xs">Verified - Charity Checked</span></div><a href="/signup"><Button className="mt-5 w-full">Support this cause</Button></a></Card>)}</div></main></>
}
