import { formatDistanceToNow } from "date-fns";

export const formatTimeAgo = (date: Date | string): string => {
  const parsedDate = typeof date === "string" ? new Date(date) : date;
  return formatDistanceToNow(parsedDate, { addSuffix: true }).replace("about ", "");
};
