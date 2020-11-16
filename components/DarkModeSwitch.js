import { useColorMode, Switch } from "@chakra-ui/react";

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <Switch
      position="fixed"
      top="2rem"
      left="2rem"
      colorScheme="black"
      isChecked={isDark}
      onChange={toggleColorMode}
    />
  );
};
