import { parseISO, formatDistanceToNow } from "date-fns";

export const TimeAgo = ({ timestamp }) => {
  let timeAgo = "";

  if (timestamp) {
    const date = parseISO(timestamp);
    const timePeriod = formatDistanceToNow(date);
    timeAgo = `${timePeriod} ago`;
  }
  //   &nbsp; es un espacio en blanco
  return (
    <span title="timestamp">
      &nbsp; <i>{timeAgo}</i>
    </span>
  );
};
