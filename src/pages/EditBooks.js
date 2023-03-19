import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useEditBookMutation, useGetBookQuery } from '../features/api/apiSlice';

const EditBooks = () => {
    const { id } = useParams()

    const navigate = useNavigate()

    const { data } = useGetBookQuery(id)

    const [editBook, { isLoading, isSuccess, isError, error }] = useEditBookMutation()

    const handleSubmit = (event) => {
        event.preventDefault()

        const form = event.target;

        const name = form.name.value;
        const author = form.author.value;
        const thumbnail = form.thumbnail.value;
        const price = Number(form.price.value);
        const rating = Number(form.rating.value);
        const featured = form.featured.checked

        const data = {
            name,
            author,
            thumbnail,
            price,
            rating,
            featured
        }
        editBook({ id, data })
        form.reset()
    }

    if (isSuccess) {
        navigate("/")
    }






    return (
        <main className="py-6 2xl:px-6">
            <div className="container">
                <div className="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
                    <h4 className="mb-8 text-xl font-bold text-center">Edit Book</h4>
                    <form className="book-form" onSubmit={handleSubmit}>
                        <div className="space-y-2">
                            <label for="lws-bookName">Book Name</label>
                            <input required className="text-input" type="text" Value={data?.name} id="lws-bookName" name="name" />
                        </div>

                        <div className="space-y-2">
                            <label for="lws-author">Author</label>
                            <input required className="text-input" type="text" Value={data?.author} id="lws-author" name="author" />
                        </div>

                        <div className="space-y-2">
                            <label for="lws-thumbnail">Image Url</label>
                            <input required className="text-input" type="text" Value={data?.thumbnail} id="lws-thumbnail" name="thumbnail" />
                        </div>

                        <div className="grid grid-cols-2 gap-8 pb-4">
                            <div className="space-y-2">
                                <label for="lws-price">Price</label>
                                <input required className="text-input" Value={data?.price} type="number" id="lws-price" name="price" />
                            </div>

                            <div className="space-y-2">
                                <label for="lws-rating">Rating</label>
                                <input required className="text-input" Value={data?.rating} type="number" id="lws-rating" name="rating" min="1"
                                    max="5" />
                            </div>
                        </div>

                        <div className="flex items-center">
                            <input id="lws-featured" type="checkbox" defaultChecked={data?.featured} name="featured" className="w-4 h-4" />
                            <label for="lws-featured" className="ml-2 text-sm"> This is a featured book </label>
                        </div>

                        <button type="submit" className="submit" id="lws-submit">Edit Book</button>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default EditBooks;