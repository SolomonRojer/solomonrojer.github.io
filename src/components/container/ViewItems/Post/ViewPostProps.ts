import { Dispatch } from "react";
import type { PostData } from "../../../../utils/common/PropTypes";

type ViewPostProps = {
  open: boolean;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
  item: PostData;
};

type ViewItemProps = {
  item: PostData;
};

export type { ViewPostProps, ViewItemProps };
