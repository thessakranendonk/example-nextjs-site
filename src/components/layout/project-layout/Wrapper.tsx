import { PropsWithChildren } from "react";

/**
 * Wrapper component for children of ProjectLayout that resets z-index and defines the base flex column layout.
 */
export const Wrapper: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return <div className="z-0 min-h-screen flex flex-col">{children}</div>;
};
