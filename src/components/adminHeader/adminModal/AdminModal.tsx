import React from "react";

interface AdminProps {
  children: React.ReactNode;
}

export const AdminModal = ({ children }: AdminProps) => {
  return <div>{children}</div>;
};
