document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Replace with your actual Render/Termux URL
    const API_URL = "http://localhost:5000/api/login";

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();

        if (response.ok) {
            alert("Welcome to Lumière!");
            localStorage.setItem('token', data.token); // Save login session
            window.location.href = "index.html"; // Redirect to shop
        } else {
            alert(data.message || "Invalid credentials");
        }
    } catch (error) {
        console.error("Connection error:", error);
    }
});
