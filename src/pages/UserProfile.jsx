import { useState, useEffect, React } from "react";
import {
  getUserProfileById,
  getUser
} from "../fetching/userProfile";
import { useStore } from "../modules/store";
import TableProfile from "../components/TableProfile";
import { Flex, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import SideButton from "../components/SideButton";

export default function UserProfilePage() {
  const [profile, setProfile] = useState([]);
  const [user, setUser] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const loggedUser = useStore((state) => state.user);

  async function fetchProfile() {
    const dataUser = await getUser(loggedUser.id);
    const dataProfile = await getUserProfileById(loggedUser.id);
    setProfile(dataProfile);
    setUser(dataUser);
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

  return (
    <>
      <Flex>
        <SideButton />
        <VStack flex="1">
          <TableProfile user={user} profile={profile} />
        </VStack>
      </Flex>
    </>
  );
}
