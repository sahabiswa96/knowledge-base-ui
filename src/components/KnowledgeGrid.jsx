import KnowledgeCard from "./KnowledgeCard";

export default function KnowledgeGrid({ items }) {
  return (
    <div className="rounded-2xl border border-borderSoft bg-white p-3">
      <div className="grid grid-cols-1 gap-3 xl:grid-cols-3 md:grid-cols-2">
        {items.map((item) => (
          <KnowledgeCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}