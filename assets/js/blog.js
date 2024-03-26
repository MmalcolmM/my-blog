
// display blog posts with data entered from the form 
// blog title
// blog content 
// posted by : " "

document.addEventListener('DOMContentLoaded', function() {
    const storedData = JSON.parse(localStorage.getItem('formData'));
  
       // Reverse the order of the stored data array
       storedData.reverse();
  
    if (storedData) {
        const blogContainer = document.querySelector('#blogContainer');
        console.log(blogContainer); // Check if blogContainer is found
  
        storedData.forEach(blog => {
            const blogDiv = document.createElement('div');
            console.log(blogDiv); // Check if blogDiv is created successfully
  
            const usernameHeading = document.createElement('h2');
            const titleParagraph = document.createElement('p');
            const contentParagraph = document.createElement('p');
  
            usernameHeading.textContent = `Username: ${blog.username}`;
            titleParagraph.textContent = `Title: ${blog.title}`;
            contentParagraph.textContent = `Content: ${blog.content}`;
  
            blogDiv.appendChild(usernameHeading);
            blogDiv.appendChild(titleParagraph);
            blogDiv.appendChild(contentParagraph);
  
            blogContainer.appendChild(blogDiv);
        });
    }
  });
  window.onload = storedData;

// take info from form put it in local storage 
const blogs = [
    {
        title: "blog title1",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, fuga fugiat nulla, rem assumenda distinctio eaque rerum vel quia asperiores accusamus voluptas amet id odio sint a enim dignissimos placeat! ",
        postedBy: "name1"
    },
    {
        title: "blog title2",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, fuga fugiat nulla, rem assumenda distinctio eaque rerum vel quia asperiores accusamus voluptas amet id odio sint a enim dignissimos placeat! ",
        postedBy: "name2"
    },
    {
        title: "blog title3",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, fuga fugiat nulla, rem assumenda distinctio eaque rerum vel quia asperiores accusamus voluptas amet id odio sint a enim dignissimos placeat! ",
        postedBy: "name3"
    }
] 

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
  