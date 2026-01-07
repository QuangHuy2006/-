import { createBrowserRouter } from "react-router-dom";
import StudentResultLookup from "../components/StudentResultLookup";
import UsersDataFetcher from "../components/UsersDataFetcher";
import TestDetailsFetcher from "../components/TestDetailsFetcher";
import Screen from "../components/Screen";
import Students from "../components/Room";
import Rooms from "../components/RoomManager";
import Layout from "../components/Layout";
import Test from "../components/test";
// import Bracket from "../components/CompetitionTable/bracket/BracketMain";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <TestDetailsFetcher></TestDetailsFetcher>
      </Layout>
    ),
  },
  {
    path: "teacherData",
    element: (
      <Layout>
        <UsersDataFetcher></UsersDataFetcher>
      </Layout>
    ),
  },
  {
    path: "studentResultLookup",
    element: (
      <Layout>
        <StudentResultLookup></StudentResultLookup>
      </Layout>
    ),
  },
  {
    path: "screen",
    element: (
      <Layout>
        <Screen></Screen>
      </Layout>
    ),
  },
  {
    path: "students",
    element: (
      <Layout>
        <Students></Students>
      </Layout>
    ),
  },
  {
    path: "room",
    element: (
      <Layout>
        <Rooms></Rooms>
      </Layout>
    ),
  },
  {
    path: "test",
    element: (
      <Layout>
        <Test></Test>
      </Layout>
    ),
  },
]);

export default router;
