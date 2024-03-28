// Get the button element with the id 'change-color-btn'
const changeColorBtn = document.getElementById('change-color-btn');

// Add an event listener to the button for the 'click' event
changeColorBtn.addEventListener('click', () => {
  // Check if the body has the 'dark-theme' class
  if (document.body.classList.contains('dark-theme')) {
    // If it has the 'dark-theme' class, remove it and add 'light-theme'
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
    // Store the theme preference in localStorage as 'light'
    localStorage.setItem('theme', 'light');
  } else {
    // If it doesn't have the 'dark-theme' class, remove 'light-theme' and add 'dark-theme'
    document.body.classList.remove('light-theme');
    document.body.classList.add('dark-theme');
    // Store the theme preference in localStorage as 'dark'
    localStorage.setItem('theme', 'dark');
  }
});

// Retrieve theme preference from localStorage on page load
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  // If the saved theme is 'dark', add the 'dark-theme' class to the body
  document.body.classList.add('dark-theme');
} else {
  // If the saved theme is not 'dark', add the 'light-theme' class to the body
  document.body.classList.add('light-theme');
}

// Function to navigate to the next page (blog.html)
function nextPage() {
  window.location.href = "blog.html";
}

// // // Display stored data on blog.html
// // document.addEventListener('DOMContentLoaded', function() {
// //   const storedData = JSON.parse(localStorage.getItem('blogPost'));
// //   if (storedData) {
// //       // Display the stored data on the blog.html page
// //       // You can create elements dynamically to show the username, title, and content
// //   }
// // });
// document.addEventListener('DOMContentLoaded', function() {
//   const storedData = JSON.parse(localStorage.getItem('formData'));

//      // Reverse the order of the stored data array
//      storedData.reverse();

//   if (storedData) {
//       const blogContainer = document.querySelector('#blogContainer');
//       console.log(blogContainer); // Check if blogContainer is found

//       storedData.forEach(blog => {
//           const blogDiv = document.createElement('div');
//           console.log(blogDiv); // Check if blogDiv is created successfully

//           const usernameHeading = document.createElement('h2');
//           const titleParagraph = document.createElement('p');
//           const contentParagraph = document.createElement('p');

//           usernameHeading.textContent = `Username: ${blog.username}`;
//           titleParagraph.textContent = `Title: ${blog.title}`;
//           contentParagraph.textContent = `Content: ${blog.content}`;

//           blogDiv.appendChild(usernameHeading);
//           blogDiv.appendChild(titleParagraph);
//           blogDiv.appendChild(contentParagraph);

//           blogContainer.appendChild(blogDiv);
//       });
//   }
// });
// window.onload = storedData;
// // getElementById  --> document.getElementById('myForm')
// // getElementByClassName --> document.getElementByClassName("myForm")
// // querySelector()
// // For class --> document.queryelector(".myForm")
// // For class --> document.queryelector("#myForm")
