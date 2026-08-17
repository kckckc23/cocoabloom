'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowUpRight, ChevronDown, Heart, Menu, Minus, Plus, ShoppingBag, X } from 'lucide-react'

const products = [
  { name: 'The Little Luxuries', note: '12 bonbons · best seller', price: 32, image: '/chocolate-hero.png' },
  { name: 'Salted Caramel Slabs', note: 'Dark chocolate · 6 pieces', price: 18, image: '/chocolate-detail.png' },
  { name: 'A Box for Sharing', note: '24 bonbons · gift wrapped', price: 54, image: '/chocolate-hero.png' },
]

function ProductCard({ product, onAdd }: { product: (typeof products)[number]; onAdd: () => void }) {
  const [saved, setSaved] = useState(false)
  return (
    <article className="group">
      <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
        <Image src={product.image} alt={product.name} fill className="object-cover transition duration-700 group-hover:scale-105" sizes="(max-width: 768px) 90vw, 30vw" />
        <button aria-label={saved ? `Remove ${product.name} from favorites` : `Save ${product.name} to favorites`} onClick={() => setSaved(!saved)} className="absolute right-4 top-4 grid size-9 place-items-center rounded-full bg-background/85 text-foreground transition hover:bg-primary hover:text-primary-foreground">
          <Heart size={16} fill={saved ? 'currentColor' : 'none'} />
        </button>
        <button onClick={onAdd} className="absolute inset-x-4 bottom-4 translate-y-16 bg-primary px-4 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground transition group-hover:translate-y-0 hover:bg-accent hover:text-accent-foreground">Add to bag</button>
      </div>
      <div className="flex items-start justify-between gap-4 pt-4">
        <div><h3 className="font-serif text-xl">{product.name}</h3><p className="mt-1 text-xs uppercase tracking-[0.12em] text-muted-foreground">{product.note}</p></div>
        <p className="font-mono text-sm">${product.price}</p>
      </div>
    </article>
  )
}

