import { Dispatch } from "react";
import { SalesData } from "../../../../utils/common/PropTypes";

type KeywordData = {
  key: number;
  label: string;
};

type AddItemBodyProps = {
  onChange?: (e: string) => void;
  moreInputs?: AddMoreField[];
  removeFields?: (id: number) => void;
  AddMoreFields?: () => void;
  handleKeywordAdd: (keyword: string) => void;
  keywordValue: string;
  setKeywordValue: (e: string) => void;
  keywords: KeywordData[];
  handleKeywordDelete: (item: KeywordData) => void;
  type?: string;
  width?: string;
};

type MoreInputsProps = {
  item: AddMoreField;
  removeField: (id: number) => void;
  key: number;
};

type AddMoreField = {
  id: number;
  fieldName: string;
  value: string;
};

type AddItemsHeaderProps = {
  setOpen: Dispatch<React.SetStateAction<boolean>>;
  setNext?: Dispatch<React.SetStateAction<boolean>>;
  RemovePostConfirmation?: (id: string) => void;
  user: User;
  type: string;
  itemId: string;
  next?: boolean;
};
type User = {
  userName: string;
  profile: string;
  userId: string;
};
type TabPanelProps = {
  children?: React.ReactNode;
  index: number | boolean;
  value: number | boolean;
};

type AddPostAndProductProps = {
  open: boolean;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
};

type AddItemsProps = {
  setOpen: Dispatch<React.SetStateAction<boolean>>;
  item?: SalesData;
  value?: boolean;
};

type AddPostOrSellProps = {
  setOpen: Dispatch<React.SetStateAction<boolean>>;
  editItem?: SalesData;
  value: boolean;
  count: number;
};
export type {
  KeywordData,
  AddItemBodyProps,
  MoreInputsProps,
  AddMoreField,
  AddItemsHeaderProps,
  TabPanelProps,
  AddPostAndProductProps,
  AddItemsProps,
  AddPostOrSellProps,
};
