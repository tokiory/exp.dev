"use client";
import {
  Button,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Input,
  Text,
} from "@/components/ui";
import { Heading } from "@/components/quiz/heading";
import { Quiz } from "@/components/quiz/quiz";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useQuizContext } from "@/contexts/quiz";
import { Form } from "@/components/ui";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { QUIZ_PAGES } from "@/data/quiz";

export default function QuizPersonPage() {
  const { setStep, step, personal, setPersonal } = useQuizContext();
  const router = useRouter();

  useEffect(() => {
    setStep(0);
  }, [setStep]);

  const formSchema = z.object({
    name: z.string().min(2, "Минимум 2 символа").max(100),
    surname: z.string().min(2, "Минимум 2 символа").max(100),
    patronymic: z.string().min(2, "Минимум 2 символа").max(100),
    email: z.string().email("Email должен быть валидным"),
    telegram: z
      .string()
      .startsWith("@", "Тег должен начинаться с @")
      .min(2, "Минимум 2 символа")
      .max(100),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    values: {
      ...personal,
    },
    defaultValues: {
      name: "",
      surname: "",
      patronymic: "",
      email: "",
      telegram: "",
    },
  });

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    setPersonal(values);
    router.push(QUIZ_PAGES[step + 1]);
  };

  const handleQuit = () => {
    router.push("/");
  };

  return (
    <Form {...form}>
      <Quiz onSubmit={form.handleSubmit(handleSubmit)}>
        <Heading>Личные данные</Heading>
        <Text className="mt-2">
          Пожалуйста, введите следующие данные для того чтобы правильно
          сформировать таблицу компетенций. Данные, которые вы введете не будут
          сохранены и/или переданы куда-либо.
        </Text>
        <div className="flex flex-col mt-4">
          <div className="font-semibold text-sm">Общие данные</div>
          <div className="grid grid-cols-3 gap-2 mt-2">
            <FormField
              control={form.control}
              name="surname"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Фамилия" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Имя" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="patronymic"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Отчество" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="font-semibold text-sm mt-4">Контактные данные</div>
          <div className="grid grid-cols-3 gap-2 mt-2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Почта" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="telegram"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Телеграм" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="flex justify-between mt-4 items-center">
          <Button onClick={handleQuit} variant="secondary">
            Назад
          </Button>
          <Button type="submit">Продолжить</Button>
        </div>
      </Quiz>
    </Form>
  );
}
