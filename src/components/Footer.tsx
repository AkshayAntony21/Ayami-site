import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6 text-center">
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
        <p className="text-base text-gray-400">
          Designing immersive realities. Engineered to impress.
        </p>

        {/* Legal Line */}
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Ayami Technologies. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
