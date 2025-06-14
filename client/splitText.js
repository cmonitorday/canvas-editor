// Split text into characters, preserving complex Unicode symbols.
export function splitText(text) {
  const parts = []
  if (typeof Intl !== 'undefined' && Intl.Segmenter) {
    const segmenter = new Intl.Segmenter()
    for (const { segment } of segmenter.segment(text)) {
      parts.push(segment)
    }
  } else {
    for (const ch of Array.from(text)) {
      parts.push(ch)
    }
  }
  return parts
}

export default splitText
