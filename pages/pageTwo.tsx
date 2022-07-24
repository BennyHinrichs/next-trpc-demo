import { Typography } from "@mui/material";
import { NextPage } from "next";
import { trpc } from "../utils/trpc";

const PageTwo: NextPage = () => {
  const pageTwo = trpc.useQuery(["pageTwo"]);

  return (
    <>
      <Typography variant="h1" gutterBottom>
        A message from the backend:
      </Typography>
      <Typography variant="h4">{pageTwo.data?.message}</Typography>
    </>
  );
};

export default PageTwo;
