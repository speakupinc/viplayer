try {
  require('@viplayer/core');
} catch (e) {
  console.log(
    '\n\n',
    '\x1b[31m****************************************************************************',
    '\033[1m\x1b[31m\n 🚨 `@viplayer/core` was moved to peer dependencies, run `npm install @viplayer/core`',
    '\x1b[0m\x1b[31m\n ****************************************************************************',
    '\x1b[0m\n\n',
  );
}
