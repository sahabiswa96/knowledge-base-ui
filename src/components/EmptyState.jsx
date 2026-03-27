import { FileText } from "lucide-react";

export default function EmptyState() {
  return (
    <div className="flex h-[620px] items-center justify-center rounded-2xl border border-borderSoft bg-white">
      <div className="flex flex-col items-center text-center">
        <div className="mb-5 flex h-28 w-28 items-center justify-center rounded-[32px] border-[6px] border-[#D4D4D8] text-[#8F8F96]">
          <FileText size={48} strokeWidth={1.5} />
        </div>
        <p className="text-[18px] font-medium text-[#666670]">
          No Knowledge Bases Found
        </p>
      </div>
    </div>
  );
}