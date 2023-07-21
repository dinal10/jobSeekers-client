import { Box } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";

export default function Loading() {
  return (
    <Box
      className="bg-mint"
      h="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Spinner style={{width: "150px", height: "150px"}} color="black" />
    </Box>
  );
}
