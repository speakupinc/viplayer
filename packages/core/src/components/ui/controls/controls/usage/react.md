```tsx {2,10-12}
import React from 'react';
import { Player, Ui, Controls } from '@viplayer/react';

function Example() {
  return (
    <Player>
      {/* ... */}
      <Ui>
        {/* ... */}
        <Controls fullWidth activeDuration={3200}>
          {/* ... */}
        </Controls>
      </Ui>
    </Player>
  );
}
```
