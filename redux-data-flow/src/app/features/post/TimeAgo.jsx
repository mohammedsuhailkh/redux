// import { formatDistanceToNow, parseISO } from "date-fns"
import parseISO from "date-fns/parseISO";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const TimeAgo = ({ timestamp }) => {
  let timeAgo = '';
  if (timestamp) {
      const date = parseISO(timestamp);
      const timePeriod = formatDistanceToNow(date);
      timeAgo = `${timePeriod} ago`; 
  }
  

    return (
        <span title={timestamp}>
            &nbsp; <i>{timeAgo} iii</i>
        </span>
    )
}
export default TimeAgo