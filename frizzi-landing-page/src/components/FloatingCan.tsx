"use client";

import React, { forwardRef, ReactNode } from "react";
import { Float } from "@react-three/drei";
import { SodaCan, SodaCanProps } from "./SodaCan";
import { Group } from "three";

type FloatingCanProps = {
  flavor?: SodaCanProps["flavor"];
  floatSpeed?: number;
  floatIntensity?: number;
  floatRange?: [number, number];
  rotationIntensity?: number;
  children?: ReactNode;
};

const FloatingCan = forwardRef<Group, FloatingCanProps>(
  (
    {
      flavor = "blackCherry",
      floatSpeed = 1.5,
      floatIntensity = 1,
      floatRange = [-0.1, 0.1],
      rotationIntensity = 1,
      children,
      ...props
    }: FloatingCanProps,
    ref,
  ) => {
    return (
      <group ref={ref} {...props}>
        <Float
          speed={floatSpeed}
          rotationIntensity={rotationIntensity}
          floatingRange={floatRange}
          floatIntensity={floatIntensity}
        >
          {children}
          <SodaCan flavor={flavor} />
        </Float>
      </group>
    );
  },
);

FloatingCan.displayName = "FloatingCan";

export default FloatingCan;
