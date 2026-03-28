export function formatDate(dateString) {
  if (!dateString) return "Unknown";

  const date = new Date(dateString);

  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}