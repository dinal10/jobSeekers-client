import { useState, useEffect, React } from "react";
import {
  getUserProfileById,
  getUser
} from "../fetching/userProfile";
import { useStore } from "../modules/store";
import TableProfile from "../components/TableProfile";
import { Flex, VStack, Box } from "@chakra-ui/react";
import Loading from "../components/Loading";
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
      <Loading />
    );
  }

  return (
    <>
      <Flex className="pt-10 bg-mint shadow-md justify-center">
        <SideButton />
        <VStack pl={5} flex="1">
          <TableProfile user={user} profile={profile} />
        </VStack>
      </Flex>
    </>
  );
}
