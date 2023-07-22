import { React } from "react";
import { CardBody, Card } from "@chakra-ui/card";
import { Box, Heading, Stack, StackDivider } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function SideButton() { 
    const navigate = useNavigate(); 

    return (
        <Box width="20%" className="pl-20 pt-5" alt="side button"> 
            <Card>
              <CardBody className="bg-white rounded-xl shadow-xl">
                <Stack divider={<StackDivider />} spacing="1">
                  <Button variant="ghost" onClick={() => navigate(`/profile`)} className="job-card">
                    <Box>
                      <Heading size="xs" textTransform="uppercase">
                        Basic Info
                      </Heading>
                    </Box>
                  </Button>
                  <Button variant="ghost" onClick={() => navigate(`/resume`)} className="job-card">
                    <Box>
                      <Heading size="xs" textTransform="uppercase">
                        Resume
                      </Heading>
                    </Box>
                  </Button>
                  <Button variant="ghost" onClick={() => navigate(`/education`)} className="job-card" >
                    <Box>
                      <Heading size="xs" textTransform="uppercase">
                        Educations
                      </Heading>
                    </Box>
                  </Button>
                  <Button variant="ghost" onClick={() => navigate(`/experience`)} className="job-card">
                    <Box>
                      <Heading size="xs" textTransform="uppercase">
                        Experiences
                      </Heading>
                    </Box>
                  </Button>
                  <Button variant="ghost" onClick={() => navigate(`/skill`)} className="job-card">
                    <Box>
                      <Heading size="xs" textTransform="uppercase">
                        Skill
                      </Heading>
                    </Box>
                  </Button>
                </Stack>
              </CardBody>
            </Card>
          </Box>
    )
}