import { HStack, Box, Text, Center, Badge, Image } from '@chakra-ui/react';
import schoolList from '../static/schools.json';

export default function Schools() {
  return (
    <Center h="100vh">
      <HStack>
        {schoolList.map((info) => (
          <Box
            p="5"
            minW="320px"
            maxW="320px"
            minH="500px"
            maxH="500px"
            borderWidth="2px"
          >
            <Image src={info.image} />
            <Badge colorScheme="pink">Especializada</Badge>
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
      </HStack>
    </Center>
  );
}
