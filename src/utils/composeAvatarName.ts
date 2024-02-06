export function composeAvatarName(firstName?: string, lastName?: string) {
  return `${(firstName?.[0] || "").toUpperCase()}${(
    lastName?.[0] || ""
  ).toUpperCase()}
  `;
}
