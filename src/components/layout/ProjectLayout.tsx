import { NavigationLink } from "component-bible-library/lib/components/SimpleHeader/SimpleHeader";
import { PropsWithChildren, useContext } from "react";
import { Content } from "./project-layout/Content";
import Footer from "./project-layout/Footer";
import { Header } from "./project-layout/Header";
import { Wrapper } from "./project-layout/Wrapper";

const containerPaddingStyle = "px-4 sm:px-6 xl:px-8";

/**
 * Responsive web UI layout for RheumInfo.
 * Includes a header with responsive navigation menu and a footer.
 */
export const ProjectLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <Content containerPaddingStyle={containerPaddingStyle}>
        {children}
      </Content>
      <Footer />
    </Wrapper>
  );
};
