import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6 text-center">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Logo */}
        <div className="flex justify-center">
          <Image
            src="/logo4.png"
            alt="Ayami Logo"
            width={64}
            height={64}
            className="object-contain"
            priority
          />
        </div>

        {/* Company Statement */}
        <p className="text-sm sm:text-base text-gray-400 max-w-lg mx-auto leading-relaxed">
          Elevating architecture with immersive technology — visualized to impress, engineered to sell.
        </p>

        {/* Legal Line */}
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} Ayami Technologies. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
