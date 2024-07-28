# Unit 3 Career stimulation: Book Buddy Project

To do

1 Authentication
Unauthenticated Users should not be able to:
- Check out or return any book
- See the account page of any user

2 	This criterion is linked to a Learning Outcome Authentication
Authenticated Users should be able to:
- Check out an available book
- Return books they have currently checked out
- View their own account page and currently checked out books

// Solution 

// 1.	Store Authentication State: Save the user’s authentication state, such as an access token, when they log in or register.
// 2.	Protect Routes: Use protected routes to restrict access to certain parts of the application to authenticated users only.
// 3.	Handle Authentication in BookList Component: Check if the user is authenticated before allowing them to checkout books.

3 	This criterion is linked to a Learning Outcome AJAX
AJAX Basics are Implemented
- usage of HTTP Methods (GET/POST/PATCH/DELETE)
- handling of asynchronous coding for requests
- usage of try/catch blocks within async functions
- updating the DOM with the results of data requests

4 //	This criterion is linked to a Learning Outcome Routes via React Router
//account - this component should show, at minimum:
//Username or email of logged in user
//List of all books a user has checked out (or a message indicating they have 0 books checked out if applicable)