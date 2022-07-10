```html {7,18,26} title="example.vue"
<template>
  <Player>
    <!-- ... -->
    <Ui>
      <!-- ... -->
      <Controls>
        <CaptionControl />
      </Controls>
    </Ui>
  </Player>
</template>

<script>
  import { Player, Ui, Controls, CaptionControl } from '@viplayer/vue';

  export default {
    components: {
      Player,
      Ui,
      Controls,
      CaptionControl,
    },
  };
</script>
```
