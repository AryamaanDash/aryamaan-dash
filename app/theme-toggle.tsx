"use client";

type Theme = "light" | "dark";

const themes: Array<{ label: string; value: Theme }> = [
  { label: "Light", value: "light" },
  { label: "Dark", value: "dark" },
];

function applyTheme(nextTheme: Theme) {
  document.documentElement.setAttribute("data-theme", nextTheme);
  window.localStorage.setItem("theme", nextTheme);
}

export function ThemeToggle() {
  return (
    <div className="theme-toggle" aria-label="Color theme">
      {themes.map((option) => (
        <button
          className="theme-option"
          data-theme-option={option.value}
          key={option.value}
          onClick={() => applyTheme(option.value)}
          type="button"
        >
          <span aria-hidden="true" className={`theme-icon ${option.value}`} />
          <span>{option.label}</span>
        </button>
      ))}
    </div>
  );
}
