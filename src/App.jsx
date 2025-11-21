import Register from "./auth/Register";
import Login from "./auth/Login";
import ActivitiesPage from "./activities/ActivitiesPage";
import ActivityItem from "./activities/ActivityItem.jsx";
import Error404 from "./Error404.jsx";
import Layout from "./layout/Layout";
import { Routes, Route } from "react-router";

/**
 * Fitness Trackr is a platform where fitness enthusiasts can share their workouts and
 * discover new routines. Anyone can browse the site and make an account, and users with an
 * account will be able to upload and manage their own activities.
 */
export default function App() {
  <Routes>
    <Route element={<Layout />}>
      <Route index path="/activities" element={<ActivitiesPage />} />
      <Route path="/activites/:activityid" element={<ActivityItem />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Error404 />} />
    </Route>
  </Routes>;
}
