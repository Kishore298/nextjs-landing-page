import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="bg-white">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center">
          <div className="mr-auto">
            <Image
              src="/navimg.png"
              alt="Logo"
              width={240}
              height={240} 
              className="ml-10"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
