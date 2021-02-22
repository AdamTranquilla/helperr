import "./Jobs.css";
import { makeStyles } from "@material-ui/core/styles";
import PostedListItem from "../JobList/PostedListItem";
import AppliedListItem from "../JobList/AppliedListItem";

export default function All(props) {
  const user = props.state.currentUser;
  const users = Object.values(props.state.users);
  const jobs = Object.values(props.state.jobs);
  const categories = Object.values(props.state.categories);

  return (
    <>
      <h3>Posted Jobs</h3>
      {jobs
        .filter((job) => job.client_id === user)
        .map((myPosts) => (
          <PostedListItem
            {...myPosts}
            job_id={myPosts.id}
            categories={categories}
            users={users}
            setJobView={props.setJobView}
            cookies={props.cookies}
            state={props.state}
            setProfile={props.setProfile}
            user={user}
            setCoord={props.setCoord}
          />
        ))}
      <h3>Applied Jobs</h3>
      {jobs
        .filter((job) => job.helper_id === user)
        .map((myApps) => (
          <AppliedListItem
            {...myApps}
            key={myApps.id}
            categories={categories}
            users={users}
            setJobView={props.setJobView}
            cookies={props.cookies}
            state={props.state}
            setCoord={props.setCoord}
            setProfile={props.setProfile}
          />
        ))}
    </>
  );
}
