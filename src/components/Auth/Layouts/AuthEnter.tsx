import { AuthWrapper, AuthTitle } from "@styles/AuthStyles";

type AuthEnterProps = {
  title?: string;
  children: React.ReactNode;
};

export default function AuthEnter({ title, children }: AuthEnterProps) {
  return (
    <AuthWrapper>
      <AuthTitle>{title}</AuthTitle>
      {children}
    </AuthWrapper>
  );
}
