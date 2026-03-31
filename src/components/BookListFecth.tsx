import { useState, useEffect, useCallback } from "react";
import type { JSX } from "react/jsx-runtime";
import { getBooks } from "../services/api";

import type { Book } from "../types/book";
import { CountLabel, ErrorBox, Grid, SearchInput, Spinner, Wrapper, EmptyMessage } from "../styles/BookListStyle";
import BookCard from "./BookCard";

export function BookList(): JSX.Element {
    const [books, setBooks] = useState<Book[]>([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [search, setSearch] = useState<string>("")

    const loadBooks = useCallback(async (): Promise<void> => {
        try {
            setLoading(true);
            setError(null);
            const data = await getBooks();
            setBooks(data);
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("Erro desconhecido ao buscar os livros.")
            }
        } finally {
            setLoading(false)
        }
    }, [])

    useEffect(
        () => {
            loadBooks();
        }, [loadBooks]);


    const filteredBooks: Book[] = books.filter(
        (books: Book) => books.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()))

    if (loading) return <Spinner />;
    if (error) return <ErrorBox>Erro</ErrorBox>


    return (
        <Wrapper>
            <SearchInput
                type="text"
                placeholder="Buscar livro título"
                value={search}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)} />


            <CountLabel>
                <span>{filteredBooks.length}</span>{" "}
                {filteredBooks.length === 1 ? "livro encontrado" : "livros encontrados"}
            </CountLabel>


            {filteredBooks.length === 0 ? (
                <EmptyMessage>Nenhum livro encontrado para "{search}".</EmptyMessage>
            ) : (
                <Grid>
                    {filteredBooks.map((book: Book) => (
                        <BookCard key={book.id} book={book} />
                    ))}
                </Grid>
            )}
        </Wrapper>
    )
}