```html {4,9,14} title="example.vue"
<template>
  <Player>
    <!-- ... -->
    <DefaultUi />
  </Player>
</template>

<script>
  import { Player, DefaultUi } from '@viplayer/vue';

  export default {
    components: {
      Player,
      DefaultUi,
    },
  };
</script>
```
