```tsx {2,11}
import React from 'react';
import { Player, Ui, Settings, MenuItem } from '@viplayer/react';

function Example() {
  return (
    <Player>
      {/* ... */}
      <Ui>
        {/* ... */}
        <Settings>
          <MenuItem label="Playback Quality" hint="Auto" />
        </Settings>
      </Ui>
    </Player>
  );
}
```
