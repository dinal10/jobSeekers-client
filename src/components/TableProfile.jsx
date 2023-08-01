import { useState, React } from "react";
import { editUser } from "../fetching/userProfile";
import Swal from "sweetalert2";
import LongDate from "../lib/convertolongdate";
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

  export default function TableProfile({user}) {
    const [firstName, setFirstName] = useState(user.first_name)
    const [lastName, setLastName] = useState(user.last_name)
    const [email, setEmail] = useState(user.email)
    const [phoneNumber, setPhoneNumber] = useState(user.phone_number)
    const [birthDate, setBirthDate] = useState(user.birth_date)
    const [gender, setGender] = useState(user.gender)
    const [address, setAddress] = useState(user.address)

    const handleBasicInfo = async () => {
      const data = await editUser({
        first_name: firstName,
        last_name: lastName,
        email,
        phone_number: phoneNumber,
        birth_date: birthDate,
        gender,
        address
      })
      console.log(data)
      Swal.fire({
        title: "Update Success",
        icon: "success",
        showConfirmButton: false,
        timer: 1500
      });
    }

    return (
        <Box className="pr-20 pt-5 pb-20 w-full">
            <TableContainer className="border-2 border-solid rounded-xl bg-white shadow-xl" alt="basic info">
              <Table size='sm' my={5}>
                <TableCaption>
                  <Button variant="solid" onClick={handleBasicInfo}>Save</Button>
                </TableCaption>
                <Thead >
                  <Tr>
                    <Th fontSize="xl">Basic Information</Th>
                    <Th>{user.role}</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td fontSize="lg" width="25%">First name</Td>
                    <Td>
                      <Input type="text" defaultValue={user.first_name} onChange={(e) => setFirstName(e.target.value)} />
                    </Td>
                  </Tr>
                  <Tr>
                    <Td fontSize="lg" width="25%">Last name</Td>
                    <Td>
                      <Input type="text" defaultValue={user.last_name} onChange={(e) => setLastName(e.target.value)}/>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td fontSize="lg" width="25%">E-mail</Td>
                    <Td>
                      <Input type="email" defaultValue={user.email} onChange={(e) => setEmail(e.target.value)}/>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td fontSize="lg" width="25%">Phone Number</Td>
                    <Td>
                      <Input type="text" defaultValue={user.phone_number} onChange={(e) => setPhoneNumber(e.target.value)}/>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td fontSize="lg" width="25%">Birth date</Td>
                    <Td>
                      <Input type="text" defaultValue={LongDate(user.birth_date)} onChange={(e) => setBirthDate(e.target.value)}/>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td fontSize="lg" width="25%">Gender</Td>
                    <Td>
                      <Input type="text" defaultValue={user.gender} onChange={(e) => setGender(e.target.value)}/>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td fontSize="lg" width="25%">Address</Td>
                    <Td>
                      <Input type="text" defaultValue={user.address} onChange={(e) => setAddress(e.target.value)}/>
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
    )
  }