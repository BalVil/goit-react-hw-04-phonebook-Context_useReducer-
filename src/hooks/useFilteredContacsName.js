export const getFilteredContactsName = state => {
  const normalizedFilter = state.filter.toLowerCase();

  return state.items.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );
};
