import { Icon } from "@iconify/react";
import { Text } from "@/components/ui";

export const Footer = () => {
  return (
    <footer className="flex font-semibold justify-center gap-1 items-center px-4 py-2">
      <Text>
        Developed by{" "}
        <a
          target="_blank"
          href="https://github.com/tokiory"
          className="text-lime-700"
        >
          tokiory
        </a>{" "}
        with{" "}
      </Text>{" "}
      <Icon icon="fluent-emoji:pink-heart" />
      <Text>in <a className="text-orange-600" target="_blank" href="http://firecode.ru/">Firecode</a></Text>
    </footer>
  );
};
