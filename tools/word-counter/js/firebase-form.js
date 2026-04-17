/* ===================================================
   Best Digital Marketer - Word Counter Tool
   firebase-form.js - Contact form with Firebase
   Type: ES Module (import as type="module")
   =================================================== */

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-firestore.js";

const app = initializeApp({
    apiKey: "AIzaSyAg-BsBbrU2VhzZWuVlulhoYamXtq8Zmyg",
    authDomain: "bdmform.firebaseapp.com",
    projectId: "bdmform",
    storageBucket: "bdmform.firebasestorage.app",
    messagingSenderId: "64822758637",
    appId: "1:64822758637:web:f5cc66ef175eb495e790e4"
});

const db = getFirestore(app);

document.getElementById('contactForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const form = e.target;
    const btn = form.querySelector('.form-submit');
    btn.textContent = 'Sending...';
    btn.disabled = true;
    try {
        await addDoc(collection(db, 'contactMessages'), {
            name: form.querySelector('[name="name"]').value || '',
            email: form.querySelector('[name="email"]').value || '',
            mobile: form.querySelector('[name="mobile"]').value || '',
            website: form.querySelector('[name="website"]').value || '',
            message: form.querySelector('[name="message"]').value || '',
            page: 'word-counter',
            createdAt: serverTimestamp()
        });

        // Reuse the toast from tool.js
        const toast = document.getElementById('toast');
        toast.textContent = 'Message sent successfully!';
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 2500);
        form.reset();
    } catch (err) {
        console.error('Firebase error:', err);
        alert('Something went wrong. Please try again.');
    } finally {
        btn.textContent = 'Send Message';
        btn.disabled = false;
    }
});
