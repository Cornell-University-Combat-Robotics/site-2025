# Possible Development Issues

### The local Vite dev server isn't starting

You might not have read site-2025/README.md&nbsp;&nbsp;(；￣Д￣).

### Cannot find module '...' or its corresponding type declarations.ts

You may run into this VSCode issue when importing certain files. Don't worry, you can ignore it!

### My code isn't automatically formatting

One benefit that ESLint offers is automatic formatting of your code. This is available upon manually saving the file by default, but to enable it upon copy-paste, do the following:
`Open the VS Code settings (CMD/CTRL + ,) and find the editor.formatOnPaste. Check it.`

### I'm running into problems with npm

Missing (not installed) dependencies may be introduced from others' pushes, causing issues when starting the local development server or pushing/pulling. Try running `npm install`.
