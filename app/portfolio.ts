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
    kicker: "01",
    title: "Software Engineering",
    description:
      "Responsive React.js, HTML, and CSS interfaces, with experience contributing as both a front-end developer and team lead.",
  },
  {
    kicker: "02",
    title: "Embedded Systems",
    description:
      "Real-time C++ DSP, Verilog, ESP32 development, Daisy Seed, and soldered prototypes.",
  },
  {
    kicker: "03",
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
  "R",
  "Git",
  "Vivado",
  "Next.js",
  "ESP32",
  "Daisy Seed",
  "Soldering",
  "PyTorch",
  "TensorFlow",
  "scikit-learn",
] as const;

export const projects = [
  {
    title: "Programmable Multi-Effects Guitar Pedal",
    type: "Embedded audio",
    href: "https://github.com/AryamaanDash/MultiEffectPedal",
    summary:
      "Built a Daisy Seed-based programmable guitar pedal with selectable bypass, distortion, reverb, delay, and flanger effects. Programmed real-time embedded C++ DSP firmware using DaisySP, audio callbacks, delay-line processing, wet/dry mixing, and debounced mode switching. Soldered a perfboard prototype integrating guitar input buffering, audio jack wiring, and control inputs.",
    stack: ["C++", "DaisySP", "DSP", "Soldering"],
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
    title: "Study Tracker",
    type: "Study tool",
    href: "https://github.com/AryamaanDash/track-my-studying",
    liveHref: "https://track-my-studying.vercel.app",
    summary:
      "Developed a full-stack study tracking web application using Next.js, TypeScript, Prisma Postgres, and Vercel for logging, managing, and reviewing study sessions. Built Chart.js visualizations for study trends, session history, and progress insights, plus persistent Prisma Postgres storage for reliable user data retrieval.",
    stack: ["Next.js", "TypeScript", "Prisma", "Postgres", "Chart.js"],
  },
  {
    title: "EcoToken",
    type: "AI efficiency hackathon",
    href: "https://github.com/AryamaanDash/EcoToken",
    summary:
      "A Chrome extension that uses a local prompt-complexity classifier to route each Gemini prompt to the lowest-cost model tier that can handle it, with an analytics dashboard showing estimated inference cost savings and CO2 emissions prevented.",
    stack: ["Chrome Extension", "JavaScript", "Python", "FastAPI"],
  },
  {
    title: "RISC-V RV32I Single-Cycle Processor",
    type: "Digital logic",
    href: "https://github.com/AryamaanDash/single_cycle_riscv32I_processor",
    summary:
      "A Verilog single-cycle processor with program counter, register file, ALU, immediate generator, instruction memory, and data memory.",
    stack: ["Verilog", "Vivado", "Testbenches", "Computer Architecture"],
  },
  {
    title: "TeachBack: Inverted Tutoring",
    type: "AI education",
    href: "https://github.com/jwlee-jake/FlipLearn",
    summary:
      "A hackathon tutoring app where students teach an AI student, with memory-aware personalization and step-gated problem solving.",
    stack: ["AI UX", "Backend Schema", "Education", "Validation"],
  },
] as const;
