import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  FolderOpen,
  Scan,
  CalendarClock,
  Bell,
  Settings,
  HelpCircle,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard", group: "main" },
  { icon: FolderOpen, label: "Projects", href: "#", group: "main" },
  { icon: Scan, label: "Scans", href: "/dashboard", group: "main" },
  { icon: CalendarClock, label: "Schedule", href: "#", group: "main" },
  { icon: Bell, label: "Notifications", href: "#", group: "secondary" },
  { icon: Settings, label: "Settings", href: "#", group: "secondary" },
  { icon: HelpCircle, label: "Support", href: "#", group: "secondary" },
];

interface AppSidebarProps {
  activePath?: string;
}

const AppSidebar = ({ activePath }: AppSidebarProps) => {
  const location = useLocation();
  const currentPath = activePath || location.pathname;
  const [mobileOpen, setMobileOpen] = useState(false);

  const mainItems = navItems.filter((i) => i.group === "main");
  const secondaryItems = navItems.filter((i) => i.group === "secondary");

  const isActive = (item: typeof navItems[0]) => {
    if (item.label === "Dashboard" && currentPath === "/dashboard") return true;
    if (item.label === "Scans" && currentPath.startsWith("/scan/")) return true;
    return false;
  };

  const sidebarContent = (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="flex items-center gap-2 px-5 py-5">
        <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center">
          <span className="text-primary-foreground text-xs font-bold">●</span>
        </div>
        <span className="text-lg font-bold text-foreground">aps</span>
      </div>

      {/* Main Nav */}
      <nav className="flex-1 px-3 space-y-1 mt-2">
        {mainItems.map((item) => {
          const active = isActive(item);
          return (
            <Link
              key={item.label}
              to={item.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                active
                  ? "bg-primary text-primary-foreground"
                  : "text-sidebar-foreground hover:bg-accent hover:text-accent-foreground"
              )}
            >
              <item.icon className="w-5 h-5" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Secondary Nav */}
      <nav className="px-3 space-y-1 mb-4">
        {secondaryItems.map((item) => (
          <Link
            key={item.label}
            to={item.href}
            onClick={() => setMobileOpen(false)}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-sidebar-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <item.icon className="w-5 h-5" />
            {item.label}
          </Link>
        ))}
      </nav>

      {/* User Profile */}
      <div className="border-t border-sidebar-border px-3 py-4">
        <div className="flex items-center gap-3 px-2">
          <div className="w-9 h-9 rounded-full bg-severity-medium/20 flex items-center justify-center">
            <span className="text-sm font-semibold text-severity-medium">A</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground truncate">admin@edu.com</p>
            <p className="text-xs text-muted-foreground">Security Lead</p>
          </div>
          <ChevronRight className="w-4 h-4 text-muted-foreground" />
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setMobileOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-card border border-border shadow-sm"
        aria-label="Open sidebar"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/50"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed lg:static inset-y-0 left-0 z-50 w-[220px] bg-sidebar border-r border-sidebar-border flex flex-col transition-transform lg:translate-x-0",
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Mobile close */}
        <button
          onClick={() => setMobileOpen(false)}
          className="lg:hidden absolute top-4 right-3 p-1 rounded-md hover:bg-accent"
          aria-label="Close sidebar"
        >
          <X className="w-4 h-4" />
        </button>
        {sidebarContent}
      </aside>
    </>
  );
};

export default AppSidebar;
