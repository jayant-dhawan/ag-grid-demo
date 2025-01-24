import { Container, Flex, Heading } from "@radix-ui/themes";
import classes from "./NavBar.module.css";

export default function NavBar() {
  return (
    <Flex p="4" align={"center"} className={classes.navbar}>
      <Container>
        <Heading weight="bold">AG Grid Demo</Heading>
      </Container>
    </Flex>
  );
}
