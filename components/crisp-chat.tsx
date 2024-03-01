"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("1f050667-ddf2-4c82-96cc-54ca6e1ffde5");
  }, []);

  return null;
};
