import Link from "next/link";
import Image from "next/image";
import Menu from "@/components/Menu";
import Navebar from "@/components/Navebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen flex">
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%]  p-4">
        <Link href="/" className="flex items-center justify-center gap-2 lg:justify-start">
        <Image src="/logo.png" alt="Logo" width={32} height={32} />
        <span className="hidden lg:block">School</span>
        </Link>
        <Menu />
      </div>
      <div className="w-5/6 md:w-[92%] lg:w-[84%] xl:w-5/6 bg-[#F7F8FA] overflow-scroll flex flex-col">
      <Navebar />
      {children}
      </div>
    </div>
  );
}