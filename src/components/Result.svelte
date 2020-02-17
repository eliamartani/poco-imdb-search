<script>
  export let search;
  export let totalRecords;
</script>

<style>
  div {
    display: flex;
    flex-direction: row;
    margin: 1.5rem 0;
    padding: 0 1rem;
  }

  p {
    font-size: 0.9rem;
  }

  p + p {
    margin-left: auto;
    text-align: right;
  }

  .result__count strong {
    color: #3e7886;
  }

  .result__search strong {
    color: #cc4040;
  }
</style>

<div class="result">
  <p class="result__search">
    Your search:
    <strong>{search}</strong>
  </p>

  <p class="result__count">
    Total Results:
    <strong>{totalRecords}</strong>
  </p>
</div>
