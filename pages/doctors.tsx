import { VStack, Box, Text, Center } from '@chakra-ui/react';
import doctorsList from '../static/doctors.json';

export default function Doctors() {
  return (
    <Center h="100vh">
      <VStack>
        {doctorsList.map((info) => (
          <Box
            p="5"
            minW="800px"
            maxW="800px"
            minH="150px"
            maxH="150px"
            borderWidth="2px"
          >
            <Text textTransform="uppercase" fontSize="xl" fontWeight="bold">
              {info.name}
            </Text>
            <Text fontSize="md" fontWeight="bold">
              {info.address}
            </Text>
            <Text fontSize="sm" fontWeight="bold">
              {info.telephone}
            </Text>
          </Box>
        ))}
      </VStack>
    </Center>
  );
}
