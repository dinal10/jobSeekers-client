import { useState } from "react";
import { deleteExperience, editExperience } from "../fetching/userProfile";
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

export default function TableExperience({experience}) {
  const [company, setCompany] = useState(experience.company)
  const [city, setCity] = useState(experience.city)
  const [department, setDepartment] = useState(experience.department)
  const [position, setPosition] = useState(experience.position)
  const [description, setDescription] = useState(experience.description)
  const [salary, setSalary] = useState(experience.salary)
  const [endDate, setEndDate] = useState(experience.end_date)
  const [startDate, setStartDate] = useState(experience.start_date)

  const handleEditExperience = async () => {
    const data = await editExperience({
      id: experience.id,
      company,
      city,
      department,
      position,
      description,
      salary,
      end_date: endDate,
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
        const data = deleteExperience({
      id: experience.id
    })
    console.log(data)
        Swal.fire(
          'Done!',
          'Experience has been deleted.',
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
                <Button className="mx-2" variant="solid" onClick={handleEditExperience}>Save</Button>
                <Button colorScheme='red' className="mx-2" variant="solid" onClick={handleEducationDelete}>Delete</Button>
              </TableCaption>
              <Thead>
                <Tr>
                  <Th fontSize="xl">Experience</Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td fontSize="lg" width="25%">Company</Td>
                  <Td><Input type="text" defaultValue={experience.company} onChange={(e) => setCompany(e.target.value)} /></Td>
                </Tr>
                <Tr>
                  <Td fontSize="lg" width="25%">City</Td>
                  <Td><Input type="text" defaultValue={experience.city} onChange={(e) => setCity(e.target.value)}/></Td>
                </Tr>
                <Tr>
                  <Td fontSize="lg" width="25%">Department</Td>
                  <Td><Input type="text" defaultValue={experience.department} onChange={(e) => setDepartment(e.target.value)}/></Td>
                </Tr>
                <Tr>
                  <Td fontSize="lg" width="25%">Position</Td>
                  <Td><Input type="text" defaultValue={experience.position} onChange={(e) => setPosition(e.target.value)} /></Td>
                </Tr>
                <Tr>
                  <Td fontSize="lg" width="25%">Description</Td>
                  <Td><Input type="text" defaultValue={experience.description} onChange={(e) => setDescription(e.target.value)}/></Td>
                </Tr>
                <Tr>
                  <Td fontSize="lg" width="25%">Salary</Td>
                  <Td><Input type="text" defaultValue={experience.salary} onChange={(e) => setSalary(e.target.value)}/></Td>
                </Tr>
                <Tr>
                  <Td fontSize="lg" width="25%">End date</Td>
                  <Td><Input type="text" defaultValue={experience.end_date} onChange={(e) => setEndDate(e.target.value)}/></Td>
                </Tr>
                <Tr>
                  <Td fontSize="lg" width="25%">Start Date</Td>
                  <Td><Input type="text" defaultValue={experience.start_date} onChange={(e) => setStartDate(e.target.value)}/></Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
    )

}