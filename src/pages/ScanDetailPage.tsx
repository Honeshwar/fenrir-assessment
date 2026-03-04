import AppSidebar from "@/components/AppSidebar";
import ThemeToggle from "@/components/ThemeToggle";
import { ChevronDown, Bug, Zap, Cpu, Clock } from "lucide-react";

const steps = [
  { label: "Spidering", icon: Bug, active: true },
  { label: "Mapping", icon: Cpu, active: false },
  { label: "Testing", icon: Zap, active: false },
  { label: "Validating", icon: ChevronDown, active: false },
  { label: "Reporting", icon: Clock, active: false },
];

const ScanDetailPage = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <AppSidebar activePath="/scan/1" />

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

        {/* Content */}
        <main className="flex-1 p-4 lg:p-6 overflow-auto space-y-6">
          {/* Progress Section */}
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
              {/* Circular Progress */}
              <div className="flex items-center justify-center shrink-0">
                <div className="relative w-24 h-24">
                  <svg
                    className="w-full h-full -rotate-90"
                    viewBox="0 0 100 100"
                  >
                    <circle
                      cx="50"
                      cy="50"
                      r="42"
                      fill="none"
                      stroke="hsl(var(--border))"
                      strokeWidth="8"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="42"
                      fill="none"
                      stroke="hsl(var(--primary))"
                      strokeWidth="8"
                      strokeDasharray={`${0 * 2.64} 264`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-xl font-bold text-foreground">
                      0%
                    </span>
                    <span className="text-[10px] text-primary font-medium">
                      In Progress
                    </span>
                  </div>
                </div>
              </div>

              {/* Step Tracker */}
              <div className="flex-1 flex items-center justify-between gap-2 lg:gap-4 overflow-x-auto w-full">
                {steps.map((step, i) => (
                  <div
                    key={step.label}
                    className="flex flex-col items-center gap-2 min-w-[80px]"
                  >
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center border-2 transition-colors ${
                        step.active
                          ? "bg-primary border-primary text-primary-foreground"
                          : "bg-surface border-border text-muted-foreground"
                      }`}
                    >
                      <step.icon className="w-5 h-5" />
                    </div>
                    <span
                      className={`text-xs font-medium ${step.active ? "text-foreground" : "text-muted-foreground"}`}
                    >
                      {step.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Metadata Row */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4 mt-6 pt-6 border-t border-border">
              {[
                { label: "Scan Type", value: "Grey Box" },
                { label: "Targets", value: "google.com" },
                { label: "Started At", value: "Nov 22, 09:00AM" },
                { label: "Credentials", value: "2 Active" },
                { label: "Files", value: "Control.pdf" },
                { label: "Checklists", value: "40/350", highlight: true },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-xs text-muted-foreground mb-1">
                    {item.label}
                  </p>
                  <p
                    className={`text-sm font-semibold ${item.highlight ? "text-primary" : "text-foreground"}`}
                  >
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ScanDetailPage;
