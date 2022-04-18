/* eslint-disable jsx-a11y/anchor-is-valid */
import { Box, Flex, Stack } from '@chakra-ui/react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <Box w="100%" bgGradient="linear(45deg, pink.500, red.500, orange.500)">
      <Stack spacing="2rem" w="100%">
        <Flex>
          <Box w="33%" p={4}>
            <Link href="/doctors">
              <a>Médicos</a>
            </Link>
          </Box>
          <Box w="33%" p={4}>
            <Link href="/schools">
              <a>Escolas</a>
            </Link>
          </Box>
          <Box w="33%" p={4}>
            <Link href="/speak">
              <a>Fale por mim!</a>
            </Link>
          </Box>
        </Flex>
      </Stack>
    </Box>
  );
}
