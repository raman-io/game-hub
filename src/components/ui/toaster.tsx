import {
  Portal,
  Spinner,
  Stack,
  useToast,
  Box,
  Button,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

export const Toaster = () => {
  const toast = useToast();
  const [loading, setLoading] = useState<boolean>(false);

  const showToast = (): void => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Action completed.",
        description: "This is an example toast notification.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    }, 2000);
  };

  return (
    <Portal>
      <Box position="fixed" bottom="10px" right="10px">
        <Button onClick={() => showToast()} colorScheme="blue">
          Show Toast
        </Button>

        {loading && (
          <Stack direction="row" spacing={2} align="center" mt={2}>
            <Spinner size="sm" />
            <Text>Loading...</Text>
          </Stack>
        )}
      </Box>
    </Portal>
  );
};
