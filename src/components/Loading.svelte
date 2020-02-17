<style>
  .loading-ring {
    align-items: center;
    background: rgba(58, 111, 148, 0.2);
    display: flex;
    flex-direction: row;
    height: 100vh;
    justify-content: center;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 1;
  }
  .loading-ring:after {
    content: ' ';
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: loading-ring 1.2s linear infinite;
  }
  @keyframes loading-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>

<div class="loading-ring" aria-label="Loading" title="Loading" />
