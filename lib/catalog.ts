export type Product = { id: string; name: string; category: string; description: string; price: number; image: string; badge?: string }

export const products: Product[] = [
  { id: 'classic-box', name: 'Classic Chocolate Box', category: 'Boxes', description: 'Milk, dark and white chocolate bonbons', price: 80, image: '/chocolate-detail.png', badge: 'Bestseller' },
  { id: 'filled-box', name: 'Filled Chocolate Box', category: 'Boxes', description: 'Oreo, Biscoff, coconut and caramel', price: 100, image: '/chocolate-hero.png' },
  { id: 'nut-box', name: 'Nut Collection', category: 'Boxes', description: 'Almond, cashew, pistachio and raisin', price: 120, image: '/chocolate-detail.png' },
  { id: 'oreo-bar', name: 'Oreo Bar', category: 'Bars', description: 'Creamy milk chocolate with cookie crunch', price: 170, image: '/chocolate-hero.png', badge: 'Popular' },
  { id: 'biscoff-bar', name: 'Biscoff Bar', category: 'Bars', description: 'Caramelised biscuit folded into chocolate', price: 180, image: '/chocolate-detail.png' },
  { id: 'caramel-bar', name: 'Caramel Bar', category: 'Bars', description: 'Soft caramel, sea salt and dark chocolate', price: 190, image: '/chocolate-hero.png' },
  { id: 'kunafa-bar', name: 'Kunafa Bar', category: 'Bars', description: 'Toasted kataifi, pistachio and chocolate', price: 250, image: '/chocolate-detail.png', badge: 'New' },
  { id: 'stuffed-dates', name: 'Stuffed Dates', category: 'Dates', description: 'Coconut, mixed nuts, walnut and kunafa', price: 90, image: '/chocolate-hero.png' },
  { id: 'assorted-9', name: 'Assorted Gift Box', category: 'Gifting', description: '9 chocolates, wrapped ready to gift', price: 150, image: '/chocolate-detail.png' },
]

export const categories = ['All', 'Boxes', 'Bars', 'Dates', 'Gifting']
export const logoUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-08-17-23-01-04-31_1c337646f29875672b5a61192b9010f9-YebSwrnmwSXht37cixcxsCjrLHXNBw.jpg'

export function getProduct(id: string) { return products.find((product) => product.id === id) }
export function formatPrice(price: number) { return `₹${price}` }

export function readStoredIds(key: 'cocoa-bloom-likes' | 'cocoa-bloom-cart') {
  if (typeof window === 'undefined') return [] as string[]
  try { return JSON.parse(window.localStorage.getItem(key) || '[]') as string[] } catch { return [] }
}
