import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BookCard from '../components/BookCard';
import { useGetBooksQuery } from '../features/api/apiSlice';
import { featuredFilter } from '../features/filter/filterSlice';

const Home = () => {
    const { data: books, isLoading, isError, error } = useGetBooksQuery()

    const { searchText, featured } = useSelector(state => state.filter)

    const dispatch = useDispatch()

    const handleSearch = (book) => {
        if (searchText) {
            return book.name.toLowerCase().includes(searchText.toLowerCase())
        }
        else {
            return true
        }
    }

    const handleFeaturedFilter = (book) => {
        if (featured) {
            return book.featured === true
        }
        else {
            return true
        }
    }

    const handleFeatured = (featured) => {
        dispatch(featuredFilter(featured))
    }

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
        content = books.filter(handleSearch).filter(handleFeaturedFilter).map(book => <BookCard key={book.id} book={book}></BookCard>)
    }

    return (
        <main className="py-12 px-6 2xl:px-6 container">
            <div className="order-2 xl:-order-1">
                <div className="flex items-center justify-between mb-12">
                    <h4 className="mt-2 text-xl font-bold">Book List</h4>

                    <div className="flex items-center space-x-4">
                        <button className={`lws-filter-btn ${featured === false && " active-filter"}`} onClick={() => handleFeatured(false)}>All</button>
                        <button className={`lws-filter-btn ${featured === true && " active-filter"}`} onClick={() => handleFeatured(true)}>Featured</button>
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