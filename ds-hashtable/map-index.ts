export type Document = {
  title: string;
  content: string;
};

export type DocumentIndex = Map<string, Set<Document>>;

/**
 * Builds a DocumentIndex from a list of Documents.
 * The index's keys are the words in all the documents,
 * and the values are the documents the word appears in.
 */
//

export function buildIndex(docs: Document[]): DocumentIndex {
  const documentIndex = new Map<string, Set<Document>>();
  for (const doc of docs) {
    const words = doc.content.match(/\b(\w+)\b/g);
    if (words) {
      for (let i = 0; i < words.length; i++) {
        const word = words[i].toLowerCase();
        if (!documentIndex.has(word)) {
          documentIndex.set(word, new Set<Document>());
        }
        documentIndex.get(word)?.add(doc);
      }
    }
  }

  return documentIndex;
}
