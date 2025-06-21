import type { FC, FormEventHandler, PropsWithChildren } from "react";

interface Props {
  onSubmit?: FormEventHandler<HTMLFormElement>;
}

export const Quiz: FC<PropsWithChildren<Props>> = ({ children, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="flex flex-col">
      {children}
    </form>
  );
};
