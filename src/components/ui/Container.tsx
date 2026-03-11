import type { PropsWithChildren } from "react";

export const Container = ({ children }: PropsWithChildren) => {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 md:px-10">{children}</div>
  );
};
