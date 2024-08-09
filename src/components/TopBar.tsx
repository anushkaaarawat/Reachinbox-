import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import ThemeToggle from "./ThemeToggle";

function TopBar() {
  return (
    <div className="h-16 w-screen bg-white  dark:bg-gray-800 fixed px-14 text-[#5B5F66] dark:text-white top-0 flex justify-between items-center border-b-2 dark:border-[#343A40] border-[#E0E0E0]">
      <div className="text-xl font-medium">Onebox</div>

      <div className="pr-20 flex items-center">
        <ThemeToggle />
        Tim's Workspace <MdOutlineKeyboardArrowDown className="text-3xl ml-3" />
      </div>
    </div>
  );
}

export default TopBar;
