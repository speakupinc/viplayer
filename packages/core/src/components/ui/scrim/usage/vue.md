```html {6,12,18} title="example.vue"
<template>
  <Player>
    <!-- ... -->
    <Ui>
      <!-- ... -->
      <Scrim />
    </Ui>
  </Player>
</template>

<script>
  import { Player, Ui, Scrim } from '@viplayer/vue';

  export default {
    components: {
      Player,
      Ui,
      Scrim,
    },
  };
</script>
```
