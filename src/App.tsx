import { HashRouter, Routes, Route, Navigate, Link, useParams, useNavigate } from "react-router-dom";
import { useState, useMemo } from "react";
import { Heart, ShoppingBag, ArrowLeft, Filter, X, Star, ChevronRight } from "lucide-react";
import { products, categories, colors, type Product } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Button } from "@/components/button";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
}

/* ─── Shared Components ─── */

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-neutral-200">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link to="/" className="text-xl font-bold tracking-widest uppercase text-neutral-900">
          Deyana Forever Roses
        </Link>
        <div className="flex items-center gap-6">
          <Link to="/shop" className="text-sm font-medium tracking-wide uppercase text-neutral-600 hover:text-neutral-900 transition-colors">
            Shop
          </Link>
          <Link to="/#about" className="text-sm font-medium tracking-wide uppercase text-neutral-600 hover:text-neutral-900 transition-colors hidden sm:block">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-neutral-950 text-white py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-lg font-bold tracking-widest uppercase mb-4">Deyana Forever Roses</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Handcrafted luxury rose shadow boxes and heart boxes. Each piece is made with love and attention to detail.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold tracking-widest uppercase mb-4 text-neutral-300">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-neutral-400 text-sm hover:text-white transition-colors">Home</Link>
              <Link to="/shop" className="text-neutral-400 text-sm hover:text-white transition-colors">Shop All</Link>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold tracking-widest uppercase mb-4 text-neutral-300">Contact</h4>
            <p className="text-neutral-400 text-sm">Custom orders welcome. Reach out for personalized pieces.</p>
          </div>
        </div>
        <div className="border-t border-neutral-800 mt-12 pt-8 text-center">
          <p className="text-neutral-500 text-xs tracking-wide">&copy; {new Date().getFullYear()} Deyana Forever Roses. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function ProductCard({ product }: { product: Product }) {
  const [imgError, setImgError] = useState(false);

  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="aspect-square bg-neutral-100 rounded-lg overflow-hidden relative">
        {imgError ? (
          <div className="w-full h-full flex flex-col items-center justify-center bg-neutral-100 text-neutral-400">
            <Heart className="w-12 h-12 mb-2 stroke-1" />
            <span className="text-xs tracking-wide uppercase">{product.color} Roses</span>
          </div>
        ) : (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={() => setImgError(true)}
          />
        )}
        {product.featured && (
          <div className="absolute top-3 left-3 bg-neutral-900 text-white text-[10px] tracking-widest uppercase px-3 py-1 rounded-full">
            Featured
          </div>
        )}
      </div>
      <div className="mt-4">
        <h3 className="text-sm font-semibold text-neutral-900 group-hover:text-neutral-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-neutral-500 mt-1">${product.price}</p>
      </div>
    </Link>
  );
}

/* ─── Home Page ─── */

