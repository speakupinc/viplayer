```html {6,12,18} title="example.vue"
<template>
  <Player>
    <!-- ... -->
    <Ui>
      <!-- ... -->
      <DefaultSettings />
    </Ui>
  </Player>
</template>

<script>
  import { Player, Ui, DefaultSettings } from '@viplayer/vue';

  export default {
    components: {
      Player,
      Ui,
      DefaultSettings,
    },
  };
</script>
```
