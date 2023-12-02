import React from "react";
import { IconType } from "react-icons";

interface AuthSocialButtonProps {
  icon: IconType;
  onClick: () => void;
}

const AuthSocialButton: React.FC<AuthSocialButtonProps> = ({
  icon: Icon,
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group inline-flex w-full justify-center rounded-md bg-border shadow-sm px-4 py-2 ring-1 ring-inset ring-muted-foreground transition"
    >
      <Icon className="fill-primary" />
    </button>
  );
};

export default AuthSocialButton;
