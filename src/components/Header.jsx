import { Bell, ChevronDown, Search } from "lucide-react";

export default function Header() {
  return (
    <header className="h-[74px] rounded-[14px] bg-gradient-to-r from-secondary to-primary px-6 flex items-center justify-between shadow-soft">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="relative flex h-8 w-8 items-center justify-center">
            <div className="absolute left-0 top-1 h-5 w-2 rounded-full bg-primary rotate-[20deg]" />
            <div className="absolute left-2 top-0 h-7 w-2 rounded-full bg-indigo-300 rotate-[25deg]" />
            <div className="absolute right-1 bottom-1 h-3.5 w-3.5 rounded-full border-[3px] border-indigo-400" />
          </div>

          <h1 className="text-[18px] font-semibold text-white">Worcspace</h1>
        </div>

        <button className="flex h-9 items-center gap-2 rounded-full bg-white/10 px-4 text-sm font-medium text-white hover:bg-white/15 transition">
          Workspace 1
          <ChevronDown size={16} />
        </button>
      </div>

      <div className="hidden w-full max-w-[360px] items-center md:flex">
        <div className="flex h-10 w-full items-center rounded-xl bg-white/10 px-4 text-white/80">
          <Search size={18} className="mr-3" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-transparent text-sm text-white placeholder:text-white/60 outline-none"
          />
          <span className="ml-3 text-xs text-white/70">⌘K</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="text-white/90">
          <Bell size={18} />
        </button>

        <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-white/30 bg-white/15 text-sm font-semibold text-white">
          GK
        </div>
      </div>
    </header>
  );
}