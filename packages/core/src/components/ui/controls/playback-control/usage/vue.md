```html {7,18,26} title="example.vue"
<template>
  <Player>
    <!-- ... -->
    <Ui>
      <!-- ... -->
      <Controls>
        <PlaybackControl />
      </Controls>
    </Ui>
  </Player>
</template>

<script>
  import { Player, Ui, Controls, PlaybackControl } from '@viplayer/vue';

  export default {
    components: {
      Player,
      Ui,
      Controls,
      PlaybackControl,
    },
  };
</script>
```
