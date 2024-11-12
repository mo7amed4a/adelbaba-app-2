import { categoryCardProps } from "@/components/categories/category";

export function splitArrayInHalf(arr: categoryCardProps[]): [categoryCardProps[], categoryCardProps[]] {
  const middleIndex = Math.ceil(arr.length / 2);
  const firstHalf = arr.slice(0, middleIndex);
  const secondHalf = arr.slice(middleIndex, arr.length);
  return [firstHalf, secondHalf];
}

export function splitTitleInHalf(arr: string): [string, string] {
const newTitle = arr.split(' ')
  const middleIndex = Math.ceil(newTitle.length / 2);
  const firstTitle = newTitle.slice(0, middleIndex);
  const secondTitle = newTitle.slice(middleIndex, newTitle.length);
  return [firstTitle.join(' '), secondTitle.join(' ')];
}
