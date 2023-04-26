import { formatFirstOrLastName } from "./formatFirstOrLastName";

export function formatFullName(fullName) {
  const names = fullName.trim().split(" ");
  const formattedNames = names.map((name) => formatFirstOrLastName(name));
  return formattedNames.join(" ");
}
