import { useState, useEffect, React } from "react";
import { CardBody, Card } from "@chakra-ui/card";
import { Box, Heading, Stack, StackDivider } from "@chakra-ui/layout";
import { Button, Flex, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { getUserProfileById } from "../../fetching/userProfile";
import { useStore } from "../../modules/store";
import TableResume from "../../components/TableResume";
import SideButton from "../../components/SideButton";

export default function ResumePage() {
    const [profile, setProfile] = useState({});
    const [isLoading, setLoading] = useState(false);
    const loggedUser = useStore((state) => state.user);

    async function fetchProfile() {
    const dataProfile = await getUserProfileById(loggedUser.id);
    setProfile(dataProfile);
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

    return (
        <>
        <Flex className="pt-10">
        <SideButton />
          <VStack flex="1">
              <TableResume profile={profile} />
          </VStack>
        </Flex>
      </>
    )
}