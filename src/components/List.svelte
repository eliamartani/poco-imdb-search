<script>
  import Button from './CustomButton.svelte';
  import Loading from './Loading.svelte';
  import ListItem, {imdbID} from './ListItem.svelte';
  import Movie from './Movie.svelte';
  import Result from './Result.svelte';

  import {search} from './Header.svelte';
  import {fetchMovies, getMovie} from '../service/movies';
  import debounce from '../shared/debounce';

  const timeoutScroll = 200;
  const resultsPerRequest = 10;

  let container;
  let errorMessage;
  let items = [];
  let movie;
  let page = 1;
  let searchText = '';
  let showLoading = false;
  let totalPages = 0;
  let totalRecords = 0;

  // reactive variables
  $: showLoadMore = totalRecords > 0 && page < totalPages;
  $: showResult = !!searchText;

  // fetch data
  const fetchData = async () => {
    try {
      showLoading = true;

      const {data} = await fetchMovies(searchText, page);

      if (data.Error) {
        errorMessage = data.Error;

        return;
      }

      items = [...items, ...data.Search];
      totalRecords = Number(data.totalResults);
      totalPages = Math.ceil(totalRecords / resultsPerRequest);
    } catch (err) {
      console.error('🔥', err);
    } finally {
      showLoading = false;
    }
  };

  const fetchDataMovie = async id => {
    try {
      showLoading = true;

      const {data} = await getMovie(id);

      movie = data;
    } catch (err) {
      console.error('🔥', err);
    } finally {
      showLoading = false;
    }
  };

  const resetData = () => {
    errorMessage = null;
    items = [];
    page = 1;
    totalPages = 0;
    totalRecords = 0;
  };

  // handlers
  const handleClick = async () => {
    page++;

    await fetchData(true);
  };

  const handleClose = () => {
    imdbID.set('');
  };

  // subscribe to search
  imdbID.subscribe(async id => {
    movie = null;

    if (id) {
      await fetchDataMovie(id);
    }
  });

  search.subscribe(text => {
    searchText = text.trim();

    resetData();

    if (searchText) {
      fetchData();
    }
  });
</script>

<style>
  li {
    display: inline-block;
    margin: 0 1rem 2rem;
    position: relative;
    vertical-align: top;
  }

  p {
    color: #58a068;
    font-size: 2rem;
    margin: 0 1rem;
  }

  ul {
    font-size: 0;
    list-style: none;
  }

  .list {
    height: 0;
    overflow: hidden;
  }

  .list.list--show {
    flex: auto;
    overflow: auto;
    padding-bottom: 2rem;
  }

  .list__action {
    text-align: center;
  }

  .list__container {
    margin: 0 auto;
    max-width: 1060px;
    width: 100%;
  }
</style>

<div class="list" class:list--show={showResult} bind:this={container}>
  <div class="list__container">
    <Result search={$search} {totalRecords} />

    {#if !!errorMessage}
      <p>{errorMessage}</p>
    {/if}

    <ul>
      {#each items as item}
        <li>
          <ListItem {item} />
        </li>
      {/each}
    </ul>

    {#if showLoadMore}
      <div class="list__action">
        <Button {handleClick}>Load more</Button>
      </div>
    {/if}

    {#if movie}
      <Movie {movie} {handleClose} />
    {/if}

    {#if showLoading}
      <Loading />
    {/if}
  </div>
</div>
