```tsx {2,11}
import React from 'react';
import { Player, Ui, Controls, PipControl } from '@viplayer/react';

function Example() {
  return (
    <Player>
      {/* ... */}
      <Ui>
        {/* ... */}
        <Controls>
          <PipControl />
        </Controls>
      </Ui>
    </Player>
  );
}
```
