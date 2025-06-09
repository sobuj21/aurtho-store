import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* Header and Navigation Bar */}
 {/* Header and Navigation Bar */}
<header className="border-b border-gray-200">
  <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
    <Link href="/" className="text-2xl font-bold text-gray-800">
      Aurtho
    </Link>
    <div className="space-x-6">
      {/* "Home" has been replaced with "Offers" */}
      <Link href="/offers" className="text-gray-600 hover:text-gray-900">Offers</Link>
      <Link href="/products" className="text-gray-600 hover:text-gray-900">Products</Link>
      <Link href="/about" className="text-gray-600 hover:text-gray-900">About</Link>
      <Link href="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
    </div>
  </nav>
</header>

      <main className="container mx-auto px-6 py-16">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-4">Contact Us</h1>
        {/* CORRECTED LINE BELOW */}
        <p className="text-lg text-gray-600 text-center mb-12">We&apos;d love to hear from you! Please fill out the form below.</p>

        <div className="max-w-xl mx-auto">
          {/* NOTE: This form is for visual purposes. You'll need a service like Formspree to make it work. */}
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 text-gray-900"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 text-gray-900"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 text-gray-900"
                placeholder="Your message..."
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2025 Aurtho. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
