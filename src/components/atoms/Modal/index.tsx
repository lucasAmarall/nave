import React, { useEffect, useState, ReactElement } from "react";
import Eventbus from "@utils/Eventbus";

import { Container } from "./styles";
const ScreenLocker = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [component, setComponent] = useState<ReactElement | null>(() => null);

  useEffect(() => {
    Eventbus.$on("openModal", open);
    Eventbus.$on("closingScreenLocker", close);
  }, []);

  const open = (componentToOpen: ReactElement) => {
    Eventbus.$emit("openScreenLocker");
    setIsOpen(true);
    setComponent(componentToOpen);
  };
  
  const close = () => {
    Eventbus.$emit("closeScreenLocker");
    setIsOpen(false);
    setTimeout(() => {
      setComponent(() => null);
      // animation time
    }, 400);
  };

  const ComponentToShow = () => component;
  return (
    <Container active={isOpen}>
      <ComponentToShow />
    </Container>
  );
};

export default ScreenLocker;
