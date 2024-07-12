/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import {
  Box,
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { REGISTER } from "../../lib/router";

export default function Login() {
  return (
    <Center w={"100%"} h={"100vh"}>
      <Box mx={1} maxW={"md"} p={9} borderWidth={"1px"} borderRadius={"lg"}>
        <Heading mb={4} size={"lg"} textAlign={"center"}>
          Log In
        </Heading>
        <form onSubmit={() => {}}>
          <FormControl isInvalid={true} py={2}>
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="user@gmail.com" />
            <FormErrorMessage>This is an invalid email</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={true} py={2}>
            <FormLabel>Password</FormLabel>
            <Input type="password" placeholder="your password" />
            <FormErrorMessage>This is an invalid password</FormErrorMessage>
          </FormControl>
          <Button
            mt={4}
            size={"md"}
            width={"full"}
            type="submit"
            colorScheme="teal"
            // isLoading="true"
            loadingText="logging in"
          >
            Log In
          </Button>
        </form>
        <Text fontSize={"larger"} align={"center"} mt={6}>
          Don't have an account?{" "}
          <Link
            as={RouterLink}
            color="teal.800"
            fontWeight="medium"
            textDecor="underline"
            to={REGISTER}
            _hover={{ background: "teal.100" }}
            mt={6}
          >
            Register
          </Link>
        </Text>
      </Box>
    </Center>
  );
}