function HomePage() {
  const featuredProducts = products.filter((p) => p.featured).slice(0, 4);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-16 relative">
        <div className="bg-neutral-950 text-white">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
            <div className="max-w-2xl">
              <p className="text-xs tracking-[0.3em] uppercase text-neutral-400 mb-4">Handcrafted with Love</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                Luxury Rose<br />Shadow Boxes
              </h1>
              <p className="mt-6 text-neutral-400 text-lg leading-relaxed max-w-lg">
                Timeless keepsakes crafted from satin roses. Personalized shadow boxes and heart boxes for weddings, anniversaries, and every moment worth remembering.
              </p>
              <div className="mt-8 flex gap-4">
                <Link to="/shop">
                  <Button className="bg-white text-neutral-900 hover:bg-neutral-200 px-8 py-3 text-sm tracking-wide uppercase font-semibold rounded-full">
                    Shop Collection
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-neutral-400 mb-2">Curated Selection</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">Featured Pieces</h2>
            </div>
            <Link to="/shop" className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors flex items-center gap-1">
              View All <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* About / Story */}
      <section id="about" className="py-20 bg-neutral-50">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs tracking-[0.3em] uppercase text-neutral-400 mb-4">Our Story</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-6">Crafted by Hand, Given with Heart</h2>
            <p className="text-neutral-500 leading-relaxed text-lg">
              Every piece is meticulously handcrafted using premium satin ribbon roses, carefully arranged and personalized to tell your unique story. From wedding keepsakes to Mother's Day gifts, each shadow box is a one-of-a-kind work of art.
            </p>
            <div className="grid grid-cols-3 gap-8 mt-12">
              {[
                { num: "100+", label: "Pieces Created" },
                { num: "4.9", label: "Avg Rating" },
                { num: "100%", label: "Handmade" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl sm:text-3xl font-bold text-neutral-900">{stat.num}</p>
                  <p className="text-xs tracking-wide uppercase text-neutral-500 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-4">Ready to Order?</h2>
          <p className="text-neutral-500 mb-8 max-w-md mx-auto">
            Browse our full collection or reach out for a custom piece made just for you.
          </p>
          <Link to="/shop">
            <Button className="bg-neutral-900 text-white hover:bg-neutral-800 px-8 py-3 text-sm tracking-wide uppercase font-semibold rounded-full">
              <ShoppingBag className="w-4 h-4 mr-2" />
              Shop Now
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

/* ─── Shop Page ─── */

function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedColor, setSelectedColor] = useState("All");
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const catMatch = selectedCategory === "all" || p.category === selectedCategory;
      const colorMatch = selectedColor === "All" || p.color === selectedColor;
      return catMatch && colorMatch;
    });
  }, [selectedCategory, selectedColor]);

  const hasActiveFilters = selectedCategory !== "all" || selectedColor !== "All";

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="pt-16">
        {/* Page Header */}
        <div className="bg-neutral-950 text-white py-16 sm:py-20">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-xs tracking-[0.3em] uppercase text-neutral-400 mb-2">Collection</p>
            <h1 className="text-3xl sm:text-4xl font-bold">Shop All</h1>
          </div>
        </div>

        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {/* Filter Bar */}
          <div className="flex items-center justify-between mb-8">
            <p className="text-sm text-neutral-500">
              {filteredProducts.length} product{filteredProducts.length !== 1 ? "s" : ""}
            </p>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 text-sm font-medium text-neutral-700 hover:text-neutral-900 transition-colors"
            >
              <Filter className="w-4 h-4" />
              Filters
              {hasActiveFilters && (
                <span className="w-2 h-2 rounded-full bg-neutral-900" />
              )}
            </button>
          </div>

          {/* Filter Panel */}
          {showFilters && (
            <div className="mb-8 p-6 bg-neutral-50 rounded-xl border border-neutral-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-900">Filters</h3>
                {hasActiveFilters && (
                  <button
                    onClick={() => {
                      setSelectedCategory("all");
                      setSelectedColor("All");
                    }}
                    className="text-xs text-neutral-500 hover:text-neutral-900 flex items-center gap-1"
                  >
                    <X className="w-3 h-3" /> Clear All
                  </button>
                )}
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-xs font-medium text-neutral-500 uppercase tracking-wide mb-2">Category</p>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((cat) => (
                      <button
                        key={cat.value}
                        onClick={() => setSelectedCategory(cat.value)}
                        className={cn(
                          "px-4 py-2 text-xs rounded-full border transition-colors",
                          selectedCategory === cat.value
                            ? "bg-neutral-900 text-white border-neutral-900"
                            : "bg-white text-neutral-600 border-neutral-300 hover:border-neutral-900"
                        )}
                      >
                        {cat.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs font-medium text-neutral-500 uppercase tracking-wide mb-2">Color</p>
                  <div className="flex flex-wrap gap-2">
                    {colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={cn(
                          "px-4 py-2 text-xs rounded-full border transition-colors",
                          selectedColor === color
                            ? "bg-neutral-900 text-white border-neutral-900"
                            : "bg-white text-neutral-600 border-neutral-300 hover:border-neutral-900"
                        )}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Product Grid */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <Heart className="w-12 h-12 text-neutral-300 mx-auto mb-4" />
              <p className="text-neutral-500">No products match your filters.</p>
              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setSelectedColor("All");
                }}
                className="mt-4 text-sm text-neutral-900 underline"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

/* ─── Product Detail Page ─── */

function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === id);
  const [imgError, setImgError] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="pt-32 text-center">
          <h1 className="text-2xl font-bold text-neutral-900 mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-sm text-neutral-600 underline">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="pt-16">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-900 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Image */}
            <div className="aspect-square bg-neutral-100 rounded-xl overflow-hidden">
              {imgError ? (
                <div className="w-full h-full flex flex-col items-center justify-center bg-neutral-100 text-neutral-400">
                  <Heart className="w-16 h-16 mb-3 stroke-1" />
                  <span className="text-sm tracking-wide uppercase">{product.color} Roses</span>
                </div>
              ) : (
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  onError={() => setImgError(true)}
                />
              )}
            </div>

            {/* Details */}
            <div className="flex flex-col justify-center">
              <p className="text-xs tracking-[0.3em] uppercase text-neutral-400 mb-2">
                {product.category === "shadow-box" ? "Shadow Box" : product.category === "heart-box" ? "Heart Box" : "Custom Piece"}
              </p>
              <h1 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-4">{product.name}</h1>
              <p className="text-2xl font-semibold text-neutral-900 mb-6">${product.price}</p>
              <p className="text-neutral-500 leading-relaxed mb-8">{product.description}</p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center">
                    <Star className="w-4 h-4 text-neutral-600" />
                  </div>
                  <span className="text-sm text-neutral-600">Handcrafted with premium satin ribbon</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center">
                    <Heart className="w-4 h-4 text-neutral-600" />
                  </div>
                  <span className="text-sm text-neutral-600">Personalization available</span>
                </div>
              </div>

              <Button className="bg-neutral-900 text-white hover:bg-neutral-800 px-8 py-3 text-sm tracking-wide uppercase font-semibold rounded-full w-full sm:w-auto">
                Inquire About This Piece
              </Button>

              <p className="text-xs text-neutral-400 mt-4">Color: {product.color}</p>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-20 pt-12 border-t border-neutral-200">
              <h2 className="text-xl font-bold text-neutral-900 mb-8">You May Also Like</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8">
                {relatedProducts.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
