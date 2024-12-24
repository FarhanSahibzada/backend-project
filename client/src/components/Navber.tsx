import { Search, Video, } from 'lucide-react';
import { Dropdown } from './Dropdown';

export default function Navbar() {
  return (
    <nav className="bg-white z-50 ">
      <div className="flex items-center justify-between w-[100%] h-14 px-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Video className="text-red-600" size={20} />
            <span className="text-base sm:text-xl font-semibold">YouTube</span>
          </div>
        </div>
        <div className="flex-1 max-w-2xl mx-4 absolute top-16 left-1/2 transform -translate-x-1/2 sm:translate-x-0 sm:top-0 sm:static">
          <div className="flex">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-4 py-2 border border-gray-300 rounded-l-full focus:border-blue-500 focus:outline-none"
            />
            <button className="px-6 py-2 bg-gray-100 border border-l-0 border-gray-300 rounded-r-full hover:bg-gray-200">
              <Search size={20} />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Video size={24} />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Dropdown/>
          </button>
        </div>
      </div>
    </nav>

  );
}