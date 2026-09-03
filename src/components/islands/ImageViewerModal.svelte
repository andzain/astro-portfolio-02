<script>
  export let images = [];

  let open = false;
  let activeIndex = 0;

  function openAt(i) {
    activeIndex = i;
    open = true;
  }

  function close() {
    open = false;
  }

  function next() {
    activeIndex = (activeIndex + 1) % images.length;
  }

  function prev() {
    activeIndex = (activeIndex - 1 + images.length) % images.length;
  }

  function onKeydown(e) {
    if (!open) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowRight') next();
    if (e.key === 'ArrowLeft') prev();
  }
</script>

<svelte:window on:keydown={onKeydown} />

<div class="gallery-grid">
  {#each images as image, i}
    <button class="gallery-thumb" on:click={() => openAt(i)} aria-label={`View ${image.alt}`}>
      <img src={image.src} alt={image.alt} loading="lazy" />
    </button>
  {/each}
</div>

{#if open}
  <div class="viewer-overlay" on:click={close}>
    <button class="viewer-close" on:click={close} aria-label="Close viewer">&times;</button>

    {#if images.length > 1}
      <button
        class="viewer-nav viewer-nav-prev"
        on:click|stopPropagation={prev}
        aria-label="Previous image"
      >&#8249;</button>
    {/if}

    <figure class="viewer-figure" on:click|stopPropagation>
      <img src={images[activeIndex].src} alt={images[activeIndex].alt} />
      {#if images[activeIndex].caption}
        <figcaption>{images[activeIndex].caption}</figcaption>
      {/if}
    </figure>

    {#if images.length > 1}
      <button
        class="viewer-nav viewer-nav-next"
        on:click|stopPropagation={next}
        aria-label="Next image"
      >&#8250;</button>
    {/if}
  </div>
{/if}

<style>
  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.75rem;
    margin: var(--space-3) 0;
  }

  @media (min-width: 640px) {
    .gallery-grid { grid-template-columns: repeat(3, 1fr); }
  }

  .gallery-thumb {
    padding: 0;
    border: none;
    background: var(--color-border);
    cursor: pointer;
    overflow: hidden;
  }

  .gallery-thumb img {
    width: 100%;
    aspect-ratio: 4 / 3;
    object-fit: cover;
    transition: transform 0.2s ease;
    display: block;
  }

  .gallery-thumb:hover img {
    transform: scale(1.04);
  }

  .viewer-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.9);
    z-index: 200;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .viewer-figure {
    max-width: 90vw;
    max-height: 85vh;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
  }

  .viewer-figure img {
    max-width: 90vw;
    max-height: 78vh;
    object-fit: contain;
  }

  .viewer-figure figcaption {
    color: #f2f2f2;
    font-size: 0.85rem;
    text-align: center;
  }

  .viewer-close {
    position: absolute;
    top: 1rem;
    right: 1.25rem;
    background: transparent;
    border: none;
    color: #f2f2f2;
    font-size: 2rem;
    line-height: 1;
    cursor: pointer;
  }

  .viewer-nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: transparent;
    border: none;
    color: #f2f2f2;
    font-size: 3rem;
    line-height: 1;
    cursor: pointer;
    padding: 0.5rem 1rem;
  }

  .viewer-nav-prev { left: 0.5rem; }
  .viewer-nav-next { right: 0.5rem; }

  @media (min-width: 768px) {
    .viewer-nav-prev { left: 1.5rem; }
    .viewer-nav-next { right: 1.5rem; }
  }
</style>
