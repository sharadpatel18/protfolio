"use client";
export default function Header() {
    return (
      <header className="bg-gray-900 text-white p-4 sticky top-0 z-50 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Sharad's Portfolio</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#about" className="hover:text-gray-300">About</a></li>
              <li><a href="#projects" className="hover:text-gray-300">Projects</a></li>
              <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
  