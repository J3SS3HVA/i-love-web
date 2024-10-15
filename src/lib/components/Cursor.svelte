<script>
    import { onMount } from 'svelte';
  
    let mouseFollow;
  
    onMount(() => {
      // Function to handle mouse movement
      const handleMouseMove = (e) => {
        const x = e.clientX - 15; // Adjusting for the center of the element
        const y = e.clientY - 15;
        
        // Update the position of the mouseFollow element
        mouseFollow.style.top = `${y}px`;
        mouseFollow.style.left = `${x}px`;
      };
  
      // Add event listener for mousemove
      document.addEventListener('mousemove', handleMouseMove);
  
      // Cleanup function to remove the event listener
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
      };
    });
  </script>

<div class="mouse-follow" bind:this={mouseFollow}></div>
  
  <style>
    .mouse-follow {
      z-index: 10000;
      position: absolute;
      width: 30px; /* Set your desired size */
      height: 30px; /* Set your desired size */
      border: groove var(--tertiary-color);
      border-radius: 50%; /* Make it circular */
      pointer-events: none; /* Prevent it from interfering with mouse events */
    }

    @media (max-width: 1180px){
      .mouse-follow{
        display: none;
      }
    }
  </style>
  
  
  