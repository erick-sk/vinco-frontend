import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Swal from 'sweetalert2';

import {
  Container,
  Heading,
  Box,
  Button,
  Center,
  Flex,
  Spacer,
  Text,
} from '@chakra-ui/react';

import clientAxios from '../config/axios';

const Date = (props) => {
  // state of date
  const { id } = useParams();
  const [info, setInfo] = useState([]);

  // get a single date info by id
  useEffect(() => {
    const getSingleInfoAPI = () => {
      clientAxios
        .get(`/patients/${id}`)
        .then((response) => {
          // set data in state
          setInfo(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getSingleInfoAPI();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // delete a single record by id
  const deleteSingleInfo = (e) => {
    e.preventDefault();

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        // delete alert!
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');

        // delete from database
        clientAxios
          .delete(`/patients/${id}`)
          .then(() => {
            props.setConsult(true);
            navigator('/');
          })
          .catch((error) => console.log(error));
      }
    });
  };

  // use for redirect
  const navigator = useNavigate();

  return (
    <Box minH="100vh" bgGradient="linear(to-r, green.200, pink.500)">
      <Heading as="h1" size="xl" textAlign="center" pt={4}>
        Pet Information
      </Heading>

      <Center mt={12}>
        <Button colorScheme="pink" variant="solid">
          <Link to={'/'}>Back Home</Link>
        </Button>
      </Center>

      <Container maxW="container.md" mt={8} bg="gray.200">
        <Box p={4}>
          {/* Name and Dates */}
          <Flex>
            <Heading
              as="h3"
              size="md"
              color="pink.800"
              textTransform="uppercase"
            >
              {info.name}
            </Heading>
            <Spacer />
            <Text fontWeight="bold" color="pink.800" fontSize="md">
              {info.date} - {info.time}
            </Text>
          </Flex>

          {/* Symptoms */}
          <Text my={4} fontSize="2xl">
            {info.symptoms}
          </Text>

          {/* Info Owner */}
          <Text fontWeight="bold">Owner: {info.owner}</Text>

          {/* Button Delete */}
          <Center>
            <Button
              onClick={deleteSingleInfo}
              mt={8}
              colorScheme="red"
              variant="solid"
              type="submit"
            >
              Delete
            </Button>
          </Center>
        </Box>
      </Container>
    </Box>
  );
};

export default Date;
