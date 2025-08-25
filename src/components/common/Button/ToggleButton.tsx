import { useState } from "react";

export const ToggleButton = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <button
      onClick={() => setEnabled(!enabled)}
      className={`relative inline-flex h-8 w-16 items-center rounded-full transition-colors duration-300 ${
        enabled ? "bg-gradient-to-r from-pink-500 to-purple-600" : "bg-gray-300"
      }`}
    >
      <span
        className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform duration-300 ${
          enabled ? "translate-x-8" : "translate-x-1"
        }`}
      />
    </button>
  );
};
