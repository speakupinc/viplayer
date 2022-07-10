```html {7,18,26} title="example.vue"
<template>
  <Player>
    <!-- ... -->
    <Ui>
      <!-- ... -->
      <Controls>
        <FullscreenControl />
      </Controls>
    </Ui>
  </Player>
</template>

<script>
  import { Player, Ui, Controls, FullscreenControl } from '@viplayer/vue';

  export default {
    components: {
      Player,
      Ui,
      Controls,
      FullscreenControl,
    },
  };
</script>
```
