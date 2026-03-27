export const sidebarSections = [
  {
    title: "MY PROJECTS",
    items: [
      { label: "Agents", key: "agents" },
      { label: "AI Models", key: "models" },
      { label: "Library", key: "library" }
    ]
  },
  {
    title: "ORCHESTRATOR",
    items: [
      { label: "Published", key: "published" },
      { label: "Machines", key: "machines" },
      { label: "Queues", key: "queues" },
      { label: "Triggers", key: "triggers" },
      { label: "Jobs", key: "jobs" },
      { label: "Executions", key: "executions" },
      { label: "Vault", key: "vault" },
      { label: "Knowledge Base", key: "knowledge-base", active: true },
      { label: "Key Store", key: "key-store" }
    ]
  },
  {
    title: "ADMIN",
    items: [
      { label: "Tenant", key: "tenant" },
      { label: "Integrations", key: "integrations" }
    ]
  }
];

export const knowledgeItems = [
  {
    id: 1,
    title: "Test",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    createdOn: "14/07/2025"
  },
  {
    id: 2,
    title: "Test",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    createdOn: "14/07/2025"
  },
  {
    id: 3,
    title: "Test",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    createdOn: "14/07/2025"
  },
  {
    id: 4,
    title: "Test",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    createdOn: "14/07/2025"
  },
  {
    id: 5,
    title: "Test",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    createdOn: "14/07/2025"
  },
  {
    id: 6,
    title: "Test",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    createdOn: "14/07/2025"
  }
];

export const vectorStores = ["Qdrant", "Pinecone", "Weaviate"];
export const embeddingModels = [
  "text-embedding-ada-002",
  "text-embedding-3-small",
  "text-embedding-3-large"
];