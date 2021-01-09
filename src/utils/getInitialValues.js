function getInitialValues(values) {
  const { createdAt, updatedAt, id, ...rest } = values
  return rest
}

export default getInitialValues
