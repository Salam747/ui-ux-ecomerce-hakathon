import Head from 'next/head';
import Image from 'next/image';
import men from '../../../public/assets/menshow.png'

export default function Cart() {
  return (
    <>
      <Head>
        <title>Cart | Nike</title>
      </Head>
      <div className="bg-gray-100 min-h-screen px-4 py-6">
        <div className="max-w-6xl mx-auto">
          {/* Free Delivery Banner */}
          <div className="bg-gray-200 p-4 text-sm text-center mb-6">
            Free Delivery applies to orders of ₹ 14,000.00 or more.{' '}
            <a href="#" className="underline">
              View details
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Bag Section */}
            <div className="lg:col-span-2 bg-white p-6 rounded shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Bag</h2>

              {/* Item 1 */}
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-24 h-24 bg-gray-200 rounded">
                  {/* Placeholder for product image */}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">
                    Nike Dri-FIT ADV TechKnit Ultra
                  </h3>
                  <p className="text-gray-600">Men&apos;s Short-Sleeve Running Top</p> {/* Escaped apostrophe */}
                  <p className="text-gray-600">Ashen Slate/Cobalt Bliss</p>
                  <p className="text-gray-600">Size: L</p>
                  <p className="text-gray-600">Quantity: 1</p>
                </div>
                <div>
                  <p className="text-lg font-semibold">₹ 3,895.00</p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-start space-x-4">
                <div className="w-24 h-24 bg-gray-200 rounded">
                  {/* Placeholder for product image */}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">Nike Air Max 97 SE</h3>
                  <p className="text-gray-600">Men&apos;s Shoes</p> {/* Escaped apostrophe */}
                  <p className="text-gray-600">
                    Flat Pewter/Light Bone/Black/White
                  </p>
                  <p className="text-gray-600">Size: 8</p>
                  <p className="text-gray-600">Quantity: 1</p>
                </div>
                <div>
                  <p className="text-lg font-semibold">₹ 16,995.00</p>
                </div>
              </div>
            </div>

            {/* Summary Section */}
            <div className="bg-white p-6 rounded shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Summary</h2>
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-semibold">₹ 20,890.00</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-600">Estimated Delivery & Handling</span>
                <span className="font-semibold">Free</span>
              </div>
              <div className="flex justify-between items-center border-t pt-4">
                <span className="text-lg font-semibold">Total</span>
                <span className="text-lg font-semibold">₹ 20,890.00</span>
              </div>
              <button className="w-full bg-black text-white py-2 mt-6 rounded hover:bg-gray-800">
                Member Checkout
              </button>
            </div>
          </div>

          {/* Favourites Section */}
          <div className="bg-white p-6 rounded shadow-sm mt-6">
            <h2 className="text-xl font-semibold mb-4">Favourites</h2>
            <p className="text-gray-600">There are no items saved to your favourites.</p>
          </div>

          {/* You Might Also Like Section */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-4">You Might Also Like</h2>
            <div className="bg-white p-6 rounded shadow-sm flex items-start space-x-4">
              <div className="w-24 h-24 bg-gray-200 rounded">
                {/* Placeholder for product image */}
                <Image src={men} alt='men' height={400} width={400}></Image>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Air Jordan 1 Mid SE Craft</h3>
                <p className="text-gray-600">Men&apos;s Shoes</p> {/* Escaped apostrophe */}
                <p className="font-semibold">₹ 12,295.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