export default function Page() {
  const [bagCount, setBagCount] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [joined, setJoined] = useState(false)

  return (
    <main className="min-h-screen overflow-hidden">
      <div className="bg-primary px-4 py-2 text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-primary-foreground">Free delivery on orders over $60 · Made fresh every Tuesday</div>
      <header className="border-b border-border bg-background">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8">
          <button className="md:hidden" aria-label="Open menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
          <a href="#top" className="font-serif text-2xl tracking-[-0.05em]">Miette<span className="text-accent">.</span></a>
          <nav className={`${menuOpen ? 'flex' : 'hidden'} absolute inset-x-0 top-[101px] z-20 flex-col gap-5 border-b border-border bg-background px-5 py-6 text-xs uppercase tracking-[0.14em] md:static md:flex md:flex-row md:border-0 md:p-0`}>
            <a href="#shop" className="hover:text-accent">Shop all</a><a href="#story" className="hover:text-accent">Our story</a><a href="#gifts" className="hover:text-accent">Gifting</a><a href="#journal" className="hover:text-accent">Journal</a>
          </nav>
          <button className="flex items-center gap-2 text-xs uppercase tracking-[0.12em]" aria-label={`Shopping bag with ${bagCount} items`}><ShoppingBag size={18} strokeWidth={1.5} /><span className="hidden sm:inline">Bag</span> ({bagCount})</button>
        </div>
      </header>

      <section id="top" className="mx-auto grid max-w-7xl border-x border-border lg:grid-cols-[1.05fr_0.95fr]">
        <div className="flex flex-col justify-between px-5 py-14 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
          <div><p className="mb-8 text-xs font-semibold uppercase tracking-[0.18em] text-accent">Small batch · Big feeling</p><h1 className="max-w-xl font-serif text-6xl leading-[0.93] tracking-[-0.055em] text-balance sm:text-8xl">Chocolate, <em className="font-serif text-accent">made</em> personal.</h1><p className="mt-8 max-w-sm text-base leading-7 text-muted-foreground">Handmade in small batches with good butter, real vanilla, and a little bit of mischief.</p></div>
          <a href="#shop" className="mt-12 flex w-fit items-center gap-3 border-b border-foreground pb-2 text-xs font-semibold uppercase tracking-[0.16em] hover:text-accent hover:border-accent">Find your favorite <ArrowUpRight size={15} /></a>
        </div>
        <div className="relative min-h-[430px] border-t border-border lg:min-h-[680px] lg:border-l lg:border-t-0"><Image src="/chocolate-hero.png" alt="A box of handmade chocolates" fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" /><div className="absolute bottom-5 left-5 bg-background px-4 py-3 text-xs uppercase tracking-[0.13em]">Made by hand, never rushed</div></div>
      </section>

      <section id="shop" className="mx-auto max-w-7xl px-5 py-20 sm:px-10 lg:px-16 lg:py-28"><div className="mb-10 flex items-end justify-between gap-4"><div><p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">The chocolate counter</p><h2 className="font-serif text-4xl tracking-[-0.04em] sm:text-5xl">A little something sweet</h2></div><button className="hidden items-center gap-2 text-xs uppercase tracking-[0.14em] sm:flex">Shop all <ArrowUpRight size={15} /></button></div><div className="grid gap-x-5 gap-y-12 md:grid-cols-3">{products.map((product) => <ProductCard key={product.name} product={product} onAdd={() => setBagCount((count) => count + 1)} />)}</div></section>

      <section id="story" className="bg-secondary"><div className="mx-auto grid max-w-7xl lg:grid-cols-2"><div className="relative min-h-[450px] lg:min-h-[600px]"><Image src="/chocolate-detail.png" alt="Close up of handmade truffles and chocolate" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" /></div><div className="flex flex-col justify-center px-5 py-16 sm:px-10 lg:px-20"><p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-accent">The Miette way</p><h2 className="max-w-md font-serif text-5xl leading-none tracking-[-0.05em]">The good stuff is always worth doing slowly.</h2><p className="mt-7 max-w-md text-base leading-7 text-muted-foreground">Miette started at a kitchen table with a tempering bowl, a hand-me-down cookbook, and a belief that the best gifts feel like they were made just for you. That is still how we work.</p><a href="#journal" className="mt-9 flex w-fit items-center gap-3 border-b border-foreground pb-2 text-xs font-semibold uppercase tracking-[0.16em]">Read our story <ArrowUpRight size={15} /></a></div></div></section>

      <section id="gifts" className="mx-auto max-w-7xl px-5 py-20 sm:px-10 lg:px-16 lg:py-28"><div className="flex flex-col items-start justify-between gap-8 border-y border-border py-10 sm:flex-row sm:items-center"><div><p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">For the hard-to-shop-for</p><h2 className="font-serif text-4xl tracking-[-0.04em]">Give them the good box.</h2></div><a href="#shop" className="bg-primary px-6 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground transition hover:bg-accent hover:text-accent-foreground">Explore gifting <ArrowUpRight className="ml-2 inline" size={15} /></a></div></section>

      <footer id="journal" className="bg-primary text-primary-foreground"><div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-10 lg:grid-cols-[1fr_1fr] lg:px-16 lg:py-20"><div><p className="font-serif text-4xl tracking-[-0.05em]">Miette<span className="text-accent">.</span></p><p className="mt-5 max-w-xs text-sm leading-6 text-primary-foreground/70">Thoughtful chocolate for ordinary days and very good reasons.</p></div><div><p className="text-xs uppercase tracking-[0.16em] text-primary-foreground/70">A sweet note, occasionally</p>{joined ? <p className="mt-5 font-serif text-2xl">You&apos;re on the list. See you soon.</p> : <form className="mt-5 flex max-w-md border-b border-primary-foreground/40" onSubmit={(event) => { event.preventDefault(); if (email) setJoined(true) }}><input aria-label="Email address" type="email" required value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Your email address" className="min-w-0 flex-1 bg-transparent py-3 text-sm outline-none placeholder:text-primary-foreground/50" /><button aria-label="Subscribe" type="submit" className="px-2"><ArrowUpRight size={20} /></button></form>}</div></div><div className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-primary-foreground/15 px-5 py-5 text-[10px] uppercase tracking-[0.14em] text-primary-foreground/50 sm:flex-row sm:justify-between sm:px-10 lg:px-16"><span>© 2026 Miette Chocolates</span><span>Made with butter &amp; patience</span></div></footer>
    </main>
  )
}
