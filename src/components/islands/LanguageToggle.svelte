<script>
  export let lang = 'en';
  export let altPath = '/';
</script>

<a class="lang-toggle" href={altPath} aria-label="Switch language">
  {lang === 'en' ? 'ՀԱՅ' : 'EN'}
</a>

<style>
  .lang-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.25rem;
    padding: 0 0.65rem;
    border-radius: 999px;
    border: 1px solid var(--color-border);
    background: transparent;
    color: var(--color-text);
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.03em;
    text-decoration: none;
    white-space: nowrap;
  }
  .lang-toggle:hover {
    background: var(--color-border);
  }
</style>
