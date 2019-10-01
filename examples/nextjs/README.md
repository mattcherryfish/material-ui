# Theme override issue example

## Reproduction steps

0. checkout repo
0. navigate to this folder, npm install, npm dev
0. visit localhost:3000
0. observe that the buttons are not the color one expects them to be
0. note that the aliceblue button turns aliceblue if all references to Button B are removed
0. note that the issue goes away by replacing `import { Button } from '@material-ui/core';` with `import Button from '@material-ui/core/Button/Button';`
