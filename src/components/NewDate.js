import React, { useState } from 'react';
import {
  Container,
  Heading,
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from '@chakra-ui/react';

const NewDate = () => {
  // generate the state as an object
  const [date, setDate] = useState({
    name: '',
    owner: '',
    date: '',
    time: '',
    symptoms: '',
  });

  // read data from form
  const updateState = (e) => {
    setDate({
      ...date,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Box minH="100vh" bgGradient="linear(to-r, green.200, pink.500)">
      <Heading as="h1" size="xl" textAlign="center" pt={4}>
        Create New Date
      </Heading>

      <Container maxW="container.xl" pb={8}>
        <Center mt={12}>
          <Button as="a" href="/" colorScheme="pink" variant="solid">
            Back Home
          </Button>
        </Center>

        <Container maxW="container.md" mt={8} bg="gray.200" p={4}>
          {/* Form */}
          <form>
            <FormControl id="name" mb={4}>
              <FormLabel htmlFor="name">Pet's Name</FormLabel>
              <Input
                name="name"
                type="text"
                borderColor="pink.400"
                focusBorderColor="pink.400"
                onChange={updateState}
              />
            </FormControl>

            <FormControl id="owner" mb={4}>
              <FormLabel htmlFor="owner">Owner's Name</FormLabel>
              <Input
                name="owner"
                type="text"
                borderColor="pink.400"
                focusBorderColor="pink.400"
                onChange={updateState}
              />
            </FormControl>

            <FormControl id="date" mb={4}>
              <FormLabel htmlFor="date">Date of Service</FormLabel>
              <Input
                name="date"
                type="date"
                borderColor="pink.400"
                focusBorderColor="pink.400"
                onChange={updateState}
              />
            </FormControl>

            <FormControl id="time" mb={4}>
              <FormLabel htmlFor="time">Time of Service</FormLabel>
              <Input
                name="time"
                type="time"
                borderColor="pink.400"
                focusBorderColor="pink.400"
                onChange={updateState}
              />
            </FormControl>

            <FormControl id="time" mb={4}>
              <FormLabel htmlFor="symptoms">Symptoms</FormLabel>
              <Textarea
                name="symptoms"
                borderColor="pink.400"
                focusBorderColor="pink.400"
                resize="none"
                onChange={updateState}
              ></Textarea>
            </FormControl>

            <Center>
              <Button mt={4} colorScheme="pink" type="submit">
                Create Date
              </Button>
            </Center>
          </form>
          {/* End Form */}
        </Container>
      </Container>
    </Box>
  );
};

export default NewDate;
