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
    title: "Embedded Systems",
    description:
      "Real-time C++, Verilog, soldered prototypes, and hardware-aware firmware.",
  },
  {
    kicker: "02",
    title: "Machine Learning",
    description:
      "Audio feature extraction, model evaluation, and practical ML interfaces.",
  },
  {
    kicker: "03",
    title: "Autonomous Robotics",
    description:
      "A growing interest in perception, control, and robotics software stacks.",
  },
] as const;

export const skills = [
  "Python",
  "TypeScript",
  "C++",
  "Verilog",
  "Next.js",
  "Vivado",
  "ESP32",
  "Daisy Seed",
  "PyTorch",
  "TensorFlow",
  "Soldering",
] as const;

export const projects = [
  {
    title: "Programmable Multi-Effects Guitar Pedal",
    type: "Embedded audio",
    href: "https://github.com/AryamaanDash/MultiEffectPedal",
    summary:
      "A Daisy Seed based guitar pedal with bypass, distortion, reverb, delay, and flanger effects running real-time C++ DSP firmware.",
    stack: ["C++", "DaisySP", "DSP", "Soldering"],
  },
  {
    title: "Guitar Audio Classification Model",
    type: "Machine learning",
    href: "https://github.com/AryamaanDash/guitar-style-classifier",
    liveHref: "https://guitar-style-classifier.vercel.app",
    summary:
      "An audio classification pipeline with MFCCs and spectral features that reached 89% test accuracy on independently recorded guitar samples.",
    stack: ["Python", "MFCC", "PyTorch", "TensorFlow", "Audio ML"],
  },
  {
    title: "Study Tracker",
    type: "Study tool",
    href: "https://github.com/AryamaanDash/track-my-studying",
    liveHref: "https://track-my-studying.vercel.app",
    summary:
      "A Next.js and TypeScript study tracking app for logging sessions, reviewing history, and visualizing study trends.",
    stack: ["Next.js", "TypeScript", "Prisma", "Postgres", "Chart.js"],
  },
  {
    title: "TeachBack: Inverted Tutoring",
    type: "AI education",
    href: "https://github.com/AryamaanDash/ReverseLearn",
    summary:
      "A hackathon tutoring app where students teach an AI student, with memory-aware personalization and step-gated problem solving.",
    stack: ["AI UX", "Backend Schema", "Education", "Validation"],
  },
  {
    title: "RISC-V RV32I Single-Cycle Processor",
    type: "Digital logic",
    href: "https://github.com/AryamaanDash/single_cycle_riscv32I_processor",
    summary:
      "A Verilog single-cycle processor with program counter, register file, ALU, immediate generator, instruction memory, and data memory.",
    stack: ["Verilog", "Vivado", "Testbenches", "Computer Architecture"],
  },
] as const;
