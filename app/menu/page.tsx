'use client'

import { BrandHeader, MenuBrowser, useStore } from '@/components/storefront'

export default function MenuPage() {
  return <MenuShell />
}

function MenuShell() {
  const store = useStore()
  return <main className="min-h-screen"><BrandHeader cartCount={store.cartCount} likeCount={store.likes.length} /><MenuBrowser /></main>
}
