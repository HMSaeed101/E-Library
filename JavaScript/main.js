document.addEventListener('DOMContentLoaded', () => 
{
    const authForm = document.querySelector('.login-container form');
    if (authForm) 
    {
        authForm.addEventListener
    ('submit', (e) => 
    {
            let errors = [];
            const email = authForm.querySelector('input[name=\"email\"]');
            const password = authForm.querySelector('input[name=\"password\"]');
            const username = authForm.querySelector('input[name=\"username\"]');
            const fullName = authForm.querySelector('input[name=\"fullname\"]');

//Check Username
            if (username && username.value.trim().length < 3) 
            {
                errors.push('Username must be at least 3 characters long.');
                username.style.border = '2px solid #ff4d4d';
            }
            else 
            {
                username.style.border = 'none';
            }
//Check Email Format
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (email && !emailRegex.test(email.value)) 
            {
                errors.push('Please enter a valid email address.');
                email.style.border = '2px solid #ff4d4d';
            } 
            else
            {
                email.style.border = 'none';
            }
//Check Password Length
            if (password && password.value.length < 6) 
            {
                errors.push('Password must be at least 6 characters long.');
                password.style.border = '2px solid #ff4d4d';
            } 
            else 
            {
                password.style.border = 'none';
            }
//Check Full Name (Signup only)
            if (fullName && fullName.value.trim() === '') 
            {
                errors.push('Full Name is required.');
                fullName.style.border = '2px solid #ff4d4d';
            }
// If there are errors, stop the form from sending to PHP
            if (errors.length > 0) 
            {
                e.preventDefault();
                alert(errors.join('\n'));
            }
    }
);
    }
    

    // // Contact Form Pop-up
    // document.querySelector(".contact-page-form").addEventListener("submit", function(e) 
    // {
    //     e.preventDefault();
    //     alert("Your message was sent successfully!");
    //     this.submit();
    // });
}
);



// Dark Mode Toggle
function toggleDarkMode() 
{
    document.body.classList.toggle('dark-theme');

    const isDark = document.body.classList.contains('dark-theme');
    localStorage.setItem('dark-mode', isDark);
}
const savedMode = localStorage.getItem('dark-mode');
if (savedMode === 'true') 
{
    document.body.classList.add('dark-theme');
}

// Scroll Navigation Bar Box Shadows
const header = document.querySelector('.header');
window.addEventListener('scroll', () => 
{
    if (window.scrollY > 50) 
        {header.classList.add('scrolled');} 
    else{header.classList.remove('scrolled');}
    }
);

// Active Page Status Style 
document.addEventListener("DOMContentLoaded", () => 
{
    let currentFile = window.location.pathname.split("/").pop() || "index.html";

    // Remove query string if present (?anything)
    currentFile = currentFile.split("?")[0];

    // Optional: treat empty string or "/" explicitly as index.html
    if (currentFile === "" || currentFile === "/") 
    {
        currentFile = "index.html";
    }

    document.querySelectorAll(".navigation-bar a").forEach(link => 
    {
        if (link.dataset.page === currentFile) 
        {
            link.classList.add("active");
        }
    }
    );
}
);



// Dropdown Menu Display when Click input Feild
const input = document.getElementById("searchInput");
const dropdown = document.getElementById("searchDropdown");
input.addEventListener
("focus", () => 
    {
        dropdown.style.display = "block";
    }
);
input.addEventListener
("blur", () => 
    {
    setTimeout
        (() => 
            {dropdown.style.display = "none";} , 200
        );
    }
);

// Search Button Coming Soon
document.querySelector(".button").addEventListener
("click", () => 
    {
        alert("Search Feature Coming Soon 🚧 ... ");
    }
);


function goBack() 
{
  history.back();
}

function goForward() 
{
  history.forward();
}