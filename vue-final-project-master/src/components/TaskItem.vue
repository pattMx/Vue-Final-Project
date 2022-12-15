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


</style>