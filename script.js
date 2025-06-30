const modal = document.getElementById('myModal');
        const openBtn = document.querySelector('.open-modal-btn');
        const closeBtn = document.querySelector('.close-btn');

        // Open modal
        openBtn.addEventListener('click', () => {
            modal.style.display = 'flex';
        });

        // Close modal when clicking close button
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        // Close modal when clicking outside
        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });