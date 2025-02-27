import { RootState } from '@/store/Store';
import { Home, Clock, PlaySquare, Menu, User } from 'lucide-react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink} from 'react-router-dom';



export default function Sidebar() {
    const [showBar, setShowBar] = useState(false)
    const loginUser = useSelector((state : RootState)=> state.auth.userLogin)
    const menuItems = [
        { icon: Home, label: 'Home', page: "Home" },
        { icon: PlaySquare, label: 'Subscriptions', page: "Subcription-videos" },
        { icon: Clock, label: 'History', page: 'watch-history' },
        { icon: User, label: 'You', page: `my-profile/${loginUser?.username}` },
    ];
    return (
        <div>
            <div className='h-14  bg-white ps-4 hidden sm:inline-block pt-2' onClick={() => setShowBar(!showBar)}>
                <button className="p-2  hover:bg-gray-100 rounded-full" >
                    <Menu size={24} />
                </button>
            </div>
            <aside className={`${!showBar ? "sm:w-52 " : "sm:w-0 sm:ms-20"} w-[100%]   rounded-lg bg-white duration-200  overflow-y-auto overflow-hidden `}>
                <div className="py-2 flex sm:block"  >
                {menuItems.map((item) => (
                        <NavLink
                            key={item.label}
                            to={`/${item.page}`}
                            className={({ isActive }) => `w-full flex items-center rounded-full gap-6 px-6 py-3 ${isActive ? 'bg-red-500 text-white' : 'hover:bg-gray-100'}`}
                        >
                            <item.icon size={20} />
                            <span>{item.label}</span>
                        </NavLink>
                    ))}
                </div>
            </aside>
        </div>
    );
}