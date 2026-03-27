import { MoreVertical } from "lucide-react";

export default function KnowledgeCard({ item }) {
  return (
    <div className="rounded-2xl border border-borderSoft bg-white p-4 shadow-[0_0_0_1px_rgba(17,24,39,0.01)]">
      <div className="mb-3 flex items-start justify-between">
        <h3 className="text-[18px] font-semibold text-[#2F2F37]">{item.title}</h3>
        <button className="text-[#6D6D76]">
          <MoreVertical size={18} />
        </button>
      </div>

      <p className="min-h-[92px] max-w-[95%] text-[14px] leading-7 text-[#767680]">
        {item.description}
      </p>

      <div className="mt-6 border-t border-borderSoft pt-3">
        <p className="text-[14px] text-[#767680]">
          Created On: <span className="font-medium">{item.createdOn}</span>
        </p>
      </div>
    </div>
  );
}