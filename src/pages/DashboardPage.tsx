import { useNavigate } from "react-router-dom";
import { Search, SlidersHorizontal, Columns3, Plus, Clock } from "lucide-react";
import AppSidebar from "@/components/AppSidebar";
import ThemeToggle from "@/components/ThemeToggle";
import StatusChip from "@/components/StatusChip";
import SeverityBadge from "@/components/SeverityBadge";
import { mockScans } from "@/data/mockData";

const severityCards = [
  {
    label: "Critical Severity",
    count: 86,
    change: "+2% increase than yesterday",
    up: true,
    icon: "🚫",
    color: "severity-critical",
  },
  {
    label: "High Severity",
    count: 16,
    change: "+0.9% increase than yesterday",
    up: true,
    icon: "⚠️",
    color: "severity-high",
  },
  {
    label: "Medium Severity",
    count: 26,
    change: "+0.9% decrease than yesterday",
    up: false,
    icon: "⚠️",
    color: "severity-medium",
  },
  {
    label: "Low Severity",
    count: 16,
    change: "+0.9% increase than yesterday",
    up: true,
    icon: "🔍",
    color: "severity-low",
  },
];

const DashboardPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-background">
      <AppSidebar activePath="/dashboard" />

      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Bar */}
        <header className="border-b border-border px-4 lg:px-6 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm ml-12 lg:ml-0">
            <span className="font-semibold text-foreground">Scan</span>
            <span className="text-muted-foreground">/</span>
            <span className="text-muted-foreground">Private Assets</span>
            <span className="text-muted-foreground">/</span>
            <span className="text-primary font-medium">New Scan</span>
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button className="px-4 py-2 rounded-lg border border-border text-sm font-medium text-foreground hover:bg-accent transition-colors">
              Export Report
            </button>
            <button className="px-4 py-2 rounded-lg border border-destructive text-sm font-medium text-destructive hover:bg-destructive/10 transition-colors">
              Stop Scan
            </button>
          </div>
        </header>

        {/* Org Stats Bar */}
        <div className="border-b border-border px-4 lg:px-6 py-3 flex items-center gap-6 text-sm overflow-x-auto">
          <div className="flex items-center gap-2 whitespace-nowrap">
            <span className="text-muted-foreground">Org:</span>
            <span className="font-semibold text-foreground">Project X</span>
          </div>
          <span className="text-border">|</span>
          <div className="flex items-center gap-2 whitespace-nowrap">
            <span className="text-muted-foreground">Owner:</span>
            <span className="font-semibold text-foreground">Nammagiri</span>
          </div>
          <span className="text-border">|</span>
          <div className="flex items-center gap-2 whitespace-nowrap">
            <span className="text-muted-foreground">Total Scans:</span>
            <span className="font-semibold text-foreground">100</span>
          </div>
          <span className="text-border">|</span>
          <div className="flex items-center gap-2 whitespace-nowrap">
            <span className="text-muted-foreground">Scheduled:</span>
            <span className="font-semibold text-foreground">1000</span>
          </div>
          <span className="text-border">|</span>
          <div className="flex items-center gap-2 whitespace-nowrap">
            <span className="text-muted-foreground">Rescans:</span>
            <span className="font-semibold text-foreground">100</span>
          </div>
          <span className="text-border">|</span>
          <div className="flex items-center gap-2 whitespace-nowrap">
            <span className="text-muted-foreground">Failed Scans:</span>
            <span className="font-semibold text-foreground">100</span>
          </div>
          <div className="flex items-center gap-1.5 ml-auto whitespace-nowrap text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>10 mins ago</span>
          </div>
        </div>

        {/* Content */}
        <main className="flex-1 p-4 lg:p-6 overflow-auto">
          {/* Severity Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {severityCards.map((card) => (
              <div
                key={card.label}
                className="bg-card border border-border rounded-xl p-4"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-muted-foreground">
                    {card.label}
                  </span>
                  <span className="text-lg">{card.icon}</span>
                </div>
                <p className="text-3xl font-bold text-foreground">
                  {card.count}
                </p>
                <p
                  className={`text-xs mt-1 ${card.up ? "text-severity-critical" : "text-primary"}`}
                >
                  {card.up ? "↑" : "↓"} {card.change}
                </p>
              </div>
            ))}
          </div>

          {/* Search + Filter Bar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search scans by name or type..."
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-input bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
              />
            </div>
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border text-sm text-foreground hover:bg-accent transition-colors">
                <SlidersHorizontal className="w-4 h-4" />
                Filter
              </button>
              <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border text-sm text-foreground hover:bg-accent transition-colors">
                <Columns3 className="w-4 h-4" />
                Column
              </button>
              <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity">
                <Plus className="w-4 h-4" />
                New scan
              </button>
            </div>
          </div>

          {/* Scan Table */}
          <div className="bg-card border border-border rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground">
                      Scan Name
                    </th>
                    <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground">
                      Type
                    </th>
                    <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground">
                      Status
                    </th>
                    <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground">
                      Progress
                    </th>
                    <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground">
                      Vulnerability
                    </th>
                    <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground">
                      Last Scan
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {mockScans.map((scan) => (
                    <tr
                      key={scan.id}
                      onClick={() => navigate(`/scan/${scan.id}`)}
                      className="border-b border-border last:border-b-0 hover:bg-accent/50 cursor-pointer transition-colors"
                    >
                      <td className="px-4 py-3.5 text-sm font-medium text-foreground">
                        {scan.name}
                      </td>
                      <td className="px-4 py-3.5 text-sm text-muted-foreground">
                        {scan.type}
                      </td>
                      <td className="px-4 py-3.5">
                        <StatusChip status={scan.status} />
                      </td>
                      <td className="px-4 py-3.5">
                        <div className="flex items-center gap-2">
                          <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                            <div
                              className={`h-full rounded-full transition-all ${
                                scan.status === "Failed"
                                  ? "bg-destructive"
                                  : "bg-primary"
                              }`}
                              style={{ width: `${scan.progress}%` }}
                            />
                          </div>
                          <span className="text-xs text-muted-foreground">
                            {scan.progress}%
                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-3.5">
                        <div className="flex items-center gap-1.5">
                          <SeverityBadge
                            level="Critical"
                            count={scan.vulnerabilities.critical}
                          />
                          <SeverityBadge
                            level="High"
                            count={scan.vulnerabilities.high}
                          />
                          {scan.vulnerabilities.medium > 0 && (
                            <SeverityBadge
                              level="Medium"
                              count={scan.vulnerabilities.medium}
                            />
                          )}
                          {scan.vulnerabilities.low > 0 && (
                            <SeverityBadge
                              level="Low"
                              count={scan.vulnerabilities.low}
                            />
                          )}
                        </div>
                      </td>
                      <td className="px-4 py-3.5 text-sm text-muted-foreground">
                        {scan.lastScan}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="border-t border-border px-4 py-3 flex items-center justify-between text-sm text-muted-foreground">
              <span>Showing {mockScans.length} of 100 Scans</span>
              <div className="flex items-center gap-1">
                <button className="px-2 py-1 rounded hover:bg-accent transition-colors">
                  &lt;
                </button>
                <button className="px-2 py-1 rounded hover:bg-accent transition-colors">
                  &gt;
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
