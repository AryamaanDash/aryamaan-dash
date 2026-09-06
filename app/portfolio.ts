export const navLinks = [
  { label: "Projects", href: "/projects" },
  { label: "Github", href: "https://github.com/AryamaanDash" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/aryamaan-dash-a8589a2b7/",
  },
  { label: "Resume", href: "/Aryamaan-Dash-Resume.pdf" },
] as const;

export const interests = [
  {
    title: "Software Engineering",
    description:
      "Responsive React.js, HTML, and CSS interfaces, with experience contributing as both a front-end developer and team lead.",
  },
  {
    title: "Embedded Systems",
    description:
      "Real-time C++ DSP, Verilog, ESP32 development, Daisy Seed, and soldered prototypes.",
  },
  {
    title: "Machine Learning",
    description:
      "Audio feature extraction, classifier evaluation, PyTorch, TensorFlow, and scikit-learn.",
  },
] as const;

export const skills = [
  "C++",
  "Python",
  "TypeScript",
  "HTML/CSS",
  "Verilog",
  "Git",
  "Docker",
  "Vivado",
  "Next.js",
  "ESP32",
  "STM32",
  "STM32CubeMX",
  "Soldering",
  "PyTorch",
  "TensorFlow",
  "scikit-learn",
] as const;

export const projects = [
  {
    title: "Study Tracker",
    type: "Study tool",
    href: "https://github.com/AryamaanDash/track-my-studying",
    liveHref: "https://track-my-studying.vercel.app",
    summary:
      "Developed and deployed a responsive full-stack study journal using Next.js, TypeScript, Prisma, PostgreSQL, and Vercel. Implemented credential-based authentication, study-session CRUD, journal entries, a persistent focus timer, weekly reflections, and interactive calendar and Recharts analytics for reviewing study patterns across multiple timeframes. Added server-side caching, secure password hashing, and reliable per-user data persistence.",
    stack: ["Next.js", "TypeScript", "Prisma Postgres", "PostgreSQL", "Recharts", "Auth.js", "Vercel", "Node.js", "Docker", "Docker Compose"],
  },
  {
    title: "Programmable Multi-Effects Guitar Pedal",
    type: "Embedded audio",
    href: "https://github.com/AryamaanDash/MultiEffectPedal",
    summary:
      "Built a Daisy Seed-based programmable guitar pedal with selectable bypass, distortion, reverb, delay, and flanger effects. Programmed real-time embedded C++ DSP firmware using DaisySP, audio callbacks, delay-line processing, wet/dry mixing, and debounced mode switching. Soldered a perfboard prototype integrating guitar input buffering, audio jack wiring, and control inputs.",
    stack: ["C++", "DaisySP", "DSP", "Soldering"],
  },
  {
    title: "Reusable Embedded C Library",
    type: "Embedded Software",
    href: "https://github.com/AryamaanDash/embedded_c_library",
    summary:
    "Developed a reusable embedded C library with 5 core modules: GPIO, UART, ring buffer, FSM, and button debouncing using defensive input validation and static/caller-provided memory for embedded environments. Designed a platform abstraction layer separating hardware-independent GPIO/UART APIs from STM32G071 HAL implementations, translating portable driver types and status codes to platform-specific HAL operations. Implemented an O(1) circular byte buffer, configurable time-based button debouncing with press/release events, and a table-driven state machine that validates states, events, and duplicate transitions before execution.",
    stack: ["Embedded C", "Computer Architecture", "STM32 HAL",],
  },
  {
    title: "Guitar Audio Classification Model",
    type: "Machine learning",
    href: "https://github.com/AryamaanDash/guitar-style-classifier",
    liveHref: "https://guitar-style-classifier.vercel.app",
    summary:
      "Built an audio classification pipeline with 89% test accuracy to identify four guitar sound categories: single notes, chords, palm-muted playing, and background noise from self-recorded audio. Processed one-second WAV clips and extracted MFCCs, RMS energy, spectral centroid, bandwidth, rolloff, and zero-crossing-rate features. Trained and evaluated a logistic regression classifier using multi-session training, validation, and test splits on independently recorded guitar samples.",
    stack: ["Python", "MFCC", "scikit-learn", "Audio ML"],
  },
  {
    title: "Seam Carving Web App",
    type: "Image processing",
    href: "https://github.com/AryamaanDash/seamcarving",
    liveHref: "https://seamcarving.vercel.app",
    summary:
      "Built and deployed a full-stack image resizing web app with upload previews, axis controls, projected dimensions, and downloadable results. Engineered an API route that validates PNG, JPEG, and WebP uploads up to 12 MB, creates isolated temporary jobs, invokes the Python processor, enforces timeouts, and cleans up files. Implemented content-aware resizing using Sobel energy maps, dynamic programming, and seam backtracking to remove low-energy pixels while preserving image content.",
    stack: ["Next.js", "React", "Node.js", "TypeScript", "Python", "NumPy"],
  },
  {
    title: "URL Shortener",
    type: "Backend / System design",
    href: "https://github.com/AryamaanDash/url-shortener",
    summary:
      "Built a URL shortening API with Python, Flask, PostgreSQL, and Redis. Generated compact Base62 short codes from database IDs and implemented HTTP redirects with Redis cache lookups, PostgreSQL fallback, and cache repopulation. Containerized the application, database, and cache with Docker Compose, including persistent database storage, service health checks, and a health endpoint.",
    stack: ["Python", "Flask", "PostgreSQL", "Redis", "Docker", "Docker Compose"],
  },
  {
    title: "RISC-V RV32I Single-Cycle Processor",
    type: "Digital logic",
    href: "https://github.com/AryamaanDash/single_cycle_riscv32I_processor",
    summary:
      "A Verilog single-cycle processor with program counter, register file, ALU, immediate generator, instruction memory, and data memory. In addition, there are testbenches verifying behavior of each independent module. Entirely written in Verilog.",
    stack: ["Verilog", "Vivado", "Testbenches", "Computer Architecture"],
  },
  {
    title: "CPU Optimized Inference Engine (WIP)",
    type: "Computer Architecture / Machine Learning",
    href: "https://github.com/AryamaanDash/cpu_optimized_inference_engine",
    summary:
      "CPU neural-network inference engine in C++ from scratchBuilt a CPU neural-network inference engine from scratch in C++, implementing matrix multiplication, dense layers, activations, convolution, and model execution. Optimized performance on Apple Silicon through cache-aware tiling, ARM NEON SIMD, multithreading, and INT8 quantization, using reproducible benchmarks and profiling to compare against Apple Accelerate.",
    stack: ["C++20", "Cmake", "Clang/LLVM", "ARM64", "Google Benchmark", "Xcode Instruments", "Python/NumPy", "Apple Accelerate", "Git"]
  }
] as const;

export const hackathonProjects = [
  {
    title: "EcoToken",
    type: "AI efficiency",
    href: "https://github.com/AryamaanDash/EcoToken",
    summary:
      "A Chrome extension that uses a local prompt-complexity classifier to route each Gemini prompt to the lowest-cost model tier that can handle it, with an analytics dashboard showing estimated inference cost savings and CO2 emissions prevented.",
    stack: ["Chrome Extension", "JavaScript", "Python", "FastAPI"],
  },
  {
    title: "TeachBack: Inverted Tutoring",
    type: "Education",
    href: "https://github.com/jwlee-jake/FlipLearn",
    summary:
      "A hackathon tutoring app where students teach an AI student, with memory-aware personalization and step-gated problem solving.",
    stack: ["AI UX", "Backend Schema", "Education", "Validation"],
  },
] as const;
