import UserCard from "@/components/UserCard";

const admin = () => {
    return (
        <div className="p-4 flex gap-4 flex-col md:flex-row">
            {/*left side  */}
            <div className="w-full lg:w-2/3 ">
                {/*User Card  */}
                <div className="flex gap-4 justify-between">
                    <UserCard type="student" />
                    <UserCard type="teacher" />
                    <UserCard type="parent" />
                    <UserCard type="Staff" />

                </div>
            </div>
            {/*right side  */}
            <div className="w-full lg:w-1/3 ">r</div>
        </div>
    )
}
export default admin;