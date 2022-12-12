<template>
  <article class="task-item">
    <header class="task-header">
      <h5 class="task-title">
        <slot name="content" />
      </h5>
    </header>
    <aside class="sidebar">
      <slot
        name="buttons"
        class="buttons"
      />
    </aside>
  </article>
</template>

<style scoped>
.task-item {
    display: grid;
    background: lightblue;
    grid-auto-columns: 2fr 0.5fr;
    grid-template-areas: 
        "hd side"
}

.task-header {
    grid-area: hd;
}

.sidebar {
    grid-area: side;
    display: grid;
}
.task-title {
    margin: 0;
    padding: 0.5rem;
}
button {
    background: none;
    border: none;
}

</style>
