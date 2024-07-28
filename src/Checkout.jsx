
const checkoutBook = async (id) => {
    const token = localStorage.getItem('token');
    if (!token) {
        setError('You must be logged in to checkout a book.');
        return;
    }

    try {
        const response = await fetch(
            `https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${id}/checkout`,
            {
                method: 'POST',
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            }
        );

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const result = await response.json();
        console.log('Book checked out:', result);
    } catch (error) {
        setError('Error checking out book. Please try again')
    }
}