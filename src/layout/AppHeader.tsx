import { useEffect, useRef } from "react";
import { useLocation } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { SettingsBlueIcon, BellIcon, CloseIcon, HamburgerMenu, Search } from "../assets/Icons";
import { RootState } from "../config/store";
import { toggleMobileSidebar, toggleSidebar } from "../redux/sidebar/sidebarSlice";

const AppHeader: React.FC = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  // Get sidebar state from Redux
  const { isMobileOpen } = useSelector((state: RootState) => state.sidebar);

  const getTitle = () => {
    switch (location.pathname) {
      case "/":
        return "Overview";
      case "/setting":
        return "Setting";
      default:
        return "";
    }
  };

  const handleToggle = () => {
    if (window.innerWidth >= 991) {
      dispatch(toggleSidebar());
    } else {
      dispatch(toggleMobileSidebar());
    }
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === "k") {
        event.preventDefault();
        inputRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <header className="sticky top-0 flex w-full bg-white border-gray-200 z-99999 border-b pb-4">
      <div className="flex flex-col items-center justify-between flex-grow lg:flex-row lg:px-8 px-2">
        <div className="flex items-center justify-between w-full gap-2 px-3 py-3 border-none border-gray-200 sm:gap-4 lg:justify-normal lg:border-b-0 lg:px-0 lg:py-4">
          <button
            className="items-center justify-center w-10 h-10 bg-transparent rounded-lg z-99999 lg:h-11 lg:w-11 lg:border lg:hidden"
            onClick={handleToggle}
            aria-label="Toggle Sidebar"
          >
            {isMobileOpen ? <CloseIcon /> : <HamburgerMenu />}
          </button>

          <h1 className="font-semibold text-[#343C6A]">{getTitle()}</h1>

          <div className="md:hidden">
            <img src="user.png" style={{ height: "35px" }} />
          </div>
        </div>
        <div className="block md:hidden w-[96%]">
          <form>
            <div className="relative">
              <span className="absolute -translate-y-1/2 pointer-events-none left-5 top-1/2">
                <Search />
              </span>
              <input
                ref={inputRef}
                type="text"
                placeholder="Search for something"
                className="dark:bg-dark-900 h-11 w-full rounded-[40px] border-none bg-[#F5F7FA] py-2.5 pl-13 pr-14 text-[15px] text-[#8BA3CB] shadow-theme-xs placeholder:text-[#8BA3CB] focus:border-brand-300 focus:outline-none xl:w-[255px]"
              />
            </div>
          </form>
        </div>
        <div className="items-center justify-between w-full gap-4 px-5 py-4 lg:flex shadow-theme-md lg:justify-end lg:px-0 lg:shadow-none">
          <div className="hidden md:block">
            <form>
              <div className="relative">
                <span className="absolute -translate-y-1/2 pointer-events-none left-5 top-1/2">
                  <Search />
                </span>
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Search for something"
                  className="dark:bg-dark-900 h-11 w-full rounded-[40px] border-none bg-[#F5F7FA] py-2.5 pl-13 pr-5 text-[15px] text-[#8BA3CB] shadow-theme-xs placeholder:text-[#8BA3CB] focus:border-brand-300 focus:outline-none xl:w-[255px]"
                />
              </div>
            </form>
          </div>
          <div className="flex items-center gap-4 2xsm:gap-3">
            <button className="relative flex items-center justify-center transition-colors bg-[#F5F7FA] border-none h-[50px] w-[50px] rounded-full md:flex hidden">
              <SettingsBlueIcon style={{ width: "25px", height: "25px" }} />
            </button>

            <button className="relative flex items-center justify-center transition-colors bg-[#F5F7FA] border-none h-[50px] w-[50px] rounded-full md:flex hidden">
              <BellIcon style={{ width: "25px", height: "25px" }} />
            </button>

            <div className="md:inline-block hidden">
              <img src="user.png" className="rounded-full h-[60px] w-[60px]" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
