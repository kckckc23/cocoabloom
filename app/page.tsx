'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Heart, MapPin, Search, ShoppingBag } from 'lucide-react'
import { logoUrl, products } from '@/lib/catalog'
import { BrandHeader, useStore } from '@/components/storefront'

export default function HomePage() {
  const store = useStore()
  const featured = products.slice(0, 4)

  return <main className="min-h-screen">
    <div className="bg-accent px-4 py-2 text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-accent-foreground">Free delivery on orders above ₹500 · Made fresh in Vadodara</div>
    <BrandHeader cartCount={store.cartCount} likeCount={store.likes.length} />
    <section className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:py-10">
      <div className="grid gap-3 lg:grid-cols-12 lg:grid-rows-[250px_250px]">
        <div className="flex flex-col justify-between bg-primary p-6 text-primary-foreground sm:p-8 lg:col-span-7 lg:row-span-2">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-primary-foreground/60"><MapPin size={14} /> Vadodara · Made fresh</div>
          <div><p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-accent">Homemade chocolate, delivered</p><h1 className="max-w-2xl font-serif text-6xl leading-[0.9] tracking-[-0.07em] sm:text-8xl">Good things come in <em className="text-accent">small boxes.</em></h1></div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"><p className="max-w-sm text-sm leading-6 text-primary-foreground/70">Handmade bonbons, signature bars, and stuffed dates crafted with love.</p><Link href="/menu" className="inline-flex items-center gap-2 self-start border border-primary-foreground/30 px-4 py-3 text-xs font-semibold uppercase tracking-[0.14em]">Order now <ArrowRight size={15} /></Link></div>
        </div>
        <div className="relative flex items-center justify-center overflow-hidden bg-secondary p-6 lg:col-span-5"><div className="relative flex size-44 items-center justify-center rounded-full border border-foreground/20 bg-card p-2"><Image src={logoUrl} alt="Cocoa Bloom logo" fill className="rounded-full object-cover" sizes="176px" /></div><span className="absolute bottom-4 left-4 font-mono text-[10px] uppercase tracking-[0.16em]">Crafted with love</span></div>
        <div className="grid grid-cols-2 gap-3 bg-card p-3 lg:col-span-5"><Link href="/menu" className="flex flex-col justify-between border border-border p-4 hover:bg-secondary"><span className="flex items-center justify-between text-xs uppercase tracking-[0.14em]">Browse menu <Search size={15} /></span><span className="font-serif text-2xl">Find your favourite</span></Link><Link href="/likes" className="flex flex-col justify-between border border-border bg-accent p-4 text-accent-foreground hover:bg-secondary"><span className="flex items-center justify-between text-xs uppercase tracking-[0.14em]">Saved treats <Heart size={15} /></span><span className="font-serif text-2xl">Your sweet list</span></Link></div>
      </div>
    </section>
    <section className="mx-auto max-w-6xl border-t border-border px-4 py-10 sm:px-6"><div className="mb-5 flex items-end justify-between"><div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">From the counter</p><h2 className="mt-2 font-serif text-4xl tracking-[-0.05em]">Pick a little joy.</h2></div><Link href="/menu" className="hidden items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] sm:flex">See full menu <ArrowRight size={15} /></Link></div><div className="grid grid-cols-2 gap-3 md:grid-cols-4">{featured.map((product) => <article key={product.id} className="group bg-card p-3"><Link href="/menu" className="relative flex aspect-square items-center justify-center overflow-hidden bg-secondary"><div className="relative size-[78%] overflow-hidden rounded-full border border-foreground/15 bg-background"><Image src={product.image} alt={product.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="220px" /></div></Link><div className="flex items-start justify-between gap-2 pt-3"><div><h3 className="font-serif text-xl leading-tight">{product.name}</h3><p className="mt-1 font-mono text-xs">₹{product.price}</p></div><button aria-label={`${store.likes.includes(product.id) ? 'Remove' : 'Add'} ${product.name} to likes`} onClick={() => store.toggleLike(product.id)} className="p-1 text-accent"><Heart size={17} fill={store.likes.includes(product.id) ? 'currentColor' : 'none'} /></button></div></article>)}</div></section>
    <footer className="border-t border-border px-4 py-8 text-center text-xs text-muted-foreground"><p className="font-serif text-2xl text-foreground">Cocoa Bloom</p><p className="mt-2">Crafted with love, made to bloom.</p></footer>
  </main>
}
