import {
  Bot,
  BookOpen,
  Boxes,
  Cable,
  FolderKanban,
  KeyRound,
  Library,
  MonitorSmartphone,
  PlaySquare,
  ScanSearch,
  Shield,
  SquareTerminal,
  Ticket,
  Workflow
} from "lucide-react";

const iconMap = {
  agents: Bot,
  models: Boxes,
  library: Library,
  published: FolderKanban,
  machines: MonitorSmartphone,
  queues: SquareTerminal,
  triggers: Workflow,
  jobs: Ticket,
  executions: PlaySquare,
  vault: Shield,
  "knowledge-base": BookOpen,
  "key-store": KeyRound,
  tenant: ScanSearch,
  integrations: Cable
};

export default function Sidebar({ sections }) {
  return (
    <aside className="hidden lg:flex w-[248px] shrink-0 flex-col border-r border-dashed border-borderSoft bg-white px-4 py-5">
      {sections.map((section) => (
        <div key={section.title} className="mb-5">
          <p className="mb-2 text-[11px] font-medium uppercase tracking-wide text-[#9B9BA4]">
            {section.title}
          </p>

          <div className="space-y-1">
            {section.items.map((item) => {
              const Icon = iconMap[item.key] || BookOpen;

              return (
                <button
                  key={item.key}
                  className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-[14px] font-medium transition ${
                    item.active
                      ? "bg-indigo-50 text-primary"
                      : "text-sidebarText hover:bg-slate-50"
                  }`}
                >
                  <span className={item.active ? "text-primary" : "text-sidebarText"}>
                    <Icon size={17} strokeWidth={1.9} />
                  </span>

                  <span>{item.label}</span>

                  {item.active && (
                    <span className="ml-auto h-6 w-1 rounded-full bg-secondary" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </aside>
  );
}