const hash = (string: string) => {
  let chr,
      hash = 0,
      index
  if (string.length === 0)
    return hash
  for (index = 0; index < string.length; index += 1) {
    chr = string.charCodeAt(index)
    hash = (hash << 5) - hash + chr
    hash |= 0
  }
  return hash
}

export default hash
