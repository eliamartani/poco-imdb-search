<script>
  import Modal from './Modal.svelte';

  export let movie;
  export let handleClose = () => {};

  $: showPoster = movie.Poster !== 'N/A';
</script>

<style>
  .movie__plot {
    margin-top: 1.5rem;
  }

  .movie__poster {
    font-size: 0;
    margin-bottom: 1rem;
    text-align: center;
  }

  .movie__poster img {
    max-height: 330px;
  }

  .movie__ratings {
    display: flex;
    flex-direction: row;
    margin-top: 1rem;
  }

  .movie__ratings div {
    align-items: center;
    background: #f0f0f0;
    display: flex;
    flex-direction: column;
    font-size: 0.95rem;
    height: 60px;
    justify-content: center;
    padding: 5px;
    width: calc(100% / 3 - 10px);
  }

  .movie__ratings div + div {
    margin-left: 5px;
  }
</style>

<Modal {handleClose}>
  {#if showPoster}
    <div class="movie__poster">
      <img src={movie.Poster} alt={movie.Title} />
    </div>
  {/if}
  <h1>{movie.Title}</h1>
  <p>{movie.Released}</p>
  <p>{movie.Genre}</p>

  <div class="movie__ratings">
    {#each movie.Ratings as rating}
      <div>
        <p>{rating.Source}</p>
        <p>
          <strong>{rating.Value}</strong>
        </p>
      </div>
    {/each}
  </div>

  <p class="movie__plot">{movie.Plot}</p>
</Modal>
