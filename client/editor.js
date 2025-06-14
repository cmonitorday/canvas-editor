// Wrapper around the bundled canvas-editor to provide clear exports.
// The bundle exposes a global `canvas-editor` object. This module re-exports
// the main classes using readable names so they can be easily imported.

const CanvasEditor = window['canvas-editor'];

// Main editor class
export const WordProcessor = CanvasEditor.Editor;

// Command helper used internally by the editor
export const EditorCommand = CanvasEditor.Command;

export default WordProcessor;
