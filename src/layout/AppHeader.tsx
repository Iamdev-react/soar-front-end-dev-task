import { useEffect, useRef } from "react";
import { useLocation } from "react-router";
import { useSidebar } from "../context/SidebarContext";
import { SettingsBlueIcon, BellIcon } from "../assets/Icons";
import { AppDispatch, RootState } from "../config/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "../redux/user/userAPI";

const AppHeader: React.FC = () => {
  const { isMobileOpen, toggleSidebar, toggleMobileSidebar } = useSidebar();
  const dispatch = useDispatch<AppDispatch>();
  const { userData } = useSelector((state: RootState) => state.user);
  console.log(userData, "userData");

  const location = useLocation();
  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

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
      toggleSidebar();
    } else {
      toggleMobileSidebar();
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
        <div className="flex items-center justify-between w-full gap-2 px-3 py-3 border-none  border-gray-200 sm:gap-4 lg:justify-normal lg:border-b-0 lg:px-0 lg:py-4">
          <button
            className="items-center justify-center w-10 h-10 bg-transparent rounded-lg z-99999 lg:h-11 lg:w-11 lg:border lg:hidden"
            onClick={handleToggle}
            aria-label="Toggle Sidebar"
          >
            {isMobileOpen ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#343C6A"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.21967 7.28131C5.92678 6.98841 5.92678 6.51354 6.21967 6.22065C6.51256 5.92775 6.98744 5.92775 7.28033 6.22065L11.999 10.9393L16.7176 6.22078C17.0105 5.92789 17.4854 5.92788 17.7782 6.22078C18.0711 6.51367 18.0711 6.98855 17.7782 7.28144L13.0597 12L17.7782 16.7186C18.0711 17.0115 18.0711 17.4863 17.7782 17.7792C17.4854 18.0721 17.0105 18.0721 16.7176 17.7792L11.999 13.0607L7.28033 17.7794C6.98744 18.0722 6.51256 18.0722 6.21967 17.7794C5.92678 17.4865 5.92678 17.0116 6.21967 16.7187L10.9384 12L6.21967 7.28131Z"
                  fill="currentColor"
                />
              </svg>
            ) : (
              <svg
                width="16"
                height="12"
                viewBox="0 0 16 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#343C6A"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.583252 1C0.583252 0.585788 0.919038 0.25 1.33325 0.25H14.6666C15.0808 0.25 15.4166 0.585786 15.4166 1C15.4166 1.41421 15.0808 1.75 14.6666 1.75L1.33325 1.75C0.919038 1.75 0.583252 1.41422 0.583252 1ZM0.583252 11C0.583252 10.5858 0.919038 10.25 1.33325 10.25L14.6666 10.25C15.0808 10.25 15.4166 10.5858 15.4166 11C15.4166 11.4142 15.0808 11.75 14.6666 11.75L1.33325 11.75C0.919038 11.75 0.583252 11.4142 0.583252 11ZM1.33325 5.25C0.919038 5.25 0.583252 5.58579 0.583252 6C0.583252 6.41421 0.919038 6.75 1.33325 6.75L7.99992 6.75C8.41413 6.75 8.74992 6.41421 8.74992 6C8.74992 5.58579 8.41413 5.25 7.99992 5.25L1.33325 5.25Z"
                  fill="currentColor"
                />
              </svg>
            )}
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
                <svg
                  className="fill-[#718EBF]"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.04175 9.37363C3.04175 5.87693 5.87711 3.04199 9.37508 3.04199C12.8731 3.04199 15.7084 5.87693 15.7084 9.37363C15.7084 12.8703 12.8731 15.7053 9.37508 15.7053C5.87711 15.7053 3.04175 12.8703 3.04175 9.37363ZM9.37508 1.54199C5.04902 1.54199 1.54175 5.04817 1.54175 9.37363C1.54175 13.6991 5.04902 17.2053 9.37508 17.2053C11.2674 17.2053 13.003 16.5344 14.357 15.4176L17.177 18.238C17.4699 18.5309 17.9448 18.5309 18.2377 18.238C18.5306 17.9451 18.5306 17.4703 18.2377 17.1774L15.418 14.3573C16.5365 13.0033 17.2084 11.2669 17.2084 9.37363C17.2084 5.04817 13.7011 1.54199 9.37508 1.54199Z"
                    fill=""
                  />
                </svg>
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
                  <svg
                    className="fill-[#718EBF]"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.04175 9.37363C3.04175 5.87693 5.87711 3.04199 9.37508 3.04199C12.8731 3.04199 15.7084 5.87693 15.7084 9.37363C15.7084 12.8703 12.8731 15.7053 9.37508 15.7053C5.87711 15.7053 3.04175 12.8703 3.04175 9.37363ZM9.37508 1.54199C5.04902 1.54199 1.54175 5.04817 1.54175 9.37363C1.54175 13.6991 5.04902 17.2053 9.37508 17.2053C11.2674 17.2053 13.003 16.5344 14.357 15.4176L17.177 18.238C17.4699 18.5309 17.9448 18.5309 18.2377 18.238C18.5306 17.9451 18.5306 17.4703 18.2377 17.1774L15.418 14.3573C16.5365 13.0033 17.2084 11.2669 17.2084 9.37363C17.2084 5.04817 13.7011 1.54199 9.37508 1.54199Z"
                      fill=""
                    />
                  </svg>
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
            <button className="relative flex items-center justify-center transition-colors bg-[#F5F7FA] border-none h-[50px] w-[50px] rounded-full">
              <SettingsBlueIcon style={{ width: "25px", height: "25px" }} />
            </button>

            <button className="relative flex items-center justify-center transition-colors bg-[#F5F7FA] border-none h-[50px] w-[50px] rounded-full">
              <BellIcon style={{ width: "25px", height: "25px" }} />
            </button>

            <div className="md:inline-block hidden">
              <img
                src={userData?.avatar}
                className="rounded-full h-[60px] w-[60px]"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
