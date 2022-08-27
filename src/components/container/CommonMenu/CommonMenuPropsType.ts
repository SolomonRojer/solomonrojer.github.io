import { Dispatch, SetStateAction } from "react";

type FullBarProps = {
  width?: string;
  margin?: string;
  padding?: string;
  navigate: (screen: string) => void;
  setOpen: Dispatch<SetStateAction<boolean>>;
};
type ProfileProps = {
  navigate: (screen: string) => void;
};
type BottomBarProps = {
  navigate: (screen: string) => void;
};

type SmallBarProps = {
  navigate: (screen: string) => void;
};

export type { FullBarProps, SmallBarProps, ProfileProps, BottomBarProps };
