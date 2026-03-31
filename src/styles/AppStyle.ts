import styled from "styled-components";


export const PageWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 24px;
`;

export const Header = styled.header`
  margin-bottom: 40px;
  padding-bottom: 24px;
  border-bottom: 1px solid var(--color-border);
`;

export const AppTitle = styled.h1`
  font-size: clamp(28px, 5vw, 42px);
  color: var(--color-primary);
  letter-spacing: -0.5px;
  margin-bottom: 6px;
`;

export const AppSubtitle = styled.p`
  color: var(--color-muted);
  font-size: 15px;
`;
