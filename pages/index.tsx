import {
  Button,
  Card,
  CardContent,
  CardHeader,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import type { NextPage } from "next";
import React from "react";
import { trpc } from "../utils/trpc";

const StyledCard = styled(Card)(({ theme }) => ({
  marginTop: theme.spacing(3),
}));

const StyledForm = styled("form")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

const Home: NextPage = () => {
  const hello = trpc.useQuery(["hello", { text: "client" }]);
  const multiply = trpc.useMutation(["multiply"]);
  const [factors, setFactors] = React.useState({ first: 0, second: 0 });

  return (
    <>
      <Typography variant="h1" gutterBottom>
        Trying out <a href="https://nextjs.org">Next.js!</a>
      </Typography>

      <StyledCard>
        <CardHeader
          title={
            <>
              Let&apos;s see what <code>/api/trpc/hello</code> says
            </>
          }
        />
        <CardContent>
          <pre>
            {hello.isLoading ? "Loading..." : JSON.stringify(hello?.data)}
          </pre>
        </CardContent>
      </StyledCard>

      <StyledCard>
        <CardHeader title="Process data on the server" />
        <CardContent>
          <StyledForm>
            <TextField
              type="number"
              label="Number 1"
              value={factors.first}
              onChange={(e) =>
                setFactors({
                  ...factors,
                  first: Number(e.currentTarget.value) || 0,
                })
              }
            />
            <TextField
              type="number"
              value={factors.second}
              label="Number 2"
              onChange={(e) =>
                setFactors({
                  ...factors,
                  second: Number(e.currentTarget.value) || 0,
                })
              }
            />
            <Button
              onClick={(e) => {
                e.preventDefault();
                multiply.mutate(factors);
              }}
              size="large"
            >
              Multiply!
            </Button>
          </StyledForm>
          <Typography variant="h4">
            Product: {Intl.NumberFormat().format(multiply.data?.product || 0)}
          </Typography>
        </CardContent>
      </StyledCard>
    </>
  );
};

export default Home;
