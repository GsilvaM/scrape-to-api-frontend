import type { Book } from "../types/book";

const BASE_URL = "http://127.0.0.1:8000";

export async function getBooks(): Promise<Book[]> {
    const response = await fetch(`${BASE_URL}/api/books`)
    if (!response.ok){
        throw new Error(`Erro ao buscar livros: ${response.status}`);}
        const data = await response.json() as Promise<Book[]>;
        return data;

}