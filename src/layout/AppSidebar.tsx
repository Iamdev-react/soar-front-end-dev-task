import { useSidebar } from "../context/SidebarContext";
import { useLocation, Link } from "react-router-dom"; // Use `react-router-dom` for location tracking
import {
  CreditCard,
  Econometrics,
  EconomicInvestment,
  Glyph,
  Loan,
  Service,
  Settings,
  User,
} from "../assets/Icons";

type NavItem = {
  name: string;
  icon: React.ReactNode;
  path?: string;
  subItems?: { name: string; path: string; pro?: boolean; new?: boolean }[];
};

const navItems: NavItem[] = [
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4"
      >
        <path
          d="M24.3255 10.8738C24.3249 10.8732 24.3243 10.8727 24.3238 10.8721L14.1257 0.674438C13.6911 0.239563 13.1131 0 12.4984 0C11.8837 0 11.3057 0.239372 10.8709 0.674248L0.678172 10.8667C0.674739 10.8702 0.671305 10.8738 0.667872 10.8772C-0.224767 11.775 -0.223241 13.2317 0.672259 14.1272C1.08139 14.5365 1.62174 14.7736 2.19947 14.7984C2.22293 14.8006 2.24658 14.8018 2.27043 14.8018H2.67688V22.3066C2.67688 23.7917 3.88519 25 5.37063 25H9.36042C9.76478 25 10.0928 24.6721 10.0928 24.2676V18.3838C10.0928 17.7061 10.6441 17.1549 11.3217 17.1549H13.675C14.3527 17.1549 14.9039 17.7061 14.9039 18.3838V24.2676C14.9039 24.6721 15.2318 25 15.6364 25H19.6262C21.1116 25 22.3199 23.7917 22.3199 22.3066V14.8018H22.6968C23.3113 14.8018 23.8893 14.5624 24.3243 14.1275C25.2208 13.2305 25.2212 11.7714 24.3255 10.8738Z"
          fill="currentColor"
        />
      </svg>
    ),
    name: "Dashboard",
    path: "/",
  },
  { icon: <Glyph />, name: "Transactions" },
  { icon: <User />, name: "Accounts" },
  { name: "Investments", icon: <EconomicInvestment /> },
  { name: "Credit Cards", icon: <CreditCard /> },
  { name: "Loan", icon: <Loan /> },
  { name: "Services", icon: <Service /> },
  { name: "My Privileges", icon: <Econometrics /> },
  {
    name: "Setting",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4"
      >
        <g clip-path="url(#clip0_14_1285)">
          <path
            d="M22.6985 9.41406H22.1678C21.9954 8.87451 21.7778 8.35039 21.5172 7.84683L21.8931 7.47095C22.8045 6.56055 22.7801 5.10156 21.8934 4.21582L20.7845 3.10693C19.8993 2.22056 18.44 2.19487 17.5293 3.10659L17.1532 3.48276C16.6496 3.22222 16.1254 3.00464 15.5859 2.83223V2.30142C15.5859 1.03242 14.5535 0 13.2845 0H11.7155C10.4465 0 9.41406 1.03242 9.41406 2.30142V2.83223C8.87456 3.00459 8.35039 3.22217 7.84683 3.48276L7.471 3.10693C6.56216 2.19702 5.10293 2.21836 4.21592 3.10664L3.10688 4.21558C2.22056 5.10093 2.19492 6.56001 3.10659 7.4707L3.48276 7.84687C3.22217 8.35044 3.00464 8.87451 2.83223 9.41411H2.30146C1.03247 9.41406 0 10.4465 0 11.7155V13.2845C0 14.5535 1.03247 15.5859 2.30146 15.5859H2.83223C3.00464 16.1255 3.22217 16.6496 3.48276 17.1532L3.10688 17.5291C2.19551 18.4395 2.21992 19.8984 3.10659 20.7842L4.21553 21.8931C5.10073 22.7794 6.56001 22.8051 7.47065 21.8934L7.84683 21.5172C8.35039 21.7778 8.87456 21.9954 9.41406 22.1678V22.6986C9.41406 23.9676 10.4465 25 11.7155 25H13.2845C14.5535 25 15.586 23.9676 15.586 22.6986V22.1678C16.1255 21.9954 16.6497 21.7778 17.1532 21.5172L17.5291 21.8931C18.4379 22.803 19.8971 22.7816 20.7841 21.8934L21.8932 20.7844C22.7795 19.899 22.8051 18.4399 21.8935 17.5292L21.5173 17.1531C21.7779 16.6495 21.9954 16.1254 22.1678 15.5858H22.6986C23.9676 15.5858 25 14.5534 25 13.2844V11.7154C25 10.4465 23.9675 9.41406 22.6985 9.41406ZM12.5 17.9395C9.50064 17.9395 7.06055 15.4993 7.06055 12.5C7.06055 9.50068 9.50064 7.06055 12.5 7.06055C15.4994 7.06055 17.9395 9.50068 17.9395 12.5C17.9395 15.4993 15.4994 17.9395 12.5 17.9395Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="clip0_14_1285">
            <rect width="25" height="25" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    path: "/setting",
  },
];

const AppSidebar: React.FC = () => {
  const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar();
  const location = useLocation();

  const renderMenuItems = (items: NavItem[]) => (
    <ul className="flex flex-col gap-6">
      {items.map((nav) => {
        const isActive = location.pathname === nav.path;

        return (
          <li
            key={nav.name}
            className="flex items-center relative pl-5 after:absolute after:left-0 after:content-[] after:border after:border-l-3 after:h-10 after:rounded-tr-md after:rounded-br-md"
          >
            {nav.path ? (
              <Link to={nav.path} className="flex items-center">
                <span
                  className={`flex items-center ${
                    isActive ? "text-black" : "text-[#B1B1B1]"
                  }`}
                >
                  {nav.icon}
                </span>
                <span
                  className={`ml-6 font-medium text-lg ${
                    isActive ? "text-black" : "text-[#B1B1B1]"
                  }`}
                >
                  {nav.name}
                </span>
              </Link>
            ) : (
              <>
                <span className="text-[#B1B1B1] fill-[#B1B1B1]">
                  {nav.icon}
                </span>
                <span className="ml-6 text-[#B1B1B1] font-medium text-lg">
                  {nav.name}
                </span>
              </>
            )}
          </li>
        );
      })}
    </ul>
  );

  return (
    <aside
      className={`fixed mt-16 flex flex-col lg:mt-0 top-0 px-0 left-0 bg-white dark:bg-gray-900 dark:border-gray-800 text-gray-900 h-screen transition-all duration-300 ease-in-out z-50 border-r border-gray-200 
        ${
          isExpanded || isMobileOpen
            ? "w-[240px]"
            : isHovered
            ? "w-[240px]"
            : "w-[90px]"
        }
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0`}
      onMouseEnter={() => !isExpanded && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="py-8 px-6 lg:flex hidden">
        <img src="/logo.svg" className="dark:hidden" />
      </div>
      <div className="flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar pt-20 lg:pt-0">
        <nav className="mb-6">
          <div className="flex flex-col gap-4">
            <div>{renderMenuItems(navItems)}</div>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default AppSidebar;
