export default function Pricing() {
  return (
    <div className="flex flex-col items-center p-10 bg-gray-900 text-white min-h-screen">
      <h2 className="text-4xl font-extrabold mb-8 text-indigo-400">Choose Your Plan</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl">
        
        {/* Free Plan */}
        <div className="bg-gray-800 p-8 rounded-2xl shadow-md text-center border border-gray-700">
          <h3 className="text-2xl font-semibold mb-4 text-indigo-300">Free Plan</h3>
          <p className="text-gray-400 mb-4">Limited features at no cost.</p>
          <p className="text-5xl font-bold mb-6 text-indigo-400">$0<span className="text-lg">/month</span></p>
          <ul className="text-gray-300 mb-6 space-y-2">
            <li>✔ Basic Features</li>
            <li>✔ Limited Access</li>
            <li>✖ Premium Support</li>
          </ul>
          <button className="bg-gray-600 hover:bg-gray-500 text-white px-6 py-2 rounded-lg font-semibold">Get Free</button>
        </div>
        
        {/* Monthly Subscription */}
        <div className="bg-gray-800 p-8 rounded-2xl shadow-md text-center border-2 border-indigo-500">
          <h3 className="text-2xl font-semibold mb-4 text-indigo-300">Premium Monthly</h3>
          <p className="text-gray-400 mb-4">Unlock all features with full access.</p>
          <p className="text-5xl font-bold mb-6 text-indigo-400">$19<span className="text-lg">/month</span></p>
          <ul className="text-gray-300 mb-6 space-y-2">
            <li>✔ All Features</li>
            <li>✔ Unlimited Access</li>
            <li>✔ Premium Support</li>
          </ul>
          <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold">Subscribe</button>
        </div>
        
        {/* Yearly Subscription */}
        <div className="bg-gray-800 p-8 rounded-2xl shadow-md text-center border border-indigo-700">
          <h3 className="text-2xl font-semibold mb-4 text-indigo-300">Premium Yearly</h3>
          <p className="text-gray-400 mb-4">Best value for long-term users.</p>
          <p className="text-5xl font-bold mb-6 text-indigo-400">$199<span className="text-lg">/year</span></p>
          <ul className="text-gray-300 mb-6 space-y-2">
            <li>✔ All Features</li>
            <li>✔ Unlimited Access</li>
            <li>✔ Premium Support</li>
            <li>✔ Exclusive Discounts</li>
          </ul>
          <button className="bg-indigo-700 hover:bg-indigo-800 text-white px-6 py-2 rounded-lg font-semibold">Subscribe</button>
        </div>
      </div>
    </div>
  );
}
