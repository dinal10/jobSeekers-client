import { useState, useEffect } from "react";
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
  Wrap,
  IconButton,
  Spinner,
  HStack,
} from "@chakra-ui/react";
import { ArrowLeftIcon } from "@chakra-ui/icons";
import {
  getCompanyProfileById,
  updateCompanyProfile,
  deleteCompanyProfile,
} from "../../../fetching/companyprofile";
import { useParams, useNavigate } from "react-router-dom";
import theme from "../../../../theme";
import Swal from "sweetalert2";

function EditCompanyProfile() {
  const { id } = useParams();
  const [company, setCompany] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    field: "",
    description: "",
    location: "",
    total_employee: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCompanyProfile();
  }, []);

  const fetchCompanyProfile = async () => {
    try {
      const data = await getCompanyProfileById(id);
      setCompany(data);
      setFormData(data);
    } catch (error) {
      console.log("Error fetching company profile:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleUpdate = async () => {
    try {
      const data = await updateCompanyProfile(id, formData);
      console.log("Company profile updated:", data);
      setIsEditing(false);
      Swal.fire({
        icon: "success",
        title: "Company profile updated",
        text: "Company has been updated",
        timer: 1500,
      });
    } catch (error) {
      console.log("Error updating company profile:", error);
    }
  };

  const handleDelete = async () => {
    try {
      const result = await Swal.fire({
        title: "Delete Company",
        text: "Please enter the company name to confirm deletion:",
        input: "text",
        inputPlaceholder: "Company Name",
        showCancelButton: true,
        confirmButtonText: "Delete",
        showLoaderOnConfirm: true,
        preConfirm: (companyName) => {
          if (!companyName || companyName !== company.name) {
            Swal.showValidationMessage("Invalid company name");
          } else {
            return deleteCompanyProfile(id);
          }
        },
      });
  
      if (result.isConfirmed) {
        Swal.fire({
          icon: "success",
          title: "Company profile deleted",
          text: "Company has been successfully deleted",
          timer: 1500,
          showConfirmButton: false
        });
        navigate("/companyprofile");
      }
    } catch (error) {
      console.log("Error deleting company profile:", error);
      setIsDeleting(false);
    }
  };

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      navigate(`/companydetail/${id}`);
    }, 500);
  };

  if (isLoading) {
    return (
      <Box h="100vh" display="flex" alignItems="center" justifyContent="center">
        <Spinner size="xl" color="navy" />
      </Box>
    );
  }

  return (
    <ChakraProvider theme={theme}>
      <Box py={8}>
        <HStack justifyContent="center" mr={8}>
          <Wrap>
            <IconButton
              onClick={handleClick}
              mb={8}
              mr={2}
              icon={<ArrowLeftIcon />}
              size="sm"
              variant="outline"
              bg="white"
              color="black"
              isRound
            />
          </Wrap>
          <Heading as="h1" size="xl" textAlign="center" mb={8}>
            Edit Company Profile
          </Heading>
        </HStack>
        {company && (
          <Box
            maxW="md"
            mx="auto"
            p={8}
            bg="white"
            boxShadow="lg"
            borderRadius="md"
          >
            <VStack spacing={4}>
              <FormControl>
                <FormLabel>Company Name</FormLabel>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  isReadOnly={!isEditing}
                  placeholder={isEditing ? "" : formData.name}
                />
              </FormControl>

              <FormControl>
                <FormLabel>Company Field</FormLabel>
                <Input
                  type="text"
                  name="field"
                  value={formData.field}
                  onChange={handleChange}
                  isReadOnly={!isEditing}
                  placeholder={isEditing ? "" : formData.field}
                />
              </FormControl>

              <FormControl>
                <FormLabel>Company Description</FormLabel>
                <Textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  isReadOnly={!isEditing}
                  placeholder={isEditing ? "" : formData.description}
                />
              </FormControl>

              <FormControl>
                <FormLabel>Company Location</FormLabel>
                <Input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  isReadOnly={!isEditing}
                  placeholder={isEditing ? "" : formData.location}
                />
              </FormControl>

              <FormControl>
                <FormLabel>Total Employees</FormLabel>
                <Input
                  type="number"
                  name="total_employee"
                  value={formData.total_employee}
                  onChange={handleChange}
                  isReadOnly={!isEditing}
                  placeholder={isEditing ? "" : formData.total_employee}
                />
              </FormControl>

              {isEditing ? (
                <Button
                  type="button"
                  color="white"
                  bg="black"
                  onClick={handleUpdate}
                  w="100%"
                >
                  Update
                </Button>
              ) : (
                <Button
                  type="button"
                  color="white"
                  bg="black"
                  onClick={handleEdit}
                  w="100%"
                >
                  Edit
                </Button>
              )}
              <Button
                type="button"
                color="white"
                bg="red"
                onClick={handleDelete}
                w="100%"
                isDisabled={isDeleting}
              >
                Delete
              </Button>
            </VStack>
          </Box>
        )}
      </Box>
    </ChakraProvider>
  );
}

export default EditCompanyProfile;
