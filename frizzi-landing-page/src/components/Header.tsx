import React from "react";
import { FizziLogo } from "@/components/FizziLogo";
type Props = {};

export default function Header({}: Props) {
  return (
    <header className="-mb-28 flex justify-center bg-yellow-300 py-4">
      <FizziLogo className="z-10 h-20 cursor-pointer text-sky-800" />
    </header>
  );
}
