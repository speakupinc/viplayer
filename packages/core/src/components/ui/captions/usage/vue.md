```html {6,12,18} title="example.vue"
<template>
  <Player>
    <!-- ... -->
    <Ui>
      <!-- ... -->
      <Captions />
    </Ui>
  </Player>
</template>

<script>
  import { Player, Ui, Captions } from '@viplayer/vue';

  export default {
    components: {
      Player,
      Ui,
      Captions,
    },
  };
</script>
```
