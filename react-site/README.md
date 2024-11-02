# Tips for Development

One benefit that ESLint offers is automatic formatting of your code. This is available upon manually saving the file by default, 
but to enable it upon copy-paste, do the following:
Open the VS Code settings (CMD/CTRL + ,) and find the editor.formatOnPaste. Check it.

This is an issue we have to follow up on later, but sometimes your computer's local light/dark mode settings may override 
the website's settings, inverting all the colors and making it looks weird af. For a quick fix, change line 59 in 
`index.css` from dark to light.