import React from 'react';
import {
  Container,
  Heading,
  Box,
  Button,
  Center,
  Flex,
  Spacer,
  Text,
  VStack,
  StackDivider,
} from '@chakra-ui/react';

const Patients = ({ dates }) => {
  if (dates.length === 0) return null;

  return (
    <Box minH="100vh" bgGradient="linear(to-r, green.200, pink.500)">
      <Heading as="h1" size="xl" textAlign="center" pt={4}>
        Veterinary Administrator
      </Heading>

      <Container maxW="container.xl">
        <Center mt={12}>
          <Button colorScheme="pink" variant="solid">
            Create Date
          </Button>
        </Center>

        <Container maxW="container.md" mt={8}>
          {/* Info of a single Date */}
          <VStack
            p={4}
            bg="gray.200"
            divider={<StackDivider borderColor="gray.500" />}
            spacing={6}
            align="stretch"
          >
            {dates.map((date) => (
              <Box key={date._id}>
                {/* Name and Dates */}
                <Flex>
                  <Heading
                    as="h3"
                    size="md"
                    color="pink.800"
                    textTransform="uppercase"
                  >
                    {date.name}
                  </Heading>
                  <Spacer />
                  <Text fontWeight="bold" color="pink.800" fontSize="md">
                    {date.date} - {date.time}
                  </Text>
                </Flex>

                {/* Symptoms */}
                <Text my={4} fontSize="2xl">
                  {date.symptoms}
                </Text>

                {/* Info Owner */}
                <Text fontWeight="bold">Owner: {date.owner}</Text>
              </Box>
            ))}
          </VStack>
          {/* End info of a single Date */}
        </Container>
      </Container>
    </Box>
  );
};

export default Patients;
