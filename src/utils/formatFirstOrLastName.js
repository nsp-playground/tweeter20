export function formatFirstOrLastName(firstName) {
  const formattedName = firstName.trim().toLowerCase();
  return formattedName.charAt(0).toUpperCase() + formattedName.slice(1);
}
