
const changeColorBtn = document.getElementById('change-color-btn');

changeColorBtn.addEventListener('click', () => {
  if (document.body.classList.contains('dark-theme')) {
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
    localStorage.setItem('theme', 'light');
  } else {
    document.body.classList.remove('light-theme');
    document.body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark');
  }
});

// Retrieve theme preference from localStorage on page load
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  document.body.classList.add('dark-theme');
} else {
  document.body.classList.add('light-theme');
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
