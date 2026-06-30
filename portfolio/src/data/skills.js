// Each skill carries a short "proficiency note" — shown on hover/tap as the
// glowing detail card in the Skills Forest.
export const skillGroups = [
  {
    id: "languages",
    label: "Languages",
    grove: "The Old Roots",
    skills: [
      { name: "Java", note: "OOP, JVM internals, DSA practice." },
      { name: "Python", note: "ML pipelines, FastAPI services, data tooling." },
      { name: "JavaScript", note: "Full-stack default — browser to Node." },
      { name: "C++", note: "Core DSA & competitive problem solving." },
      { name: "C", note: "Systems fundamentals." },
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    grove: "The Glasswood",
    skills: [
      { name: "React.js", note: "Component architecture, hooks, state design." },
      { name: "Tailwind CSS", note: "Design-system-driven styling at speed." },
      { name: "HTML", note: "Semantic, accessible markup." },
      { name: "CSS", note: "Layout, animation, responsive systems." },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    grove: "The Iron Grove",
    skills: [
      { name: "Node.js", note: "Event-driven services and APIs." },
      { name: "Express.js", note: "REST API design, middleware, auth." },
      { name: "REST APIs", note: "Resource modeling, versioning, security." },
      { name: "Socket.IO", note: "Real-time, low-latency messaging." },
      { name: "JWT Authentication", note: "Access + refresh rotation, RBAC." },
      { name: "Redis", note: "Session storage, caching, token blacklisting." },
    ],
  },
  {
    id: "databases",
    label: "Databases",
    grove: "The Deep Cisterns",
    skills: [
      { name: "MongoDB", note: "Document modeling for real-time apps." },
      { name: "PostgreSQL", note: "Relational schemas for clinical data." },
      { name: "Prisma ORM", note: "Type-safe queries & migrations." },
      { name: "FAISS", note: "Vector similarity search at scale." },
      { name: "BM25", note: "Keyword retrieval, fused with vector search." },
    ],
  },
  {
    id: "ai-ml",
    label: "AI & ML",
    grove: "The Starlit Canopy",
    skills: [
      { name: "LangChain", note: "RAG pipeline orchestration." },
      { name: "Ollama", note: "Local LLM inference & reasoning." },
      { name: "RAG", note: "Hybrid retrieval, fusion ranking, citations." },
      { name: "Whisper", note: "Speech-to-text for clinical audio." },
      { name: "spaCy / SciSpaCy", note: "Medical named-entity recognition." },
      { name: "NumPy", note: "Numerical computing for analysis." },
      { name: "Pandas", note: "Data cleaning, EDA, transformation." },
    ],
  },
  {
    id: "devops",
    label: "DevOps & Tools",
    grove: "The Forge Clearing",
    skills: [
      { name: "Docker", note: "Containerized services for deployment." },
      { name: "Git", note: "Branching, history hygiene, collaboration." },
      { name: "GitHub", note: "Version control & project hosting." },
      { name: "Postman", note: "API testing & documentation." },
    ],
  },
];
