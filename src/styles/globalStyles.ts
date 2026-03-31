// src/styles/GlobalStyle.ts

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;600;700&family=Inter:wght@400;500&display=swap');

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {
    --color-bg:         #f5f0eb;
    --color-surface:    #ffffff;
    --color-border:     #e2d9ce;
    --color-primary:    #2d4a22;
    --color-accent:     #7a9e61;
    --color-accent-bg:  #eef4e8;
    --color-text:       #1a1a1a;
    --color-muted:      #6b7280;
    --color-error:      #b91c1c;
    --color-error-bg:   #fee2e2;
    --radius:           10px;
    --shadow:           0 2px 12px rgba(0, 0, 0, 0.08);
    --shadow-hover:     0 6px 20px rgba(0, 0, 0, 0.13);
  }

  body {
    background-color: var(--color-bg);
    color: var(--color-text);
    font-family: 'Inter', sans-serif;
    line-height: 1.6;
  }

  h1, h2, h3 {
    font-family: 'Lora', serif;
    line-height: 1.3;
  }
`;

export default GlobalStyle;