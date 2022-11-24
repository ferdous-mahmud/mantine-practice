import { Loader, MantineProvider, Paper, Text } from "@mantine/core";
import MyTimeline from "../components/timeline";

export default function Home() {
  return (
    <div>
      <MantineProvider
        theme={{
          fontFamily: "SF Pro Text",
          loader: "bars",
        }}
      >
        <Paper>
          <Text>This is Mantine practice</Text>
        </Paper>
        <MyTimeline></MyTimeline>
        <Loader></Loader>
      </MantineProvider>
    </div>
  );
}
