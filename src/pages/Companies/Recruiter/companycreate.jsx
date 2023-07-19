import { useState } from "react";
import {
  Box,
  Heading,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  ChakraProvider,
} from "@chakra-ui/react";
import { createCompanyProfile } from "../../../fetching/companyprofile";
import Swal from "sweetalert2";
import theme from "../../../../theme";
import { useNavigate } from "react-router-dom"

function CreateCompany() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    field: "",
    description: "",
    location: "",
    total_employee: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await createCompanyProfile(formData);
      console.log("Company profile created:", data);
      Swal.fire({
        icon: "success",
        title: "Company profile created",
        text: "A new profile has been created successfully.",
        showConfirmButton: false,
        timer: 1000,
      });
      setFormData({
        name: "",
        field: "",
        description: "",
        location: "",
        total_employee: "",
      });
      navigate("/companyprofile")
    } catch (error) {
      console.log("Error creating company profile:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "An error occurred while creating new profile.",
        confirmButtonText: "OK",
        timer: 1000
      });
    }
  };

  return (
    <ChakraProvider theme={theme}>
    <Box py={8} bg="black">
      <Heading as="h2" size="xl" textAlign="center" color="white" mb={8}>
        Create New Company
      </Heading>

      <Box
        maxW="md"
        mx="auto"
        p={8}
        bg="white"
        boxShadow="lg"
        borderRadius="xl"
      >
        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <FormControl id="name" isRequired>
              <FormLabel>Company Name</FormLabel>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                focusBorderColor="navy"
              />
            </FormControl>

            <FormControl id="field" isRequired>
              <FormLabel>Company Field</FormLabel>
              <Input
                type="text"
                name="field"
                value={formData.field}
                onChange={handleChange}
                focusBorderColor="blue.500"
              />
            </FormControl>

            <FormControl id="description" isRequired>
              <FormLabel>Company Description</FormLabel>
              <Textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                focusBorderColor="blue.500"
              />
            </FormControl>

            <FormControl id="location" isRequired>
              <FormLabel>Company Location</FormLabel>
              <Input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                focusBorderColor="blue.500"
              />
            </FormControl>

            <FormControl id="total_employee" isRequired>
              <FormLabel>Total Employees</FormLabel>
              <Input
                type="number"
                name="total_employee"
                value={formData.total_employee}
                onChange={handleChange}
                focusBorderColor="blue.500"
              />
            </FormControl>

            <Button type="submit" color="white" bg="black" w="100%">
              Create Company
            </Button>
          </VStack>
        </form>
      </Box>
    </Box>
    </ChakraProvider>
  );
}

export default CreateCompany;
