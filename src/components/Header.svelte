<script context="module">
  import { writable } from 'svelte/store';

  // exportable property
  export const search = writable('');
</script>

<script>
  import debounce from '../shared/debounce';

  // internal
  const timeoutTyping = 500;
  let isSearching = false;

  // handlers
  const handleSearch = debounce(evt => {
    const { value } = evt.target;

    isSearching = value && value.length > 2;

    search.set(value);
  }, timeoutTyping);
</script>

<style>
  h1 {
    color: #fff;
    font-size: 2rem;
    font-weight: 800;
    margin-bottom: 1.5rem;
    position: relative;
    text-transform: uppercase;
    transition: font-size 0.3s;
  }

  img {
    height: 80px;
    margin-top: -80px;
    width: 80px;
  }

  label {
    max-width: 40rem;
    width: 100%;
  }

  input {
    background: url('./assets/icon_search.svg');
    background-color: #fff;
    background-position: center right 20px;
    background-repeat: no-repeat;
    background-size: 20px 20px;
    border: 0;
    box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.15);
    box-sizing: border-box;
    color: #888;
    font-size: 1rem;
    padding: 15px 50px 15px 15px;
    width: 100%;
  }

  .header {
    align-items: center;
    background: #1c7d98;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    padding: 0 1rem;
    transition: height 0.3s;
  }

  .header.header--searching {
    height: 220px;
  }

  .header.header--searching h1 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  .header.header--searching img {
    display: none;
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 3rem;
    }

    img {
      height: 120px;
      margin-top: -120px;
      width: 120px;
    }

    input {
      font-size: 1.2rem;
      padding: 20px 60px 20px 20px;
      background-size: 30px 30px;
    }
  }
</style>

<div class="header" class:header--searching={isSearching}>
  <img src="./assets/icon_movie.svg" alt="Movie Search" />

  <h1>Movie Search</h1>

  <label aria-label="Search any movie you want">
    <input
      type="text"
      on:keyup={handleSearch}
      placeholder="Search any movie you want" />
  </label>
</div>
