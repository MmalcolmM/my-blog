
// display blog posts with data entered from the form 
// blog title
// blog content 
// posted by : " "

// Wait for the DOM content to be fully loaded before executing the code
document.addEventListener('DOMContentLoaded', function() {
    // Retrieve and parse the stored form data from localStorage
    const storedData = JSON.parse(localStorage.getItem('formData'));

    // Reverse the order of the stored data array
    storedData.reverse();

    // Check if there is stored data available
    if (storedData) {
        // Find the container element with the id 'blogContainer'
        const blogContainer = document.querySelector('#blogContainer');
        console.log(blogContainer); // Check if blogContainer is found

        // Iterate over each blog entry in the stored data
        storedData.forEach(blog => {
            // Create a new div element for each blog entry
            const blogDiv = document.createElement('div');
            console.log(blogDiv); // Check if blogDiv is created successfully

            // Create elements for displaying username, title, and content
            const usernameHeading = document.createElement('h2');
            const titleParagraph = document.createElement('p');
            const contentParagraph = document.createElement('p');

            // Set the text content of the elements based on the blog data
            usernameHeading.textContent = `Username: ${blog.username}`;
            titleParagraph.textContent = `Title: ${blog.title}`;
            contentParagraph.textContent = `Content: ${blog.content}`;

            // Append the elements to the blog entry div
            blogDiv.appendChild(usernameHeading);
            blogDiv.appendChild(titleParagraph);
            blogDiv.appendChild(contentParagraph);

            // Append the blog entry div to the blog container
            blogContainer.appendChild(blogDiv);
        });
    }
});
  window.onload = storedData;

// take info from form put it in local storage 
// const blogs = [
//     {
//         title: "blog title1",
//         content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, fuga fugiat nulla, rem assumenda distinctio eaque rerum vel quia asperiores accusamus voluptas amet id odio sint a enim dignissimos placeat! ",
//         postedBy: "name1"
//     },
//     {
//         title: "blog title2",
//         content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, fuga fugiat nulla, rem assumenda distinctio eaque rerum vel quia asperiores accusamus voluptas amet id odio sint a enim dignissimos placeat! ",
//         postedBy: "name2"
//     },
//     {
//         title: "blog title3",
//         content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, fuga fugiat nulla, rem assumenda distinctio eaque rerum vel quia asperiores accusamus voluptas amet id odio sint a enim dignissimos placeat! ",
//         postedBy: "name3"
//     }


// loop through all blogs - for loop
// create 3 elements - 1 for each blog post
// add to the element - textContent
// hardcode result to blog.html (html / css) - add for class elements then stlye
// then come back here -- make sure it works -- take hard code (css / html) out 
// then create that html info in java - the div - p - 
// append the element
// Access toggle switch HTML element

// use document.onload 
// get all local data from local data - line 13 on logic.js
// create for loop to loop through the array of objects 
// maniuplate the DOM to list all the blogs in blog.html 

// // Display stored data on blog.html
// document.addEventListener('DOMContentLoaded', function() {
//   const storedData = JSON.parse(localStorage.getItem('blogPost'));
//   if (storedData) {
//       // Display the stored data on the blog.html page
//       // You can create elements dynamically to show the username, title, and content
//   }
// });

  // getElementById  --> document.getElementById('myForm')
  // getElementByClassName --> document.getElementByClassName("myForm")
  // querySelector()
  // For class --> document.queryelector(".myForm")
  // For class --> document.queryelector("#myForm")
  