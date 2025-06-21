import { Icon } from "@iconify/react";
import { Text } from "@/components/ui";

export const Footer = () => {
  return (
    <footer className="flex justify-center gap-1 items-center bg-stone-100 px-4 py-2">
      <Text>
        Developed by{" "}
        <a
          target="_blank"
          href="https://github.com/tokiory"
          className="text-amber-700"
        >
          tokiory
        </a>{" "}
        with{" "}
      </Text>{" "}
      <Icon icon="fluent-emoji:pink-heart" />
      <Text>in Firecode</Text>
    </footer>
  );
};
