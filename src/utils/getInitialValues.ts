function getInitialValues<T extends { createdAt?: string; updatedAt?: string; id?: string }>(
  values: T,
): any {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { createdAt, updatedAt, id, ...rest } = values
  return rest
}

export default getInitialValues
