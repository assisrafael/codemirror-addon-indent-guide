import CodeMirror from 'codemirror';

CodeMirror.defineOption('indentGuide', false, indentGuideAddon);

const GUIDE_CLASS = 'indent-guide';

/**
 * Heavily inspired by https://github.com/lkcampbell/brackets-indent-guides
 */
function indentGuideAddon(cm, val, prev) {
  if (prev == CodeMirror.Init) {
    prev = false;
  }

  if (prev && !val) {
    cm.removeOverlay('indent-guide');

    return;
  }

  if (!prev && val) {
    const hideFirstIndentGuide = typeof val === 'object' ? val.hideFirst : false;

    cm.addOverlay({
      token(stream) {
        let char = '';
        let colNum = 0;
        let isTabStart = false;

        char = stream.next();
        colNum = stream.column();

        // Check for "hide first guide" preference
        if (hideFirstIndentGuide && colNum === 0) {
          return null;
        }

        if (char === '\t') {
          return GUIDE_CLASS;
        }

        if (char !== ' ') {
          stream.skipToEnd();

          return null;
        }

        const spaceUnits = cm.getOption('indentUnit');

        isTabStart = !(colNum % spaceUnits);

        if (char === ' ' && isTabStart) {
          return GUIDE_CLASS;
        }

        return null;
      },
      // flattenSpans: false,
      name: 'indent-guide',
    });
  }
}
