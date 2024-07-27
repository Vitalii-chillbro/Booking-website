import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <Image
        src={logo}
        alt="Serenity Suites logo"
        height={60}
        quality={100}
        width={60}
      />
      <span className="text-xl font-semibold text-primary-100">
        Serenity Suites
      </span>
    </Link>
  );
}

export default Logo;
