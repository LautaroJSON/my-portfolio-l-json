import React from "react"
import CloseIcon from "./close-icon"
import ExpandIcon from "./expand-icon"
import HaburgerIcon from "./hamburger-icon"
import SpinIcon from "./spin-icon"

export const ICONS = {
  closeIcon: CloseIcon,
  expandIcon: ExpandIcon,
  haburgerIcon: HaburgerIcon,
  spinIcon: SpinIcon,
}

export type IconsComponentName = keyof typeof ICONS

export interface IIcons {
  name: IconsComponentName
}

function Icons({ name }: IIcons) {
  const Icons = ICONS[name]

  return <Icons />
}

export default Icons
