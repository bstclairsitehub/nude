'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import ProductCard from '@/components/ProductCard'
import PostCard from '@/components/PostCard'

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    )

    document.querySelectorAll('.scroll-reveal').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])
  const products = [
    { id: '1', title: 'The Slip Dress', price: 185, category: 'Dresses', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=800&fit=crop' },
    { id: '2', title: 'Linen Tee', price: 68, category: 'Tops', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop' },
    { id: '3', title: 'Wide Leg Trouser', price: 195, category: 'Bottoms', image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=800&fit=crop' },
  ]

  const posts = [
    {
      slug: 'quiet-dressing',
      title: 'Quiet Dressing',
      excerpt: 'The art of letting your clothes whisper instead of shout. A meditation on minimalism.',
      date: 'March 15, 2024',
      readTime: '5 min read',
    },
    {
      slug: 'on-simplicity',
      title: 'On Simplicity',
      excerpt: 'Why less really does mean more. A look at the philosophy behind our design.',
      date: 'March 8, 2024',
      readTime: '7 min read',
    },
    {
      slug: 'the-edit',
      title: 'The Edit',
      excerpt: 'Curating a wardrobe that works harder for you. Starting with the essentials.',
      date: 'March 1, 2024',
      readTime: '6 min read',
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 bg-gradient-to-br from-nude via-warm-white to-blush">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="fade-up fade-up-delay-1 text-6xl md:text-7xl font-bold text-ink mb-6 leading-tight">
              Wear Less.
              <br />
              Mean More.
            </h1>
            <p className="fade-up fade-up-delay-2 text-lg text-stone mb-8 leading-relaxed max-w-2xl">
              Thoughtfully designed essentials for the intentional dresser. Each piece crafted
              to last, to layer, and to matter.
            </p>
            <Link
              href="/shop"
              className="fade-up fade-up-delay-3 inline-block bg-ink text-warm-white px-8 py-4 font-semibold tracking-wide hover:bg-stone hover:-translate-y-1 transition-all duration-500"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="scroll-reveal text-3xl md:text-4xl font-bold text-ink mb-2">Featured</h2>
          <p className="text-stone mb-12">New arrivals and bestsellers</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {products.map((product) => (
              <div key={product.id} className="scroll-reveal">
                <ProductCard {...product} />
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/shop"
              className="inline-block text-ink font-semibold tracking-wide hover:text-stone transition border-b border-ink pb-1"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-20 px-6 bg-warm-white border-t border-nude">
        <div className="max-w-7xl mx-auto">
          <h2 className="scroll-reveal text-3xl md:text-4xl font-bold text-ink mb-2">Journal</h2>
          <p className="text-stone mb-12">Thoughts on fashion, simplicity, and intention</p>
          <div className="max-w-2xl">
            {posts.slice(0, 2).map((post) => (
              <div key={post.slug} className="scroll-reveal">
                <PostCard {...post} />
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Link
              href="/blog"
              className="inline-block text-ink font-semibold tracking-wide hover:text-stone transition border-b border-ink pb-1"
            >
              Read More Articles
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
