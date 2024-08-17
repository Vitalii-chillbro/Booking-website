import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 z-10 sm:gap-4">
      <Image
        src={logo}
        alt="Serenity Suites logo"
        height={60}
        quality={100}
        width={60}
      />
      <span className="text-sm font-semibold text-primary-100 sm:text-xl">
        Serenity Suites
      </span>
    </Link>
  );
}

export default Logo;
