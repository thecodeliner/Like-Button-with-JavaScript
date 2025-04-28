 <script>
       const icon = document.getElementById('icon');
        const likecount = document.getElementById('likecount');
        const button = document.getElementById('likeButton');

        let count = 0; // Initialize count

        button.addEventListener('click', function() {
            // Toggle the icon classes
            if (icon.classList.contains('fa-regular')) {
                icon.classList.remove('fa-regular');
                icon.classList.add('fa-solid');
                count++; // Increment count
            } else {
                icon.classList.remove('fa-solid');
                icon.classList.add('fa-regular');
                count--; // Decrement count (if you want to allow unliking)
            }

            // Update the like count display
            likecount.textContent = count + " like" + (count === 1 ? "" : "s");
        });
       
        
    </script>
