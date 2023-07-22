import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getCompanyProfileById } from "../../fetching/companyprofile";
import {
  Heading,
  Box,
  Text,
  ChakraProvider,
  Stack,
  Card,
  CardBody,
  Spacer,
  CardHeader,
  HStack,
  IconButton,
  Spinner,
} from "@chakra-ui/react";
import { EditIcon, ArrowLeftIcon } from "@chakra-ui/icons";
import theme from "../../../theme";
import { useStore } from "../../modules/store";

export default function CompanyDetail() {
  const { id } = useParams();
  const [company, setCompany] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const user = useStore((state) => state.user); 

  const fetchCompany = async () => {
    const data = await getCompanyProfileById(id);
    setCompany(data);
    setIsLoading(false);
  };

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      navigate(`/companyprofile`);
    }, 500);
  };

  useEffect(() => {
    setIsLoading(true);
    fetchCompany();
  }, []);

  if (isLoading) {
    return (
      <Box h="100vh" display="flex" alignItems="center" justifyContent="center">
        <Spinner size="xl" color="black" />
      </Box>
    );
  }

  return (
    <ChakraProvider theme={theme}>
      <Box pb={8}>
        <Box pos="relative" bg="black" height="250px" w="100%">
          <IconButton
            onClick={handleClick}
            mt={2}
            ml={2}
            icon={<ArrowLeftIcon />}
            variant="outline"
            color="white"
            size="md"
            isRound
          />
        </Box>

        <Box
          maxW="3xl"
          p={4}
          isolation="isolate"
          zIndex={3}
          mt="-5rem"
          marginInline="auto"
        >
          <Box
            boxShadow="0 4px 6px rgba(160, 174, 192, 0.6)"
            bg="white"
            p={{ base: 4, sm: 8 }}
            overflow="hidden"
            rounded="2xl"
          >
            <Box direction="column" spacing={5} textAlign="left">
              <HStack>
                <Heading
                  color="black"
                  fontSize="4xl"
                  lineHeight={1.2}
                  fontWeight="bold"
                >
                  {company.name}
                </Heading>
                {["recruiter", "admin"].includes(user.role) && ( // conditional for recruiter and admin
                  <IconButton
                    onClick={() => navigate(`/companyedit/${id}`)}
                    size="xs"
                    color="black"
                    icon={<EditIcon />}
                  />
                )}
              </HStack>
              <Spacer mt={2} />
            </Box>
          </Box>
          <HStack>
            <Box maxW="70%" p={5} mr={1} pos="left" h="400px">
              <Heading
                color="black"
                fontSize="xl"
                lineHeight={1.2}
                fontWeight="bold"
              >
                Company Description
              </Heading>
              <Text color="black" fontSize="l" maxW="100%" lineHeight={1.2}>
                {company.description}
              </Text>
            </Box>

            <Box maxW="100%" p={2} ml="520" h="400px" w="220px" pos="absolute">
              <Card>
                <CardHeader>
                  <Heading as="h3" size="md" color="black">
                    Company Details
                  </Heading>
                </CardHeader>
                <CardBody>
                  <Stack spacing={4}>
                    <Text>Location: {company.location}</Text>
                    <Text>Field: {company.field}</Text>
                    <Text>Total Employees: {company.total_employee}</Text>
                  </Stack>
                </CardBody>
              </Card>
            </Box>
          </HStack>
        </Box>
      </Box>
    </ChakraProvider>
  );
}
