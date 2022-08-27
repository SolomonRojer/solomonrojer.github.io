import React, { Dispatch, FC } from "react";
import { SalesData } from "../../../../utils/common/PropTypes";
import PopupDialog from "../../../presentational/Popup/Popup";
import SellPet from "../AddItems/LargeView/SellOrEditPet";

type EditItemProps = {
  open: boolean;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
  item: SalesData;
};

const EditItem: FC<EditItemProps> = ({ open, setOpen, item }) => {
  const descriptionElementRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <PopupDialog
      open={open}
      setOpen={setOpen}
      title=""
      fullScreen
      transparent
      disableAction
    >
      <SellPet setOpen={setOpen} item={item} />
    </PopupDialog>
  );
};

export default EditItem;
