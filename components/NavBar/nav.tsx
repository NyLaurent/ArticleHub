import Link from 'next/link'; // Make sure to import Link from 'next/link'

export default function Navigation() {
  return (
    <div className="flex flex-row gap-8 pt-3 justify-center">
      <Link href="/" className="relative group text-gray-700 hover:text-blue-600">
        Home
        <span className="absolute left-0 right-0 bottom-0 h-1 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
      </Link>
      <Link href="/" className="relative group text-gray-700 hover:text-blue-600">
        Best Seller
        <span className="absolute left-0 right-0 bottom-0 h-1 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
      </Link>
      <Link href="/" className="relative group text-gray-700 hover:text-blue-600">
        Category
        <span className="absolute left-0 right-0 bottom-0 h-1 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
      </Link>
      <Link href="/" className="relative group text-gray-700 hover:text-blue-600">
        Community
        <span className="absolute left-0 right-0 bottom-0 h-1 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
      </Link>
      <Link href="/" className="relative group text-gray-700 hover:text-blue-600">
        Blog
        <span className="absolute left-0 right-0 bottom-0 h-1 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
      </Link>
    </div>
  );
}
