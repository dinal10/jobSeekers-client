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
  Input,
} from "@chakra-ui/react";
import { IconButton } from '@chakra-ui/react'
import { FaFileLines } from "react-icons/fa6"

export default function TableResume({ profile }) {
  return (
    <Box className="pr-20 pt-10 w-full">
      <TableContainer className="border-2 border-solid" alt="basic info">
        <Table size='sm'>
          <TableCaption>
            <Button variant="solid">Save</Button>
          </TableCaption>
          <Thead>
            <Tr>
              <Th fontSize="xl">Resume</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td fontSize="lg" width="25%">About Me</Td>
              <Td>
                <Input type="text" defaultValue={profile.about_me} />
              </Td>
            </Tr>
            <Tr>
              <Td fontSize="lg" width="25%">Salary Expectation</Td>
              <Td>
                <Input type="text" defaultValue={profile.salary_expectation} />
              </Td>
            </Tr>
            <Tr>
              <Td fontSize="lg" width="25%">Add resume</Td>
              <Td>
                <Input type="file" />
              </Td>
            </Tr>
            <Tr>
              <Td fontSize="lg" width="25%">Current Resume</Td>
              <Td>
                <a href="login">
                <IconButton boxSize={20} fontSize={30} icon={<FaFileLines />}></IconButton>
                </a>
                <p>{profile.resume}</p>
              </Td>
            </Tr>
            <Tr>
              <Td fontSize="lg" width="25%">Portofolio</Td>
              <Td>
                <Input type="text" defaultValue={profile.portofolio} />
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}
