export function getRandomItem(list: any[]) {
  const randomIndex = Math.floor(Math.random() * list.length);

  return list[randomIndex];
}
