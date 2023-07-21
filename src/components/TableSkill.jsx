import {
    Button,
    TableContainer,
    TableCaption,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Box,
    Input
  } from "@chakra-ui/react";
  import { deleteSkill } from "../fetching/skills";
  import Swal from "sweetalert2";

  export default function TableSkill({userSkill, fetchProfile}) {

    const handleDeleteSkill = async (refecth) => {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#7F8389',
        cancelButtonColor: '#007D9C',
        confirmButtonText: 'Delete!'
      }).then(async (result) => {
        if (result.isConfirmed) {
          const data = await deleteSkill({
        id: userSkill.Skill.id
      })
      console.log(data)
          Swal.fire({
            icon: 'success',
            title: 'Skill deleted!',
            showConfirmButton: false,
            timer: 1500
          }
          )
          fetchProfile()
        }
      })

    }

    return (
        <Box className="pr-20 pt-5 pb-20 w-full">
          <TableContainer className="border-2 border-solid" alt="Education">
            <Table size="sm">
              <TableCaption>
                <Button variant="solid" colorScheme='red' onClick={handleDeleteSkill}>Delete</Button>
              </TableCaption>
              <Thead>
                <Tr>
                  <Th fontSize="xl">Skill</Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td fontSize="lg" width="25%">Skill</Td>
                  <Td><Input type="text" defaultValue={userSkill.Skill.name} /></Td>
                </Tr>
                <Tr>
                  <Td fontSize="lg" width="25%">Level</Td>
                  <Td><Input type="text" defaultValue={userSkill.Skill.level} /></Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
    )
  }