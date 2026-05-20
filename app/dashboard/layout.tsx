import Link from "next/link";
import Image from "next/image";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="h-screen flex">

            <div className="w-[14%] md:w[16%] lg:w-[16%] xl:w-[14%] ">
                <Link href="/" className="flex items-center lg:justify-start gap-2">
                    <Image src="/logo.png" alt="logo" width={33} height={33} />
                    <span className="hidden lg:block">School Management System</span>
                </Link>
                <Menu />
            </div>

            <div className="w-[86%] md:[92%] lg-w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll">
                <Navbar />
                <div>
                    {children}
                </div>
            </div>

        </div>
    )
}