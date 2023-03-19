import React from 'react';
import BookCard from '../components/BookCard';
import { useGetBooksQuery } from '../features/api/apiSlice';

const Home = () => {
    const { data: books, isLoading, isError, error } = useGetBooksQuery()

    let content = null;

    if (isLoading) {
        content = <div>Loading...</div>
    }

    if (!isLoading && isError) {
        content = <p>{error}</p>
    }

    if (!isLoading && !isError && books?.length === 0) {
        content = <p>No Books Found!</p>
    }

    if (!isLoading && !isError && books.length > 0) {
        content = books.map(book => <BookCard key={book.id} book={book}></BookCard>)
    }

    return (
        <main className="py-12 px-6 2xl:px-6 container">
            <div className="order-2 xl:-order-1">
                <div className="flex items-center justify-between mb-12">
                    <h4 className="mt-2 text-xl font-bold">Book List</h4>

                    <div className="flex items-center space-x-4">
                        <button className="lws-filter-btn active-filter">All</button>
                        <button className="lws-filter-btn">Featured</button>
                    </div>
                </div>
                <div className="space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {content}
                </div>
            </div>
        </main>
    );
};

export default Home;