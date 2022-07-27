pnpm build core
cd packages/core
npm publish
cd ../..
pnpm build react
cd packages/react
npm publish
cd ../..
