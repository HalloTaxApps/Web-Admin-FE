import React, { useState } from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
/* import { AiOutlineUser,  } from "react-icons/ai"; */
import { MdFormatAlignJustify } from "react-icons/md";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const menus = [
        { name: "Dashboard", link: "/", icon: MdOutlineDashboard },
       /*  { name: "Users", link: "/tableusers", icon: AiOutlineUser }, */
        { name: "Table Educations", link: "/tableEducations", icon: TbReportAnalytics },
        { name: "Educations", link: "/formEducations", icon: MdFormatAlignJustify },
        { name: "Table News", link: "/tablenews", icon: TbReportAnalytics },
        { name: "News", link: "/formnews", icon: MdFormatAlignJustify },
        { name: "Table Pralogin", link: "/tablePralogin", icon: TbReportAnalytics },
        { name: "Pralogin", link: "/formPralogin", icon: MdFormatAlignJustify },
        { name: "Table Iklan", link: "/tableAdvertisements", icon: TbReportAnalytics },
        { name: "Iklan", link: "/formAdvertisements", icon: MdFormatAlignJustify },
        { name: "Sign Out", link: "/", icon: RiLogoutCircleRLine, margin: true},
    ];
    const [open, setOpen] = useState(true);
    return (
        <section className="flex gap-6">
            <div
                className={`bg-[#ffffff] h-screen ${open ? "w-56" : "w-16"
                    } duration-500 text-gray-500 px-4 drop-shadow-md`}
            >
                <div className="mt-4 flex flex-col gap-4 relative">
                    {menus?.map((menu, i) => (
                        <Link
                            to={menu?.link}
                            key={i}
                            className={` ${menu?.margin && "mt-5"
                                } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-[#FB980C] rounded-md`}
                        >
                            <div>{React.createElement(menu?.icon, { size: "20" })}</div>
                            <h2
                                style={{
                                    transitionDelay: `${i + 3}00ms`,
                                }}
                                className={`whitespace-pre duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"
                                    }`}
                            >
                                {menu?.name}
                            </h2>
                            <h2
                                className={`${open && "hidden"
                                    } absolute left-48 bg-[#E66099] whitespace-pre text-white rounded-md px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                            >
                                {menu?.name}
                            </h2>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Sidebar