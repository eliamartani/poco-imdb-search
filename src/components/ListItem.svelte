<script context="module">
  import { writable } from 'svelte/store';

  // exportable property
  export const imdbID = writable('');
</script>

<script>
  export let item;

  $: imageNotFound = item.Poster === 'N/A';
  $: backgroundImage = !imageNotFound ? item.Poster : '';

  // handler
  const handleClick = () => {
    imdbID.set(item.imdbID);
  };
</script>

<style>
  a {
    color: #000;
    text-decoration: none;
  }

  a:hover {
    color: #24b3b3;
  }

  h2 {
    font-size: 1rem;
    max-width: 180px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  p {
    font-size: 0.8rem;
  }

  h2,
  p {
    margin: 0;
  }

  .item__poster {
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    display: block;
    height: 256px;
    width: 180px;
  }

  .item__poster.item__poster--not-found {
    background: #89b7d2;
  }

  .item__poster.item__poster--not-found:after {
    align-items: center;
    color: #fff;
    content: 'N/A';
    display: flex;
    flex-direction: row;
    font-size: 1rem;
    height: 100%;
    justify-content: center;
    width: 100%;
  }
</style>

<a class="item" href="javascript:;" on:click={handleClick}>
  <div
    aria-label={item.Title}
    class="item__poster"
    class:item__poster--not-found={imageNotFound}
    style="background-image: url('{backgroundImage}');"
    title={item.Title} />

  <div>
    <h2 title={item.Title}>{item.Title}</h2>
    <p>{item.Year}</p>
  </div>
</a>
