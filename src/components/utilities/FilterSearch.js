
export default function FilterSearch(contacts, searchTerm) {
    
  const filteredUser = contacts.filter((user) => {
    const search = user.username
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return search;
  });
  return filteredUser
}
