import { AuthWrapper, AuthTitle } from "@styles/AuthStyles";
import { ReactNode } from "react";

type AuthEnterProps = {
  title?: string;
  children: ReactNode;
};

export default function AuthEnter({title, children}: AuthEnterProps) {
  return (
    <AuthWrapper>
      <AuthTitle>{title}</AuthTitle>
      {children}
    </AuthWrapper>
  );
}
