declare global {
  interface Window {
    __theme: {
      get(): "light" | "dark";
      set(theme: "light" | "dark"): void;
      toggle(): "light" | "dark";
    };
  }
}

export {};
