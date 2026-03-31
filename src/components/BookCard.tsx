import type { JSX } from "react/jsx-runtime";
import { Card, Title, Price, Rating, Tag } from "../styles/BookCardStyle";
import type { Book } from "../types/book";
interface BookCardProps {
    book: Book;
}



function BookCard({ book }: BookCardProps): JSX.Element {
    const isAvailable = book.available ?? false;
    const availableText = isAvailable ? "In stock" : "Out of stock";

    return (
        <Card>
            <Title>{book.title}</Title>
            <Price>{book.price}</Price>

            {book.rating && <Rating>⭐ {book.rating}</Rating>}

            <Tag $available={isAvailable}>
                {availableText}
            </Tag>
        </Card>
    );
}

export default BookCard;