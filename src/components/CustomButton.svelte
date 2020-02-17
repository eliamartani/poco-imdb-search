<script>
  export let handleClick = () => {};
</script>

<style>
  button {
    background: #fff;
    border: 1px solid #1c7d98;
    color: #1c7d98;
    font-size: 1rem;
    overflow: hidden;
    padding: 10px 30px;
    position: relative;
    text-transform: uppercase;
    margin: 0 auto;
    z-index: 1;
  }

  button:after {
    content: '';
    background: #1c7d98;
    border-radius: 50%;
    height: 1px;
    left: 50%;
    opacity: 0;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: opacity 0.2s ease-out, transform 0.2s ease-out;
    visibility: hidden;
    width: 1px;
    z-index: -1;
  }

  button:focus,
  button:hover {
    color: #fff;
  }

  button:focus:after,
  button:hover:after {
    opacity: 1;
    transform: translate(-50%, -50%) scale(200);
    visibility: visible;
  }
</style>

<button on:click={handleClick}>
  <slot />
</button>
