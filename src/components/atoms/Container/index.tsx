import React from "react";

import { ContentContainer } from "./styles";
import { IContainerProps } from "@interfaces/IContainerProps.interface";

const Container = ({ children, ...props }: IContainerProps) => (
  <ContentContainer {...props}>{children}</ContentContainer>
);

export default Container;
