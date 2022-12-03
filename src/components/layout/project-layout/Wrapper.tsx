import clsx from "clsx";
import { PropsWithChildren, useState } from "react";

/**
 * Wrapper component for children of ProjectLayout that resets z-index and defines the base flex column layout.
 */
export const Wrapper: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const [isSidePanelVisible, setIsSidePanelVisible] = useState(false);

  return (
    <div
      className={clsx(
        "z-0 min-h-screen flex flex-col",
        isSidePanelVisible
          ? "transition transform ease-in duration-500 delay-100 translate-x-80"
          : "transition transform ease-in-out duration-500 delay-100 translate-x-0"
      )}
    >
      {children}
    </div>
  );
};
