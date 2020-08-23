import styled from "styled-components";
import { IThemedLockScreenProps } from "@interfaces/IThemedLockScreenProps.interface";

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  transition: .3s ease-in-out all;
  background: ${({theme}: IThemedLockScreenProps) => theme.backgrounds.screen_locker};
  z-index: 999;
  visibility: ${({active}: IThemedLockScreenProps) => active ? "visible" : "hidden"};
  opacity: ${({active}: IThemedLockScreenProps) => active ? .5 : -0};
`;