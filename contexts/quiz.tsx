import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface Personal {
  name: string;
  surname: string;
  patronymic: string;
  email: string;
  telegram: string;
}

interface Work {
  position: string;
  grade: string;
  growthMessage: string;
}

interface QuizContextData {
  personal: Personal;
  setPersonal: Dispatch<SetStateAction<Personal>>;
  work: Work;
  setWork: Dispatch<SetStateAction<Work>>;
  skills: Record<string, number>;
  setSkills: Dispatch<SetStateAction<Record<string, number>>>;
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
}

const QuizContext = createContext({} as QuizContextData);

export const QuizProvider: FC<PropsWithChildren> = ({ children }) => {
  const [step, setStep] = useState(0);
  const [personal, setPersonal] = useState<Personal>({
    name: "",
    surname: "",
    patronymic: "",
    email: "",
    telegram: "",
  });

  const [work, setWork] = useState<Work>({
    position: "",
    grade: "",
    growthMessage: "",
  });

  const [skills, setSkills] = useState<Record<string, number>>({});

  return (
    <QuizContext.Provider
      value={{
        step,
        setStep,
        work,
        setWork,
        skills,
        setSkills,
        personal,
        setPersonal,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuizContext = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error("useQuizContext must be used within a QuizProvider");
  }
  return context;
};
