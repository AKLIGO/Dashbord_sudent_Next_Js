import Image from "next/image";

const Navbar = () => {
    return (
        <div className="flex items-center justify-between p-4">
            {/* SEARCH BAR*/}
            <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
                <Image src="/search.png" alt="search" width={16} height={16} className="w-[200px] p-2 bg-transparent outline-none" />
                <input type="text" placeholder="Search" />
            </div>
            {/*ICONS AND USER*/}
            <div className="flex items-center gap-6 justify-end w-full">
                <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
                    <Image src="/message.png" alt="message" width={18} height={18} />

                </div>

                <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
                    <Image src="/announcement.png" alt="announcement" width={18} height={18} />
                    <div className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-full text-xs">1</div>
                </div>
                <div className="flex flex-col">
                    <span className="text-xs leading-3 font-medium">John Doe</span>
                    <span className="text-[10px] text-gray-500 font-light">admin</span>
                </div>
                <Image src="/avatar.png" alt="avatar" width={37} height={37} className="rounded-full" />

            </div>
        </div>
    )
}
export default Navbar;