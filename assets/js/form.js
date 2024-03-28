// Get form and input elements from the DOM
const form = document.querySelector('#myForm');
const usernameinput = document.querySelector('#user-name');
const title = document.querySelector('#title');
const content = document.querySelector('#content');
const submitButton = document.querySelector('#submit');

// Add event listener for form submission
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Check if any of the form fields are empty
    if (usernameinput.value === "" || title.value === "" || content.value === "") {
        alert('You missed something. Go ahead and fix it.');
    } else {
        // Retrieve existing blog data from localStorage
        let blogs = JSON.parse(localStorage.getItem('formData'));
        console.log(blogs);

        // Create an object with the new blog data
        let blogData = {
            username: usernameinput.value,
            title: title.value,
            content: content.value
        };

        // Check if there is existing blog data
        if (blogs === null) {
            blogs = []; // Initialize an empty array if no data exists
            blogs.push(blogData);
        } else {
            blogs.push(blogData); // Add the new blog data to the existing array
        }

        // Convert the updated blog data to a string and store it in localStorage
        let blogString = JSON.stringify(blogs);
        localStorage.setItem('formData', blogString);

        // Redirect to the blog.html page after saving the blog data
        window.location.href = "./blog.html";
    }
});