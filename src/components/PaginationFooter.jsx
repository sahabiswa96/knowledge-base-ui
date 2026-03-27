import { ChevronDown, ChevronsLeft, ChevronsRight, ChevronLeft, ChevronRight } from "lucide-react";

export default function PaginationFooter({ totalRows }) {
  return (
    <div className="mt-6 flex flex-col gap-4 border-t border-transparent px-2 pb-2 pt-4 text-[#3D3D47] md:flex-row md:items-center md:justify-between">
      <p className="text-[15px] font-semibold">{totalRows} rows</p>

      <div className="flex flex-wrap items-center gap-4 text-[15px] font-semibold">
        <div className="flex items-center gap-3">
          <span>Rows per page</span>
          <button className="flex h-10 items-center gap-2 rounded-xl border border-borderSoft px-3 text-[#8A8A96]">
            10
            <ChevronDown size={16} />
          </button>
        </div>

        <div className="hidden h-8 w-px bg-borderSoft md:block" />

        <p>page 1 of 1</p>

        <div className="flex items-center gap-2">
          <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-borderSoft text-[#B1B1BB]">
            <ChevronsLeft size={16} />
          </button>
          <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-borderSoft text-[#B1B1BB]">
            <ChevronLeft size={16} />
          </button>
          <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-borderSoft text-[#B1B1BB]">
            <ChevronRight size={16} />
          </button>
          <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-borderSoft text-[#B1B1BB]">
            <ChevronsRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}