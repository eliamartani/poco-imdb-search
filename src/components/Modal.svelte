<script>
  export let handleClose = () => {};
</script>

<style>
  .modal {
    animation: fadeIn 0.3s 1;
    align-items: center;
    background: rgba(58, 111, 148, 0.5);
    bottom: 0;
    display: flex;
    flex-direction: column;
    left: 0;
    margin: auto;
    overflow: auto;
    padding: 5rem 2rem 2rem;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 1;
  }

  .modal__close {
    background: url('./assets/icon_close.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: 40px 40px;
    border: 0;
    height: 40px;
    position: absolute;
    right: 30px;
    top: 20px;
    width: 40px;
    z-index: 1;
  }

  .modal__container {
    animation: slideDown 0.5s 1;
    background: #fff;
    box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.15);
    box-sizing: border-box;
    margin: auto;
    max-width: 40rem;
    padding: 30px;
    width: 100%;
    z-index: 1;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      visibility: hidden;
    }
    to {
      opacity: 1;
      visibility: visible;
    }
  }

  @keyframes slideDown {
    from {
      transform: translateY(-4rem);
    }
    to {
      transform: translateY(0);
    }
  }

  @media (min-width: 768px) {
    .modal {
      padding: 1rem;
    }

    .modal__close {
      position: fixed;
    }
  }
</style>

<div class="modal">
  <button class="modal__close" aria-label="Close" on:click={handleClose} />
  <article class="modal__container">
    <slot />
  </article>
</div>
