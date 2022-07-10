```html {7,18,26} title="example.vue"
<template>
  <Player>
    <!-- ... -->
    <Ui>
      <!-- ... -->
      <Controls>
        <VolumeControl />
      </Controls>
    </Ui>
  </Player>
</template>

<script>
  import { Player, Ui, Controls, VolumeControl } from '@viplayer/vue';

  export default {
    components: {
      Player,
      Ui,
      Controls,
      VolumeControl,
    },
  };
</script>
```
