'use client'

import { useState } from 'react'
import ProductCard from '@/components/ProductCard'

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const allProducts = [
    { id: '1', title: 'The Slip Dress', price: 185, category: 'Dresses', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=800&fit=crop' },
    { id: '2', title: 'Linen Tee', price: 68, category: 'Tops', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop' },
    { id: '3', title: 'Wide Leg Trouser', price: 195, category: 'Bottoms', image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=800&fit=crop' },
    { id: '4', title: 'Oversized Button Up', price: 165, category: 'Tops', image: 'https://images.unsplash.com/photo-1596399676397-726ea5b84b21?w=600&h=800&fit=crop' },
    { id: '5', title: 'Minimal Canvas Tote', price: 95, category: 'Accessories', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=800&fit=crop' },
    { id: '6', title: 'Linen Blazer', price: 245, category: 'Outerwear', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=800&fit=crop' },
    { id: '7', title: 'Bias Cut Slip Skirt', price: 155, category: 'Bottoms', image: 'https://images.unsplash.com/photo-1506629082632-6c0b57d01caf?w=600&h=800&fit=crop' },
    { id: '8', title: 'Silk Pillowcase Set', price: 78, category: 'Accessories', image: 'https://images.unsplash.com/photo-1598033129519-3b8ffc1c1c5f?w=600&h=800&fit=crop' },
    { id: '9', title: 'Cashmere Mock Neck', price: 215, category: 'Tops', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=800&fit=crop' },
  ]

  const categories = [
    'All',
    'Tops',
    'Bottoms',
    'Dresses',
    'Outerwear',
    'Accessories',
  ]

  const filteredProducts =
    selectedCategory === 'All'
      ? allProducts
      : allProducts.filter((product) => product.category === selectedCategory)

  return (
    <div className="pt-32 pb-20 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-ink mb-4">Shop</h1>
          <p className="text-stone text-lg">
            Essentials for the thoughtful wardrobe. {filteredProducts.length} items.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="mb-12 pb-8 border-b border-nude">
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`text-sm tracking-wide font-semibold transition ${
                  selectedCategory === category
                    ? 'text-ink border-b-2 border-ink pb-1'
                    : 'text-stone hover:text-ink pb-1'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-stone">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  )
}
