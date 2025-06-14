// Public entry point that re-exports the modular wrappers with explicit names.
export { default, WordProcessor, EditorCommand } from './editor.js';
export * from './constants.js';
export {
  createDomFromElements,
  extractElementsFromHTML,
  extractTextFromElements,
  splitPlainText,
} from './utils.js';
export { splitText } from './splitText.js';
export { countWords, buildCatalog, fetchGroupIds } from './workers.js';
