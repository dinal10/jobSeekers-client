import { useState, useEffect, React, useRef } from "react";
import {
  Button,
  Flex,
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Select,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Textarea
} from "@chakra-ui/react";
import { getExperience, addExperience } from "../../fetching/experience";
import { useStore } from "../../modules/store";
import TableExperience from "../../components/TableExperience";
import SideButton from "../../components/SideButton";
import Swal from "sweetalert2";

export default function ExperiencePage() {
  const [experience, setExperience] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const loggedUser = useStore((state) => state.user);
  const companyRef = useRef("");
  const cityRef = useRef("");
  const departmentRef = useRef("");
  const positionRef = useRef("");
  const descriptionRef = useRef("");
  const salaryRef = useRef("");
  const endDateRef = useRef("");
  const startDateRef = useRef("");

  async function fetchProfile() {
    const dataProfile = await getExperience(loggedUser.id);
    setExperience(dataProfile);
  }

  useEffect(() => {
    fetchProfile();
    setLoading(false);
  }, []); // 1x render

  if (isLoading) {
    return (
      <span className="loading loading-infinity loading-lg flex mx-auto"></span>
    );
  }

  const handleExperienceSkill = async () => {
    const addCompany = companyRef.current.value;
    const addCity = cityRef.current.value;
    const addDepartment = departmentRef.current.value;
    const addPosition = positionRef.current.value;
    const addDescription = descriptionRef.current.value;
    const addSalary = salaryRef.current.value;
    const addEndDate = endDateRef.current.value;
    const addStartDate = startDateRef.current.value;


    if (!addCompany || !addCity || !addDepartment || !addPosition || !addDescription || !addSalary || !addEndDate || !addStartDate) {
      Swal.fire({
        icon: "error",
        title: "Oops! Please fill in all the required data.",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      const data = await addExperience({
        company: addCompany,
        city: addCity,
        department: addDepartment,
        position: addPosition,
        description: addDescription,
        salary: addSalary,
        end_date: addEndDate,
        start_date: addStartDate,
      });

      console.log(data);
      Swal.fire({
        icon: "success",
        title: "Experience added!",
        showConfirmButton: false,
        timer: 1500,
      });
      fetchProfile();
    }
  };

  function ButtonAddExperience() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const combinedClick = () => {
      if (!companyRef.current.value || !departmentRef.current.value || !cityRef.current.value || !positionRef.current.value || !descriptionRef.current.value || !salaryRef.current.value || !endDateRef.current.value || !startDateRef.current.value) {
        handleExperienceSkill();
      } else {
        handleExperienceSkill();
        onClose();
      }
    };

    return (
      <>
        <Button colorScheme="green" onClick={onOpen} w={200}>
          Add new experience
        </Button>

        <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add experience!</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl className="py-1">
                <FormLabel>Company</FormLabel>
                <Input placeholder="PT. INFINITE" ref={companyRef} />
              </FormControl>
              <FormControl className="py-1">
                <FormLabel>City</FormLabel>
                <Input placeholder="Bandung" ref={cityRef} />
              </FormControl>
              <FormControl className="py-1">
                <FormLabel>Department</FormLabel>
                <Input placeholder="F&B" ref={departmentRef} />
              </FormControl>
              <FormControl className="py-1">
                <FormLabel>Position</FormLabel>
                <Input placeholder="Cook helper" ref={positionRef} />
              </FormControl>
              <FormControl className="py-1">
                <FormLabel>Description</FormLabel>
                <Textarea
                  placeholder="Your job description"
                  ref={descriptionRef}
                />
              </FormControl>
              <FormControl className="py-1">
                <FormLabel>Salary</FormLabel>
                <NumberInput>
                  <NumberInputField placeholder="6.200.000" ref={salaryRef} />
                </NumberInput>
              </FormControl>
              <FormControl className="py-1">
                <FormLabel>End Date</FormLabel>
                <Input type="date" placeholder="2023-07-07" ref={endDateRef} />
              </FormControl>
              <FormControl className="py-1">
                <FormLabel>Start Date</FormLabel>
                <Input type="date" placeholder="2022-07-07" ref={startDateRef} />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button variant="ghost" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="blue" onClick={combinedClick}>
                Save
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  }

  return (
    <>
      <div className="flex flex-row-reverse pr-20 pt-5">
        <ButtonAddExperience></ButtonAddExperience>
      </div>
      <Flex>
        <SideButton />
        <VStack flex="1">
          {experience.map((experience, index) => {
            return (
              <TableExperience
                fetchProfile={fetchProfile}
                experience={experience}
                key={index}
              ></TableExperience>
            );
          })}
        </VStack>
      </Flex>
    </>
  );
}
