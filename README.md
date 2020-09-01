# codemirror-addon-indent-guide

Codemirror addon to include indentation guidelines.

# How to use

1. Install the library from npm

```bash
npm i codemirror-addon-indent-guide
```

2. Import the module addon after importing codemirror module

```javascript
import 'codemirror-addon-indent-guide';
```

3. Setup `indentGuide` and `indentUnit` options when initializing codemirror editor. Example:

```javascript
CodeMirror.fromTextArea(elem, {
  indentUnit: 2,
  indentGuide: true,
});
```

4. Style it with some css using the classname `cm-indent-guide`. Example:

```css
.cm-indent-guide {
  position: relative;
  border-left: 1px dotted #bbb;
}
```
