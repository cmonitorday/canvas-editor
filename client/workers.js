// Convenience wrappers for worker-based computations in the bundled editor.
// These helpers call the editor instance methods that internally use Web Workers.

/**
 * Count the number of words in the editor using the worker.
 * @param {import('./editor.js').WordProcessor} editor
 * @returns {Promise<number>} word count
 */
export function countWords(editor) {
  return editor.getWordCount();
}

/**
 * Generate the catalog (table of contents) using the worker.
 * @param {import('./editor.js').WordProcessor} editor
 * @returns {Promise<import('../src/editor/interface/Catalog').ICatalog|null>}
 */
export function buildCatalog(editor) {
  return editor.getCatalog();
}

/**
 * Retrieve all group identifiers using the worker.
 * @param {import('./editor.js').WordProcessor} editor
 * @returns {Promise<string[]>}
 */
export function fetchGroupIds(editor) {
  return editor.getGroupIds();
}
