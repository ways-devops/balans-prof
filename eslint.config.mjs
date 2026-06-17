import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

const eslintConfig = [
  ...nextVitals,
  ...nextTypescript,
  {
    ignores: [
      ".next/**",
      "out/**",
      "dist/**",
      "node_modules/**",
      "next-env.d.ts",
      "next.config.ts",
      "postcss.config.mjs",
      "tailwind.config.ts",
    ],
  },
];

export default eslintConfig;
