"use client";

import { Button, Label, Text } from "@/components/ui";
import { Heading } from "@/components/quiz/heading";
import { Quiz } from "@/components/quiz/quiz";
import { RangeStep } from "@/components/ui/range-step";
import { useEffect, useState } from "react";
import { FRONTEND_SKILL_CATEGORIES } from "@/data/skills/frontend";
import { Icon } from "@iconify/react";
import NextLink from "next/link";
import { useRouter } from "next/navigation";
import { useQuizContext } from "@/contexts/quiz";
import { QUIZ_PAGES } from "@/data/quiz";

export default function QuizSkills() {
  const router = useRouter();
  const { step } = useQuizContext();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push(QUIZ_PAGES[step + 1]);
  };

  const { setStep } = useQuizContext();

  useEffect(() => {
    setStep(() => 2);
  }, [setStep]);

  const [skills, setSkills] = useState<Record<string, number>>({});

  const handleChangeSkill = (skill: string, value: number) => {
    setSkills((prevSkills) => ({ ...prevSkills, [skill]: value }));
  };

  return (
    <Quiz onSubmit={handleSubmit}>
      <Heading>Навыки</Heading>
      <Text className="mt-2">
        На данном этапе вам необходимо выбрать технологии, навыки и компетенции,
        которыми вы владеете.
      </Text>
      <Text className="mt-1">
        Если вы просто знакомы с технологией или навыком, но не использовали
        её/его в работе, то выберите уровень 1.
      </Text>
      <Text>
        Все последующие уровни будут означать, что вы уже использовали эту
        технологию или навык в работе.
      </Text>
      <Text>
        Пятый уровень говорит о совершенном владении технологией или навыком.
      </Text>

      <div className="flex flex-col mt-4 gap-4">
        {FRONTEND_SKILL_CATEGORIES.map((category) => (
          <div key={category.name}>
            <div className="mt-4 font-semibold text-lg">{category.name}</div>
            <div className="grid grid-cols-3 gap-x-8 gap-y-5 mt-3">
              {category.skills.map((skill) => (
                <div key={skill.value}>
                  <div className="flex items-center gap-1">
                    <Icon icon={skill.icon} />
                    <Label>{skill.name}</Label>
                  </div>
                  <RangeStep
                    className="mt-2"
                    value={skills[skill.name] || 0}
                    onChange={(value) => handleChangeSkill(skill.name, value)}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="flex mt-4 justify-between items-center">
        <NextLink href="/quiz/profession">
          <Button variant="secondary">
            Назад
          </Button>
        </NextLink>
        <Button type="submit">
          Продолжить
        </Button>
      </div>
    </Quiz>
  );
}
