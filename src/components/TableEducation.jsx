import { deleteEducation, editEducation } from "../fetching/userProfile";
import { useState, React } from "react";
import Swal from "sweetalert2";
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

  export default function TableEducation({education}) {
    const [schoolName, setSchoolName] = useState(education.Education.school_name)
    const [major, setMajor] = useState(education.major)
    const [degree, setDegree] = useState(education.Degree)
    const [graduationDate, setGraduationDate] = useState(education.graduation_date)
    const [startDate, setStartDate] = useState(education.start_date)

    const handleEducationEdit = async () => {
      const data = await editEducation({
        school_name: schoolName,
        major,
        degree,
        graduation_date: graduationDate,
        start_date: startDate
      })
      console.log(data)
      Swal.fire({
        title: "Update Success",
        icon: "success",
        showConfirmButton: false,
        timer: 1500
      });
    }
    const handleEducationDelete = async () => {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#7F8389',
        cancelButtonColor: '#007D9C',
        confirmButtonText: 'Delete!'
      }).then((result) => {
        if (result.isConfirmed) {
          const data = deleteEducation({
        id: education.Education.id
      })
      console.log(data)
          Swal.fire(
            'Done!',
            'Education has been deleted.',
            'success',
            {
              timer: 3000
            }
          )
          window.location.reload()
        }
        
      })
      
    }
    

    return (
        <Box className="pr-20 pt-10 w-full">
            <TableContainer className="border-2 border-solid" alt="Education">
              <Table size='sm'>
                <TableCaption>
                  <Button className="mx-2" variant="solid" onClick={handleEducationEdit}>Save</Button>
                  <Button colorScheme='red' className="mx-2" variant="solid" onClick={handleEducationDelete}>Delete</Button>
                </TableCaption>
                <Thead>
                  <Tr>
                    <Th fontSize="xl">Education</Th>
                    <Th></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td fontSize="lg" width="25%">School</Td>
                    <Td>
                    <Input disabled className="text-black" type="text" defaultValue={education.Education.school_name} onChange={(e) => setSchoolName(e.target.value)} />
                    </Td>
                  </Tr>
                  <Tr>
                    <Td fontSize="lg" width="25%">Major</Td>
                    <Td>
                    <Input type="text" defaultValue={education.major} onChange={(e) => setMajor(e.target.value)}/>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td fontSize="lg" width="25%">Degree</Td>
                    <Td>
                    <Input type="text" defaultValue={education.degree} onChange={(e) => setDegree(e.target.value)}/>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td fontSize="lg" width="25%">Graduation Date</Td>
                    <Td>
                    <Input type="text" defaultValue={education.graduation_date} onChange={(e) => setGraduationDate(e.target.value)} />
                    </Td>
                  </Tr>
                  <Tr>
                    <Td fontSize="lg" width="25%">Start Date</Td>
                    <Td>
                    <Input type="text" defaultValue={education.start_date} onChange={(e) => setStartDate(e.target.value)}/>
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
    )
  }