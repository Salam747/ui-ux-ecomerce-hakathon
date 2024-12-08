import Link from "next/link";
import Image from "next/image";

const products = [
  {
    image: "/assets/style1.jpg",
    title: "Air Max 1 '86 OG G",
    subtitle: "University Red",
    isStyleCard: true,
  },
  {
    image: "/assets/product1.jpg",
    title: "Air Max 1 '86 OG G",
    subtitle: "University Red",
  },
  {
    image: "/assets/product2.jpg",
    title: "Air Max 1 '86 Original",
    subtitle: "Big Bubble",
  },
  {
    image: "/assets/product3.jpg",
    title: "Women&apos;s Air Max 1 '86 Original",
    subtitle: "Big Bubble",
  },
  {
    image: "/assets/style2.jpg",
    isStyleCard: true,
  },
  {
    image: "/assets/product4.jpg",
    title: "Air Max 1",
    subtitle: "Corduroy",
  },
];

export default function Home() {
  return (
    <div>
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto flex items-center justify-between py-4 px-4">
          {/* Left Section */}
          <div className="flex items-center gap-6">
            <Link href="/" passHref>
              <Image src="/assets/nike-logo.png" alt="Nike" width={24} height={24} className="cursor-pointer" />
            </Link>
            <Link href="/" passHref>
              <span className="hover:underline text-sm">Visit Nike.com</span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-6">
            <Link href="/feed" passHref>
              <span className="text-sm hover:underline">Feed</span>
            </Link>
            <Link href="/in-stock" passHref>
              <span className="text-sm hover:underline">In Stock</span>
            </Link>
            <Link href="/upcoming" passHref>
              <span className="text-sm hover:underline">Upcoming</span>
            </Link>
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-6">
            <Link href="/login" passHref>
              <span className="text-sm hover:underline">Join/Log In</span>
            </Link>
            <Link href="/help" passHref>
              <span className="text-sm hover:underline">Help</span>
            </Link>
            <div className="flex items-center text-sm hover:underline cursor-pointer">
              India
            </div>
          </div>
        </div>
      </header>

      {/* Product Grid */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="text-center">
              <div className="relative">
                <Image
                  src={product.image}
                  alt={product.title || "Style Card"}
                  width={300} // adjust width as per your requirement
                  height={300} // adjust height as per your requirement
                  className={`w-full rounded-lg shadow-md ${product.isStyleCard ? "h-64 object-cover" : ""}`}
                />
                {product.isStyleCard && (
                  <div className="absolute bottom-4 left-4 text-white text-xl font-bold">
                    <p>SNKRS</p>
                    <p>Style</p>
                  </div>
                )}
              </div>
              {!product.isStyleCard && (
                <>
                  <h3 className="mt-4 font-semibold text-lg">{product.title}</h3>
                  <p className="text-gray-500">{product.subtitle}</p>
                  <Link href={`/product/${index}`} passHref>
                    <span className="mt-4 inline-block px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 cursor-pointer">
                      Learn More
                    </span>
                  </Link>
                </>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
