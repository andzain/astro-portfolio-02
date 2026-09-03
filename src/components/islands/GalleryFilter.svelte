<script>
  export let categories = [];
  let active = 'all';

  function setActive(cat) {
    active = cat;
    const cards = document.querySelectorAll('.work-card');
    cards.forEach((card) => {
      const el = /** @type {HTMLElement} */ (card);
      const show = cat === 'all' || el.dataset.category === cat;
      el.style.display = show ? '' : 'none';
    });
  }
</script>

<div class="filter-bar" role="tablist" aria-label="Filter works by category">
  <button
    role="tab"
    class:active={active === 'all'}
    aria-selected={active === 'all'}
    on:click={() => setActive('all')}
  >
    All
  </button>
  {#each categories as cat}
    <button
      role="tab"
      class:active={active === cat}
      aria-selected={active === cat}
      on:click={() => setActive(cat)}
    >
      {cat}
    </button>
  {/each}
</div>

<style>
  .filter-bar {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 2rem;
  }
  .filter-bar button {
    padding: 0.4rem 0.9rem;
    border: 1px solid var(--color-border);
    background: transparent;
    color: var(--color-muted);
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    cursor: pointer;
    border-radius: 999px;
  }
  .filter-bar button.active {
    color: var(--color-bg);
    background: var(--color-text);
    border-color: var(--color-text);
  }
</style>
