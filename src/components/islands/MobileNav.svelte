<script>
  export let links = [];
  let open = false;

  function toggleMenu() {
    open = !open;
  }

  function close() {
    open = false;
  }
</script>

<button
  class="hamburger"
  class:is-open={open}
  on:click={toggleMenu}
  aria-label="Toggle navigation menu"
  aria-expanded={open}
  aria-controls="mobile-nav-panel"
>
  <span></span>
  <span></span>
  <span></span>
</button>

{#if open}
  <div class="mobile-nav-overlay" on:click={close}></div>
  <nav id="mobile-nav-panel" class="mobile-nav-panel" aria-label="Mobile primary">
    <ul>
      {#each links as link}
        <li>
          <a href={link.href} on:click={close}>{link.label}</a>
        </li>
      {/each}
    </ul>
  </nav>
{/if}

<style>
  .hamburger {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    width: 2.25rem;
    height: 2.25rem;
    background: transparent;
    border: none;
    cursor: pointer;
    z-index: 100;
    position: relative;
  }

  @media (min-width: 768px) {
    .hamburger { display: none; }
  }

  .hamburger span {
    display: block;
    height: 2px;
    width: 22px;
    background: var(--color-text);
    transition: transform 0.2s ease, opacity 0.2s ease;
  }

  .hamburger.is-open span:nth-child(1) {
    transform: translateY(7px) rotate(45deg);
  }
  .hamburger.is-open span:nth-child(2) {
    opacity: 0;
  }
  .hamburger.is-open span:nth-child(3) {
    transform: translateY(-7px) rotate(-45deg);
  }

  .mobile-nav-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 90;
  }

  .mobile-nav-panel {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: min(80vw, 320px);
    background: var(--color-bg);
    border-left: 1px solid var(--color-border);
    z-index: 95;
    padding: 5rem 1.5rem 2rem;
  }

  .mobile-nav-panel ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .mobile-nav-panel a {
    color: var(--color-text);
    text-decoration: none;
    font-size: 1.25rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
</style>
