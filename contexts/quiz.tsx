"use client";
import { Personal } from "@/types/personal.types";
import { Work } from "@/types/work.types";
import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

interface QuizContextData {
  personal: Personal;
  setPersonal: Dispatch<SetStateAction<Personal>>;
  work: Work;
  setWork: Dispatch<SetStateAction<Work>>;
  skills: Record<string, number>;
  setSkills: (state: Record<string, number>) => void;
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
  cachedFields: Record<"work" | "personal" | "skills", boolean>;
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

  const [cachedFields, setCachedFields] = useState({
    work: false,
    personal: false,
    skills: false,
  });

  const [skills, setSkills] = useState<Record<string, number>>({});

  const saveWork: Dispatch<SetStateAction<Work>> = (state) => {
    localStorage.setItem(
      "quiz_work",
      state instanceof Function
        ? JSON.stringify(state(work))
        : JSON.stringify(state),
    );
    setWork(state);
  };

  const savePersonal: Dispatch<SetStateAction<Personal>> = (state) => {
    localStorage.setItem(
      "quiz_personal",
      state instanceof Function
        ? JSON.stringify(state(personal))
        : JSON.stringify(state),
    );
    setPersonal(state);
  };

  const saveSkills = (state: Record<string, number>) => {
    const newSkills = { ...skills, ...state };
    localStorage.setItem("quiz_skills", JSON.stringify(newSkills));
    setSkills(newSkills);
  };

  useEffect(() => {
    const work = localStorage.getItem("quiz_work");
    console.log("work", work);
    if (work) {
      setCachedFields((prev) => ({
        ...prev,
        work: true,
      }));
      setWork(JSON.parse(work));
    }

    const skills = localStorage.getItem("quiz_skills");
    if (skills) {
      setCachedFields((prev) => ({
        ...prev,
        skills: true,
      }));
      setSkills(JSON.parse(skills));
    }

    const personal = localStorage.getItem("quiz_personal");
    if (personal) {
      setCachedFields((prev) => ({
        ...prev,
        personal: true,
      }));
      setPersonal(JSON.parse(personal));
    }
  }, []);

  return (
    <QuizContext.Provider
      value={{
        cachedFields,
        step,
        setStep,
        work,
        skills,
        personal,
        setWork: saveWork,
        setSkills: saveSkills,
        setPersonal: savePersonal,
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
