import { ChevronDown, X } from "lucide-react";

export default function CreateKnowledgeDrawer({
  open,
  onClose,
  formData,
  onChange,
  onSubmit,
  vectorStores,
  embeddingModels
}) {
  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-black/30 transition ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
        onClick={onClose}
      />

      <aside
        className={`fixed right-0 top-0 z-50 h-full w-full max-w-[495px] transform overflow-y-auto bg-white shadow-2xl transition duration-300 custom-scrollbar ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex min-h-full flex-col">
          <div className="border-b border-borderSoft px-5 py-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-[22px] leading-none font-semibold text-[#2D2D35]">
                  Create New Knowledge Base
                </h2>
                <p className="mt-3 text-[14px] text-[#7E7E88]">
                  Best for quick answers from documents, websites and text files.
                </p>
              </div>

              <button onClick={onClose} className="mt-1 text-[#767680]">
                <X size={24} />
              </button>
            </div>
          </div>

          <form onSubmit={onSubmit} className="flex flex-1 flex-col justify-between">
            <div className="space-y-5 px-5 py-4">
              <div>
                <label className="mb-2 block text-[14px] font-semibold text-[#45454F]">
                  Name (Cannot be edited later)<span className="text-red-500">*</span>
                </label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={onChange}
                  placeholder="Name"
                  className="h-12 w-full rounded-xl border border-borderSoft px-4 text-[14px] outline-none placeholder:text-[#B1B1BB] focus:border-primary"
                />
              </div>

              <div>
                <label className="mb-2 block text-[14px] font-semibold text-[#45454F]">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={onChange}
                  placeholder="Description"
                  rows={4}
                  className="w-full rounded-xl border border-borderSoft px-4 py-3 text-[14px] outline-none placeholder:text-[#B1B1BB] focus:border-primary"
                />
              </div>

              <div>
                <label className="mb-2 block text-[14px] font-semibold text-[#45454F]">
                  Vector Store<span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    name="vectorStore"
                    value={formData.vectorStore}
                    onChange={onChange}
                    className="h-12 w-full appearance-none rounded-xl border border-borderSoft bg-white px-4 pr-10 text-[14px] text-[#6E6E77] outline-none focus:border-primary"
                  >
                    {vectorStores.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    size={18}
                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#8B8B96]"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-[14px] font-semibold text-[#45454F]">
                  LLM Embedding Model<span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    name="embeddingModel"
                    value={formData.embeddingModel}
                    onChange={onChange}
                    className="h-12 w-full appearance-none rounded-xl border border-borderSoft bg-white px-4 pr-10 text-[14px] text-[#6E6E77] outline-none focus:border-primary"
                  >
                    {embeddingModels.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    size={18}
                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#8B8B96]"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end px-5 py-4">
              <button
                type="submit"
                className="rounded-xl bg-primary px-8 py-3 text-[14px] font-semibold text-white shadow-soft transition hover:opacity-95"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </aside>
    </>
  );
}