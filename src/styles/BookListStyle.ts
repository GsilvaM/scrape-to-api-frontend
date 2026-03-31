import styled, { keyframes } from "styled-components";

export const spin = keyframes`
  to { transform: rotate(360deg); }
`;

export const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
`;



export const Wrapper = styled.div`
  animation: ${fadeIn} 0.4s ease both;
`;

export const SearchInput = styled.input`
  width: 100%;
  max-width: 400px;
  padding: 10px 16px;
  border: 1.5px solid var(--color-border);
  border-radius: var(--radius);
  font-size: 15px;
  font-family: 'Inter', sans-serif;
  background: var(--color-surface);
  color: var(--color-text);
  outline: none;
  transition: border-color 0.2s;
  margin-bottom: 24px;

  &:focus {
    border-color: var(--color-accent);
    box-shadow: 0 0 0 3px rgba(122, 158, 97, 0.2);
  }

  &::placeholder {
    color: var(--color-muted);
  }
`;

export const CountLabel = styled.h2`
  font-size: 18px;
  color: var(--color-muted);
  font-weight: 500;
  margin-bottom: 20px;

  span {
    color: var(--color-primary);
    font-weight: 700;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
  gap: 20px;
`;


export const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border: 3px solid var(--color-border);
  border-top-color: var(--color-accent);
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
  margin: 60px auto;
`;

export const ErrorBox = styled.div`
  background: var(--color-error-bg);
  color: var(--color-error);
  border: 1px solid #fca5a5;
  border-radius: var(--radius);
  padding: 16px 20px;
  font-size: 14px;
  max-width: 500px;
`;

export const EmptyMessage = styled.p`
  color: var(--color-muted);
  font-size: 16px;
  text-align: center;
  padding: 60px 0;
`;

