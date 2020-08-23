import React, { useEffect, useState } from "react";
import { Container } from "./styles";
import Eventbus from "@utils/Eventbus";

const ScreenLocker = () => {
  const [screenLockerOpen, setScreenLockerOpen] = useState(false);

  useEffect(() => {
    const body = document.querySelector("body");
    if(body) body.style.overflow = screenLockerOpen ? "hidden" : "auto";
  }, [screenLockerOpen]);

  useEffect(() => {
    Eventbus.$on("openScreenLocker", () => setScreenLockerOpen(true));
    Eventbus.$on("closeScreenLocker", () => close());
  }, []);

  const close = () => {
    setScreenLockerOpen(false);
    Eventbus.$emit("closingScreenLocker");
  };
  return(<Container active={screenLockerOpen} onClick={close} /> );
};

export default ScreenLocker;
