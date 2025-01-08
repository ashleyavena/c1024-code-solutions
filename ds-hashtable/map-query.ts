import { Document, DocumentIndex } from './map-index';

/**
 * Queries a DocumentIndex and returns all the Documents that contain
 * any of the words in the query, as a Set.
 */
export function queryIndex(index: DocumentIndex, query: string): Set<Document> {
  const documentIndex = new Set<Document>();
  const queryWords =
    query.match(/\b(\w+)\b/g)?.map((word) => word.toLowerCase()) || [];
  for (const word of queryWords) {
    const documents = index.get(word);
    if (documents) {
      documents.forEach((doc) => documentIndex.add(doc));
    }
  }

  return documentIndex;
}

// export function queryIndex(index: DocumentIndex, query: string): Set<Document> {
//   const documentIndex = new Set<Document>();
//   const queryWords = query.content.match(/\b(\w+)\b/g);
//   for (const words in queryWords) {
//     const documents = index.get(words);
//     if (documents) {
//       documents.forEach((d) => documentIndex.add(d));
//     }
//   }

//   return documentIndex;
// }
