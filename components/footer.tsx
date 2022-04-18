import { Box, Center, Flex } from '@chakra-ui/react';

export default function Footer() {
  return (
    <Box w="100%" bgGradient="linear(45deg, pink.500, red.500, orange.500)">
      <Center>
        <Flex>
          <p>Fiaspo 2022 - All Rights Reserved</p>
        </Flex>
      </Center>
    </Box>
  );
}
