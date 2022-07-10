```tsx {2,11}
import React from 'react';
import { Player, Ui, Controls, MuteControl } from '@viplayer/react';

function Example() {
  return (
    <Player>
      {/* ... */}
      <Ui>
        {/* ... */}
        <Controls>
          <MuteControl />
        </Controls>
      </Ui>
    </Player>
  );
}
```
