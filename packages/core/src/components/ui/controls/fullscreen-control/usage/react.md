```tsx {6,16}
import React from 'react';
import { Player, Ui, Controls, FullscreenControl } from '@viplayer/react';

function Example() {
  return (
    <Player>
      {/* ... */}
      <Ui>
        {/* ... */}
        <Controls>
          <FullscreenControl />
        </Controls>
      </Ui>
    </Player>
  );
}
```
