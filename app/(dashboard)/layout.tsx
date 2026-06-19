import React from "react";
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

            {/* LEFT */}
            <div className="w-[14%] md:w-[16%] lg:w-[16%] xl:w-[14%] p-4">
                <Link href="/" className="flex items-center lg:justify-start gap-2">
                    <Image src="/logo.png" alt="logo" width={33} height={33} className="w-auto h-auto" />
                    <span className="hidden lg:block font-bold">School Management</span>
                </Link>
                <Menu />
            </div>

            {/* RIGHT */}
            <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll flex flex-col">
                <Navbar />
                <div className="p-4 flex-1">
                    {children}
                </div>
            </div>

        </div>
    )
}