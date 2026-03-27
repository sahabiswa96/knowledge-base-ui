import { useMemo, useState } from "react";
import { Plus, Search } from "lucide-react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import KnowledgeGrid from "./components/KnowledgeGrid";
import EmptyState from "./components/EmptyState";
import PaginationFooter from "./components/PaginationFooter";
import CreateKnowledgeDrawer from "./components/CreateKnowledgeDrawer";
import {
  embeddingModels,
  knowledgeItems,
  sidebarSections,
  vectorStores
} from "./data/mockData";

export default function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [items, setItems] = useState(knowledgeItems);
  const [searchTerm, setSearchTerm] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    vectorStore: vectorStores[0],
    embeddingModel: embeddingModels[0]
  });

  const filteredItems = useMemo(() => {
    const keyword = searchTerm.trim().toLowerCase();

    if (!keyword) return items;

    return items.filter(
      (item) =>
        item.title.toLowerCase().includes(keyword) ||
        item.description.toLowerCase().includes(keyword)
    );
  }, [items, searchTerm]);

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCreate = (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      alert("Name is required");
      return;
    }

    const newItem = {
      id: Date.now(),
      title: formData.name.trim(),
      description:
        formData.description.trim() ||
        "No description provided for this knowledge base.",
      createdOn: new Date().toLocaleDateString("en-GB")
    };

    setItems((prev) => [newItem, ...prev]);

    setFormData({
      name: "",
      description: "",
      vectorStore: vectorStores[0],
      embeddingModel: embeddingModels[0]
    });

    setDrawerOpen(false);
  };

  return (
    <div className="min-h-screen bg-white p-2 md:p-3">
      <div className="overflow-hidden rounded-[16px] bg-white">
        <Header />

        <div className="flex min-h-[calc(100vh-92px)]">
          <Sidebar sections={sidebarSections} />

          <main className="flex-1 bg-white px-4 py-6 md:px-6 lg:px-6">
            <div className="mx-auto w-full">
              <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <h2 className="text-[38px] font-semibold text-[#2B2B33]">
                  Knowledge Base
                </h2>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <div className="relative">
                    <Search
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A0A0AA]"
                    />
                    <input
                      type="text"
                      placeholder="Search..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="h-11 w-full rounded-xl border border-borderSoft bg-white pl-11 pr-4 text-sm outline-none placeholder:text-[#B1B1BB] focus:border-primary sm:w-[250px]"
                    />
                  </div>

                  <button
                    onClick={handleDrawerOpen}
                    className="flex h-11 items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-white shadow-soft transition hover:opacity-95"
                  >
                    <Plus size={18} />
                    Create New
                  </button>
                </div>
              </div>

              {filteredItems.length ? (
                <KnowledgeGrid items={filteredItems} />
              ) : (
                <EmptyState />
              )}

              <PaginationFooter totalRows={filteredItems.length} />
            </div>
          </main>
        </div>
      </div>

      <CreateKnowledgeDrawer
        open={drawerOpen}
        onClose={handleDrawerClose}
        formData={formData}
        onChange={handleFormChange}
        onSubmit={handleCreate}
        vectorStores={vectorStores}
        embeddingModels={embeddingModels}
      />
    </div>
  );
}