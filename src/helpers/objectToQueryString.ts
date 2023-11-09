// Recebe um obj { a: 'a', b: 1 } e retorna uma string '?a=a&b=1'

export function objectToQueryString(obj: { [key: string]: string | number }) {
  const queryString = Object.entries(obj)
    .filter(([, value]) => value !== '')
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`,
    )
    .join('&')

  return queryString ? `?${queryString}` : ''
}
