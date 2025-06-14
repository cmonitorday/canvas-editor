// Utility functions from the canvas-editor bundle with more descriptive names.
// These functions operate on the editor's element data structures.

const CanvasEditor = window['canvas-editor'];
import splitText from './splitText.js';

/** Convert an element list to a DOM structure. */
export const createDomFromElements = CanvasEditor.createDomFromElementList;

/** Parse HTML into an element list. */
export const extractElementsFromHTML = CanvasEditor.getElementListByHTML;

/** Extract plain text from an element list. */
export const extractTextFromElements = CanvasEditor.getTextFromElementList;

/** Split text into characters. */
export const splitPlainText = splitText;
