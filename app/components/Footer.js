"use client";

export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white text-center py-4">
        <div className="container mx-auto">
          <p>&copy; {new Date().getFullYear()} Sharad's Portfolio. All rights reserved.</p>
        </div>
      </footer>
    );
  }
  