import { Footer } from "@/components/footer/footer";
import { Heading, Text, Button } from "@/components/ui";
import { Icon } from "@iconify/react";
import NextLink from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col grow justify-center items-center">
        <Icon className="text-6xl" icon="fluent-emoji:sparkles" />
        <Heading className="mt-2">exp.dev</Heading>
        <Text className="mt-1">Сервис для оценки компетенций сотрудников</Text>
        <NextLink href="/quiz/person" className="mt-4">
          <Button className="mt-4">Начать</Button>
        </NextLink>
      </div>
      <Footer />
    </>
  );
}
