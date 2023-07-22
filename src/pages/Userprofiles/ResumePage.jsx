import { useState, useEffect, React, useRef  } from "react";
import { getUserProfileById, addUserProfile } from "../../fetching/userProfile";
import { useStore } from "../../modules/store";
import TableResume from "../../components/TableResume";
import SideButton from "../../components/SideButton";
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
  Textarea,
} from "@chakra-ui/react";
import Swal from "sweetalert2";
import Loading from "../../components/Loading";

export default function ResumePage() {
  const [profile, setProfile] = useState({});
  const [isLoading, setLoading] = useState(false);
  const loggedUser = useStore((state) => state.user);
  const aboutMeRef = useRef("");
  const salaryRef = useRef();
  const resumeRef = useRef(null);
  const portofolioRef = useRef(null);

  async function fetchProfile() {
    const dataProfile = await getUserProfileById(loggedUser.id);
    setProfile(dataProfile);
    setLoading(false);
  }

  useEffect(() => {
    setLoading(true);
    fetchProfile();
  }, []); // 1x render

  if (isLoading) {
    return (
      <Loading />
    );
  }

  const HandleResumeAdd = async () => {
    const addAboutMe = aboutMeRef.current.value;
    const addSalary = salaryRef.current.value;
    const addResume = resumeRef.current.files[0];
    const addPortofolio = portofolioRef.current.files[0];

    const formData = new FormData();
    formData.append("about_me", addAboutMe);
    formData.append("salary_expectation", addSalary);
    formData.append("resume", addResume);
    formData.append("portofolio", addPortofolio);

    if (!addAboutMe || !addSalary || !addResume || !addPortofolio) {
      Swal.fire({
        icon: "error",
        title: "Oops! Please fill in all the required data.",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      const data = await addUserProfile(formData);
      console.log(data);
      Swal.fire({
        icon: "success",
        title: "Profile added!",
        showConfirmButton: false,
        timer: 1500,
      });
      fetchProfile();
    }
  };

  function ButtonAddProfile() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const combinedClick = () => {
      if (!aboutMeRef.current.value || salaryRef.current.value) {
        HandleResumeAdd();
      } else {
        HandleResumeAdd()
        onClose()
      }

    };
    return (
      <>
        <Button colorScheme="green" onClick={onOpen} w={200}>
          Add new Profile
        </Button>

        <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add profile!</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Textarea placeholder="Describe yourself here" ref={aboutMeRef} />
              <FormControl className="py-1">
                <FormLabel>Salary Expectation</FormLabel>
                <NumberInput>
                  <NumberInputField placeholder="6.200.000" ref={salaryRef} />
                </NumberInput>
              </FormControl>
              <FormControl className="py-1">
                <FormLabel>Resume</FormLabel>
                <Input type="file" ref={resumeRef} />
              </FormControl>
              <FormControl className="py-1">
                <FormLabel>Portofolio</FormLabel>
                <Input type="file" ref={portofolioRef} />
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

  const ResumeRender = () => {
    if (profile) {
      return <TableResume profile={profile} />
    }
  }

  return (
    <>
      <div className="flex flex-row-reverse pr-20 pt-5 bg-mint">
        <ButtonAddProfile></ButtonAddProfile>
      </div>
      <Flex bg="mint" shadow="md" pb={100}>
        <SideButton />
        <VStack flex="1" pl={5}>
          <ResumeRender></ResumeRender>
        </VStack>
      </Flex>
    </>
  );
}
