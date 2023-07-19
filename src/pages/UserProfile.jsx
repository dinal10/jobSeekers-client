import { useState, useEffect, React } from "react";
import {
  getUserProfileById,
  getUser,
  getEducation,
  getSkills,
  getExperience
} from "../fetching/userProfile";
import { useStore } from "../modules/store";
import { CardBody, Card } from "@chakra-ui/card";
import { Box, Heading, Stack, StackDivider } from "@chakra-ui/layout";
import TableExperience from "../components/TableExperience";
import TableEducation from "../components/TableEducation";
import TableProfile from "../components/TableProfile";
import TableResume from "../components/TableResume";
import TableSkill from "../components/TableSkill";
import { Button, Flex, VStack } from "@chakra-ui/react";

export default function UserProfilePage() {
  const [profile, setProfile] = useState({});
  const [user, setUser] = useState({});
  const [experience, setExperience] = useState({});
  const [education, setEducation] = useState({});
  const [userSkill, setUserSkill] = useState({});
  const [isLoading, setLoading] = useState(false);
  const loggedUser = useStore((state) => state.user);

  //button show/hide
  const [showBasicInfo, setShowBasicInfo] = useState(true);
  const [showEducation, setShowEducation] = useState(false);
  const [showExperience, setShowExperience] = useState(false);
  const [showResume, setShowResume] = useState(false);
  const [showSkill, setShowSkill] = useState(false);

  async function fetchProfile() {
    const dataUser = await getUser(loggedUser.id);
    const dataProfile = await getUserProfileById(loggedUser.id);
    const dataExperience = await getExperience(loggedUser.id);
    const dataEducation = await getEducation(loggedUser.id);
    const dataUserSkills = await getSkills(loggedUser.id);
    setProfile(dataProfile);
    setUser(dataUser);
    setExperience(dataExperience);
    setEducation(dataEducation);
    setUserSkill(dataUserSkills)
    setLoading(false);
  }

  useEffect(() => {
    setLoading(true);
    fetchProfile();
  }, []); // 1x render

  if (isLoading) {
    return (
      <span className="loading loading-infinity loading-lg flex mx-auto"></span>
    );
  }

  const handleBasicInfoClick = () => {
    setShowBasicInfo(true);
    setShowEducation(false);
    setShowExperience(false);
    setShowResume(false);
    setShowSkill(false)
  };
  const handleEducationClick = () => {
    setShowBasicInfo(false);
    setShowEducation(true);
    setShowExperience(false);
    setShowResume(false);
    setShowSkill(false)
  };
  const handleExperienceClick = () => {
    setShowBasicInfo(false);
    setShowEducation(false);
    setShowExperience(true);
    setShowResume(false);
    setShowSkill(false)
  };
  const handleResumeClick = () => {
    setShowBasicInfo(false);
    setShowEducation(false);
    setShowExperience(false);
    setShowResume(true);
    setShowSkill(false)
  };
  const handleSkillClick = () => {
    setShowBasicInfo(false);
    setShowEducation(false);
    setShowExperience(false);
    setShowResume(false);
    setShowSkill(true)
  };

  return (
    <>
      <Flex>
        <Box width="20%" className="pl-20 pt-10" alt="side button"> 
          <Card>
            <CardBody className="bg-mint bg-opacity-30">
              <Stack divider={<StackDivider />} spacing="1">
                <Button variant="ghost" onClick={handleBasicInfoClick}>
                  <Box>
                    <Heading size="xs" textTransform="uppercase">
                      Basic Info
                    </Heading>
                  </Box>
                </Button>
                <Button variant="ghost" onClick={handleEducationClick}>
                  <Box>
                    <Heading size="xs" textTransform="uppercase">
                      Educations
                    </Heading>
                  </Box>
                </Button>
                <Button variant="ghost" onClick={handleExperienceClick}>
                  <Box>
                    <Heading size="xs" textTransform="uppercase">
                      Experiences
                    </Heading>
                  </Box>
                </Button>
                <Button variant="ghost" onClick={handleResumeClick}>
                  <Box>
                    <Heading size="xs" textTransform="uppercase">
                      Resume
                    </Heading>
                  </Box>
                </Button>
                <Button variant="ghost" onClick={handleSkillClick}>
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
        <VStack flex="1">
        {showBasicInfo && (
          <TableProfile user={user} profile={profile} />
        )}
          {showEducation &&
            education.map((educ, index) => {
              return (
                <TableEducation education={educ} key={index}></TableEducation>
              );
            })}
          {showExperience &&
            experience.map((exp, index) => {
              return (
                <TableExperience experience={exp} key={index}></TableExperience>
              );
            })}
            {showResume &&
              <TableResume profile={profile} />}
          {showSkill &&
            userSkill.map((userSkill, index) => {
              return (
                <TableSkill userSkill={userSkill} key={index}></TableSkill>
              );
            })}
        </VStack>
      </Flex>
    </>
  );
}
