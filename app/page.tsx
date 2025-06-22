import { Footer } from "@/components/footer/footer";
import { Heading, Text, Button } from "@/components/ui";
import { Icon } from "@iconify/react";
import NextLink from "next/link";
import MainSparkleBackground from "@/components/main/main-sparkles";
import { TEST_SELECTORS } from "@/tests/const/selectors";

export default function Home() {
  return (
    <>
      <MainSparkleBackground />
      <div className="flex flex-col grow justify-center items-center">
        <Icon className="text-6xl" icon="fluent-emoji:sparkles" />
        <Heading className="mt-2">exp.dev</Heading>
        <Text className="mt-1">Сервис для оценки компетенций сотрудников</Text>
        <NextLink href="/quiz/person" className="mt-4">
          <Button
            data-testid={TEST_SELECTORS.mainPage.startButton}
            className="mt-4"
          >
            Начать
          </Button>
        </NextLink>
      </div>
      <Footer />
    </>
  );
}
