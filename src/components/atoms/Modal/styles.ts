import styled from "styled-components";
import { IThemedLockScreenProps } from "@interfaces/IThemedLockScreenProps.interface";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  transition: .3s ease-in-out all;
  transform: scale(${({active}: IThemedLockScreenProps) => active ? 1 : .3});
  opacity: ${({active}: IThemedLockScreenProps) => active ? 1 : 0};
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;

  *{
    pointer-events: all;
  }
`;