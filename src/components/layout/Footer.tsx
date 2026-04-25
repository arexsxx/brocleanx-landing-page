import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="w-full border-t border-[#0a2e22] bg-[#001F16] px-6 pb-8 pt-14 text-sm text-gray-300 sm:px-8 md:px-12 md:pt-16">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-4 lg:gap-12">
          {/* Kolom 1: Logo & Deskripsi */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 mb-2">
              <Image
                src="/assets/logo2.png"
                alt="Brocleanx logo"
                width={56}
                height={56}
                className="h-12 w-auto object-contain"
              />
              <span className="text-white font-black tracking-widest text-xl">
                BROCLEANX
              </span>
            </div>
            <p className="text-xs leading-relaxed text-gray-400 max-w-xs">
              Kami mencuci sepatu kesayangan Anda menjadi bersih seperti baru
              dengan proses yang praktis dan profesional.
            </p>
          </div>

          {/* Kolom 2: Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold mb-2 tracking-wider">
              QUICK LINKS
            </h4>
            <Link
              href="#service"
              className="hover:text-white transition-colors border-b border-gray-800 pb-2"
            >
              Service
            </Link>
            <Link
              href="#about"
              className="hover:text-white transition-colors border-b border-gray-800 pb-2"
            >
              About
            </Link>
            <Link
              href="#blog"
              className="hover:text-white transition-colors border-b border-gray-800 pb-2"
            >
              Blog
            </Link>
            <Link
              href="/how-to-order"
              className="hover:text-white transition-colors border-b border-gray-800 pb-2"
            >
              How to order ?
            </Link>
          </div>

          {/* Kolom 3: Contact Us */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold mb-2 tracking-wider">
              CONTACT US
            </h4>
            {/* <div className="border-b border-gray-800 pb-2">
              Find us on maps ( Brocleanx )
            </div> */}
            <div className="border-b border-gray-800 pb-2">
              Email : brocleanx@gmail.com
            </div>
            <div className="border-b border-gray-800 pb-2">
              Instagram : @brocleanx
            </div>
            <div className="border-b border-gray-800 pb-2">
              Whatsapp : +62 896 1372 9647
            </div>
          </div>

          {/* Kolom 4: Resources */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold mb-2 tracking-wider">
              RESOURCES
            </h4>
            <Link
              href="#"
              className="hover:text-white transition-colors border-b border-gray-800 pb-2"
            >
              Support Area
            </Link>
            <Link
              href="#"
              className="hover:text-white transition-colors border-b border-gray-800 pb-2"
            >
              Documentations
            </Link>
            <Link
              href="/how-to-order"
              className="hover:text-white transition-colors border-b border-gray-800 pb-2"
            >
              How to Buy
            </Link>
            <Link
              href=""
              className="hover:text-white transition-colors border-b border-gray-800 pb-2"
            >
              Terms Of Policy
            </Link>
          </div>
        </div>

        {/* media sosial */}
        <div className="flex flex-wrap gap-3 border-t border-[#0a2e22] pt-8">
          <Link
            href="https://instagram.com/brocleanx"
            aria-label="Instagram"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-white/10 text-white transition-colors hover:bg-white hover:text-[#001F16]"
          >
            <FaInstagram className="h-4 w-4" />
          </Link>
          <Link
            href=""
            aria-label="Facebook"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-white/10 text-white transition-colors hover:bg-white hover:text-[#001F16]"
          >
            <FaFacebookF className="h-4 w-4" />
          </Link>
          {/* <Link
            href="https://youtube.com"
            aria-label="YouTube"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-white/10 text-white transition-colors hover:bg-white hover:text-[#001F16]"
          >
            <FaYoutube className="h-4 w-4" />
          </Link> */}
          <Link
            href=""
            aria-label="X (Twitter)"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-white/10 text-white transition-colors hover:bg-white hover:text-[#001F16]"
          >
            <FaXTwitter className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
