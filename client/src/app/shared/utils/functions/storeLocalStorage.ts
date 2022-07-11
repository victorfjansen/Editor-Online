export const storeInLocalStorage = (key: string, data: string) => {
  const item = localStorage.setItem(key, JSON.stringify(data))
  return item
}

export const getItemLocalStorage = (key: string) => {
  const item = localStorage.getItem(key)

  if (item) {
    const parsedItem = JSON.parse(item)
    return parsedItem
  }
  return null
}
