import { Button, Heading, Text } from '@/components/ui'
import { TEST_SELECTORS } from '@/tests/const/selectors'
import Link from 'next/link'

export default function QuizIntroPage() {
  return (
    <div className="grow flex flex-col justify-center max-w-[800px] mx-auto">
      <div className="text-3xl">Введение</div>
      <div className="mt-2">
        Привет, сейчас мы проведем аудит твоих навыков.
      </div>
      <div className="mt-2">
        Здесь не будет тестов или других способов проверки знаний, так как площадка заточена на способность каждого сотрудника адекватно оценить себя.
      </div>
      <div className="font-semibold mt-4">Как пройдет аудит?</div>
      <div className="mt-1">
        Сам аудит знаний будет проходить в несколько этапов:
      </div>
      <div className="flex flex-wrap gap-2 mt-2">
        {["Сбор общих данных", "Сбор данных о профессии", "Выбор навыков", "Экспортирование данных"].map((text, idx) => (
          <div key={text} className="bg-orange-100 border border-orange-600 font-semibold flex justify-center rounded-md py-1 px-4 text-stone-900 items-center w-fit"><span className="text-stone-600">{idx + 1}.</span>&nbsp;<span>{text}</span></div>
        ))}
      </div>

      <Link href="/quiz/person" className=" mt-6 w-full">
        <Button data-testid={TEST_SELECTORS.introPage.startButton} className="w-full">Начнем!</Button>
      </Link>
    </div>
  )

}
