// Open feedback modal
document.getElementById('feedbackButton').addEventListener('click', function() {
    document.getElementById('feedbackModal').style.display = 'flex';
});

// Close feedback modal
document.getElementById('closeModal').addEventListener('click', function() {
    document.getElementById('feedbackModal').style.display = 'none';
});

// Submit feedback (Simulated)
document.getElementById('submitFeedback').addEventListener('click', function() {
    const server = document.getElementById('serverSelect').value;
    const feedback = document.getElementById('feedbackMessage').value;

    // Validate feedback
    if (!feedback.trim()) {
        alert("Please enter your feedback!");
        return;
    }

    // Simulate successful submission
    setTimeout(() => {
        alert("Feedback submitted successfully (simulated)!");
        document.getElementById('feedbackModal').style.display = 'none';
        
        // Optionally reset form
        document.getElementById('feedbackMessage').value = '';
        document.getElementById('serverSelect').selectedIndex = 0;
    }, 500);
});

