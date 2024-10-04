import Link from 'next/link'; // Make sure to import Link from 'next/link'

export default function Navigation() {
  return (
    <div className="flex flex-row gap-8 pt-3 justify-center">
      <Link href="/" className="relative group text-gray-700 opacity-90 hover:text-primary">
        Home
        <span className="absolute left-0 right-0 bottom-0 h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
      </Link>
      <Link href="/" className="relative group text-gray-700 opacity-90 hover:text-primary">
        Best Seller
        <span className="absolute left-0 right-0 bottom-0 h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
      </Link>
      <Link href="/" className="relative group text-gray-700 opacity-90 hover:text-primary">
        Category
        <span className="absolute left-0 right-0 bottom-0 h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
      </Link>
      <Link href="/" className="relative group text-gray-700 opacity-90 hover:text-primary">
        Community
        <span className="absolute left-0 right-0 bottom-0 h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
      </Link>
      <Link href="/" className="relative group text-gray-700 opacity-90 hover:text-primary">
        Blog
        <span className="absolute left-0 right-0 bottom-0 h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
      </Link>
    </div>
  );
}
