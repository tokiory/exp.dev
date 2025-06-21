"use client";
import { QuizHeading } from "@/components/quiz/quiz-heading";
import {
  Text,
  Select,
  Textarea,
  Label,
  Badge,
  Button,
  Form,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui";
import { Quiz } from "@/components/quiz/quiz";
import { useEffect } from "react";
import { GRADES, SOFTWARE_GRADES } from "@/data/grade";
import { PROFESSIONS } from "@/data/profession";
import { useQuizContext } from "@/contexts/quiz";
import { useRouter } from "next/navigation";
import { QUIZ_PAGES } from "@/data/quiz";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { QuizCacheBanner } from "@/components/quiz/quiz-cache-banner";

export default function QuizProfession() {
  const router = useRouter();
  const { setStep, step, work, setWork, cachedFields } = useQuizContext();

  const handlePrevious = () => {
    router.push("/quiz/person");
  };

  useEffect(() => {
    setStep(() => 1);
  }, [setStep]);

  const grades = [...GRADES];

  const isTechSpecialist = [
    "frontend_developer",
    "backend_developer",
    "fullstack_developer",
    "game_developer",
    "security_specialist",
    "devops_engineer",
    "mobile_developer",
  ].includes(work.position);

  if (isTechSpecialist) {
    grades.push(...SOFTWARE_GRADES);
  } else if (SOFTWARE_GRADES.map((grade) => grade.value).includes(work.grade)) {
    setWork((work) => ({ ...work, grade: GRADES.at(-1)!.value }));
  }

  const formSchema = z.object({
    grade: z.string().nonempty("Необходимо выбрать уровень"),
    position: z.string().nonempty("Необходимо указать должность"),
    growthMessage: z.string().max(10000, "Слишком длинное сообщение"),
    specificTasksMessage: z.string().max(10000, "Слишком длинное сообщение"),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    values: {
      ...work,
      growthMessage: work.growthMessage ?? "",
      specificTasksMessage: work.specificTasksMessage ?? "",
    },
  });

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    setWork(values);
    router.push(QUIZ_PAGES[step + 1]);
  };

  return (
    <Form {...form}>
      <Quiz onSubmit={form.handleSubmit(handleSubmit)}>
        <QuizHeading>Профессия</QuizHeading>
        <Text className="mt-2">
          Теперь немного поговорим о вашей профессии. В данной форме необходимо
          заполнить все актуальные данные, <br /> согласно вашему опыту и
          знаниям.
        </Text>
        {cachedFields.work && <QuizCacheBanner className="mt-2" />}

        <Label className="mt-4">Профессия и грейд</Label>
        <div className="flex flex-col mt-2">
          <div className="grid gap-4 grid-cols-3">
            <FormField
              control={form.control}
              name="position"
              render={({ field }) => (
                <FormItem>
                  <Select
                    options={PROFESSIONS}
                    value={field.value}
                    onChange={field.onChange}
                    placeholder="Выберите профессию..."
                    searchPlaceholder="Поиск профессии..."
                    emptyMessage="Профессия не найдена."
                  />
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="grade"
              render={({ field }) => (
                <FormItem>
                  <Select
                    options={grades}
                    value={field.value}
                    onChange={field.onChange}
                    placeholder="Выберите грейд..."
                    searchPlaceholder="Поиск грейда..."
                    emptyMessage="Грейд не найден."
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Label className="mt-4 flex items-center">
            <span>Точки роста</span>
            <Badge variant="secondary">Опционально</Badge>
          </Label>
          <Text className="mt-1">
            В данном поле следует описать ваши планы карьерного развития, кем вы
            хотите стать в будущем, а также что готовы делать для достижения
            этих целей.
          </Text>
          <FormField
            control={form.control}
            name="growthMessage"
            render={({ field }) => (
              <FormItem>
                <Textarea
                  {...field}
                  className="mt-2"
                  placeholder="Я бы хотел повысить свой уровень знаний во Vue и стать миддлом. Также, мне интересен React и я хотел бы попробовать себя в мобильной разработке на React Native..."
                ></Textarea>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Label className="mt-4 flex items-center">
          <span>Специфические задачи</span>
          <Badge variant="secondary">Опционально</Badge>
        </Label>
        <Text className="mt-1">
          Если у вас есть желание работать в каком-то определенном направлении
          или поработать с определенноыми технологиями, то отпишите об этом в
          данном поле.
        </Text>
        <FormField
          control={form.control}
          name="specificTasksMessage"
          render={({ field }) => (
            <FormItem>
              <Textarea
                {...field}
                className="mt-2"
                placeholder="Мне интересны проекты, где используется 3D-графика и происходит работа с графическими библиотеками..."
              ></Textarea>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-between mt-4 items-center">
          <Button type="button" onClick={handlePrevious} variant="secondary">
            Назад
          </Button>
          <Button type="submit">Продолжить</Button>
        </div>
      </Quiz>
    </Form>
  );
}
