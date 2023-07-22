import { Button, Box, HStack } from "@chakra-ui/react";
import { deleteSkill } from "../fetching/skills";
import Swal from "sweetalert2";
import { StarIcon } from "@chakra-ui/icons";

export default function TableSkill({ userSkill, fetchProfile }) {
  const handleDeleteSkill = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#7F8389",
      cancelButtonColor: "#007D9C",
      confirmButtonText: "Delete!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const data = await deleteSkill({
          id: userSkill.Skill.id,
        });
        console.log(data);
        Swal.fire({
          icon: "success",
          title: "Skill deleted!",
          showConfirmButton: false,
          timer: 1500,
        });
        fetchProfile();
      }
    });
  };

  const getRatingStars = (level) => {
    const levels = ["beginner", "advance", "expert"];
    const maxRating = 3;
    const rating = levels.indexOf(level) + 1;

    return Array.from({ length: maxRating }, (_, index) => (
      <StarIcon key={index} color={index < rating ? "yellow.500" : "gray.300"} />
    ));
  };

  return (
    <Box
      className="border-2 border-solid rounded-xl p-4 my-2 bg-white shadow-md job-card"
      width="95%"
    >
      
      <Box mt={2}>
        <Box fontSize="xl" fontWeight="semibold">
          Skill: {userSkill.Skill.name}
        </Box>
        <Box fontSize="lg" mt={2}>
          <HStack>
        Level: {getRatingStars(userSkill.Skill.level)} <p>{userSkill.Skill.level}</p>
        </HStack>
        </Box>
      </Box>
      <Box className="flex justify-between mt-5">
        <Button
          variant="solid"
          colorScheme="red"
          onClick={handleDeleteSkill}
          size="sm"
        >
          Delete
        </Button>
      </Box>
    </Box>
  );
}
