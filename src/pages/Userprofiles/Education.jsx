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
} from "@chakra-ui/react";
import { getEducation, addEducationUser } from "../../fetching/education";
import { useStore } from "../../modules/store";
import TableEducation from "../../components/TableEducation";
import SideButton from "../../components/SideButton";
import Swal from "sweetalert2";

export default function EducationPage() {
  const [education, setEducation] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const loggedUser = useStore((state) => state.user);
  const schoolNameRef = useRef("");
  const majorRef = useRef("");
  const degreeRef = useRef("");
  const startDateRef = useRef("");
  const graduationDateRef = useRef("");

  async function fetchProfile() {
    const dataProfile = await getEducation(loggedUser.id);
    setEducation(dataProfile);
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

  const handleAddEducation = async () => {
    const addSchool = schoolNameRef.current.value;
    const addMajor = majorRef.current.value;
    const addDegree = degreeRef.current.value;
    const addStartDate = startDateRef.current.value;
    const addGraduationDate = graduationDateRef.current.value;

    if (
      !addSchool ||
      !addDegree ||
      !addStartDate ||
      !addGraduationDate
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops! Please fill in all the required data.",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      const data = await addEducationUser({
        school_name: addSchool,
        major: addMajor,
        degree: addDegree,
        start_date: addStartDate,
        graduation_date: addGraduationDate
      });

      console.log(data);
      Swal.fire({
        icon: "success",
        title: "Education added!",
        showConfirmButton: false,
        timer: 1500,
      });
      fetchProfile();
    }
  };

  function ButtonAddEducation() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const combinedClick = () => {
      if (
        !schoolNameRef.current.value ||
        !degreeRef.current.value ||
        !startDateRef.current.value ||
        !graduationDateRef.current.value
      ) {
        handleAddEducation();
      } else {
        handleAddEducation();
        onClose();
      }
    };

    return (
      <>
        <Button colorScheme="green" onClick={onOpen} w={200}>
          Add new education
        </Button>

        <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add education!</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl className="py-1">
                <FormLabel>School name</FormLabel>
                <Input
                  placeholder="Universitas Gadjah Mada"
                  ref={schoolNameRef}
                />
              </FormControl>
              <FormControl className="py-1">
                <FormLabel>Major</FormLabel>
                <Input placeholder="Software Engineering" ref={majorRef} />
              </FormControl>
              <FormControl className="py-1">
                <FormLabel>Degree</FormLabel>
                <Select placeholder="" ref={degreeRef}>
                  <option value="Doctoral Degree">Doctoral Degree / S3</option>
                  <option value="Master's Degree">Master's Degree / S2</option>
                  <option value="Bachelor / S1">Bachelor's Degree / S1</option>
                  <option value="Associate / D3">Associate Degree / D3</option>
                  <option value="High school">High School</option>
                  <option value="Middles chool">Middle School</option>
                  <option value="Elementary school">Elementary school</option>
                </Select>
              </FormControl>
              <FormControl className="py-1">
                <FormLabel>Graduation Date</FormLabel>
                <Input
                  type="date"
                  placeholder="2023-07-07"
                  ref={graduationDateRef}
                />
              </FormControl>
              <FormControl className="py-1">
                <FormLabel>Start Date</FormLabel>
                <Input
                  type="date"
                  placeholder="2022-07-07"
                  ref={startDateRef}
                />
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
        <ButtonAddEducation></ButtonAddEducation>
      </div>
      <Flex>
        <SideButton />
        <VStack flex="1">
          {education.map((education, index) => {
            return (
              <TableEducation
                fetchProfile={fetchProfile}
                education={education}
                key={index}
              ></TableEducation>
            );
          })}
        </VStack>
      </Flex>
    </>
  );
}
