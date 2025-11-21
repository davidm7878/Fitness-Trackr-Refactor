import { Link, useParams } from "react-router";

export default function ActivityItem({activity}) {


const {activity.id} = useParams()


return (
    <div>
      <section>
        <h1>{activity.name}</h1>
        <Link to="/activities">Back to all activities</Link>
      </section>
    </div>
  );
}