import { findAncestor } from 'typescript';
import { BinarySearchTree, TreeNode } from './lib/bst';

/**
 * Returns the smallest value in the BST, or `Infinity` if the tree is empty.
 */
export function smallest(bst: BinarySearchTree): number {
  if (!bst.root) return Infinity;
  return smallestRecursive(bst.root);
}

function smallestRecursive(node: TreeNode | undefined): number {
  if (!node) return -Infinity;
  while (node.left) {
    node = node.left;
  }
  return node.value;
}

// function smallestRecursive(node: TreeNode | undefined): number {
//   if (!node) return -Infinity;
//   if (!node.left) return node.value;
//   if (!node.right) return node.value;
//   return Math.min(
//     node.value,
//     smallestRecursive(node.left),
//     smallestRecursive(node.right)
//   );
// }
