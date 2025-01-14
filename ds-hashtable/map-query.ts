import { Document, DocumentIndex } from './map-index';

/**
 * Queries a DocumentIndex and returns all the Documents that contain
 * any of the words in the query, as a Set.
 */
export function queryIndex(index: DocumentIndex, query: string): Set<Document> {
  const documentIndex = new Set<Document>();
  const terms = query.toLocaleLowerCase().match(/\b(\w+)\b/g);
  terms?.forEach((t) => {
    const documents = index.get(t);
    documents?.forEach((doc) => documentIndex.add(doc));
  });

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
