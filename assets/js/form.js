// reference the form input fields 
const form = document.querySelector('#myForm');
const usernameinput = document.querySelector('#user-name');
const title = document.querySelector('#title');
const content = document.querySelector('#content');
const submitButton = document.querySelector('#submit');

// let formData = localStorage.getItem('formData')

// add event listener for form sunmission
form.addEventListener('submit', function(event) {
  event.preventDefault(); // prevent default form submission 
  if (usernameinput.value === " " || title.value === "" || content.value === ""){
    alert('You missed something. Go ahead and fix it')
  } else {
  let blogs = JSON.parse(localStorage.getItem('formData'))
  console.log(blogs);
  let blogData = {
    username: usernameinput.value,
    title: title.value,
    content: content.value
  }
  if (blogs === null) {
    blogs = [];
    blogs.push(blogData)
  } else {
    blogs.push(blogData)
  }
  
  let blogString = JSON.stringify(blogs);
  localStorage.setItem('formData', blogString)
  // change window location from index.html to blog.html using window.location.pathname
  window.location.href = "./blog.html";
  }
})
