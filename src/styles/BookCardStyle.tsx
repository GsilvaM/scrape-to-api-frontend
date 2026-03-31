import type { Book } from "../types/book"
import styled from "styled-components"

export default interface BookCardProps {
  book: Book
}

interface TagProps {
  $available: boolean
}


export const Card = styled.div`
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  padding: 18px 16px;
  width: 210px;
  box-shadow: var(--shadow);
  display: flex;
  flex-direction: column;
  gap: 8px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: default;

  /* Pseudo-seletor de hover — impossível com CSS inline! */
  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-hover);
  }
`;

export const Title = styled.h3`
font-family: 'Lora', serif;
  font-size: 14px;
  font-weight: 600;
  color: var(--color-text);
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;


export const Price = styled.p`
  font-size: 15px;
  font-weight: 700;
  color: var(--color-primary);
`
export const Rating = styled.p`
  font-size: 13px;
  color: var(--color-muted);
`


export const Tag = styled.span<TagProps>`
  display: inline-block;
  padding: 3px 10px;
  border-radius: 20px;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.3px;
  align-self: flex-start;
  `  