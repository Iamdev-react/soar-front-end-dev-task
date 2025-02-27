import { useSidebar } from "../context/SidebarContext";
import { useLocation, Link } from "react-router-dom"; 
import {CreditCard,Econometrics,EconomicInvestment,Glyph,Loan,SelectedDashboard,SelectedSettings,Service,User} from "../assets/Icons";

type NavItem = {
  name: string;
  icon: React.ReactNode;
  path?: string;
  subItems?: { name: string; path: string; pro?: boolean; new?: boolean }[];
};

const navItems: NavItem[] = [
  {
    icon: <SelectedDashboard />,
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
    icon: <SelectedSettings />,
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
          (isExpanded || isMobileOpen)
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
