import React, { useEffect } from "react";
import { Box, Typography, Card, Divider } from "@mui/material";
import AlertDialog from "../../../../presentational/AlertDialog/ConfirmationDialog";
import SwipeImage from "../../../../presentational/SwipeImage/ImageList";
import AddItemHeader from "../AddItemHeader";
import { AddItemBody, AddItemBodyNext } from "../AddItemsBody";
import { KeywordData, AddMoreField, AddItemsProps } from "../AddItemProps";

const SellPet: React.FC<AddItemsProps> = ({ setOpen, item }) => {  

  const [keywords, setKeyword] = React.useState<KeywordData[]>([]);
  const [keywordValue, setKeywordValue] = React.useState<string>("");
  const [next, setNext] = React.useState<boolean>(false);
  const [alertDialog, setAlertDialog] = React.useState(false);  
  const [imageExceedText, setImageExceedText] = React.useState("");
  const [productImages, setProductImages] = React.useState<string[]>([]);
  const [moreInputs, setMoreInputs] = React.useState<AddMoreField[]>([]);

  const imageLength = 5;

  useEffect(() => {
    setImageExceedText(
      `you can choose ${
        imageLength - productImages.length > 1 ? `upto` : `only`
      } ${imageLength - productImages.length} ${
        imageLength - productImages.length > 1 ? `pictures` : `picture`
      }`
    );
    if (productImages.length === imageLength) setImageExceedText("");
  }, [productImages]);

  const RemovePostConfirmation = (id: string) => {
    setAlertDialog(true);
  };

  const RemovePost = () => {
    // remove with removeId
    setAlertDialog(false);
    setOpen(false);
  };

  const handleKeywordDelete = (keywordToRemove: KeywordData) => {
    setKeyword((items) =>
      items.filter((item) => item.key !== keywordToRemove.key)
    );
  };

  const handleKeywordAdd = (value: string) => {
    if (value && keywords.length < 5) {
      const keywordExist = keywords.find((item) => item.label === value);
      if (!keywordExist) {
        const keywordToAdd = {
          key: keywords.length + 1,
          label: value,
        };
        setKeyword((prevElements) => [...prevElements, keywordToAdd]);
        setKeywordValue("");
      }
    }
  };

  const chooseImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length)
      if (productImages.length + e.target.files?.length <= 5) {
        const files: File[] = Array.prototype.slice.call(e.target.files);
        const imageURL: string[] = [];
        files.forEach((image) => imageURL.push(URL.createObjectURL(image)));
        setProductImages((prev) => [...prev, ...imageURL]);
      } else {
        setImageExceedText(`choose only ${5 - productImages.length} images`);
      }
  };

  const onRemoveImage = (index: number) => {
    setProductImages(productImages.filter((item, i) => i !== index));
  };

  const AddMoreFields = () => {
    if (moreInputs.length < 5) {
      setMoreInputs((prevFields) => [
        ...prevFields,
        {
          id: moreInputs.length + 1,
          fieldName: "",
          value: "",
        },
      ]);
    }
  };

  const removeFields = (id: number) => {
    setMoreInputs(moreInputs.filter((item) => item.id !== id));
  };

  return (
    <Card
      style={{
        borderRadius: 0,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
      }}
    >
      <AddItemHeader
        setOpen={setOpen}
        setNext={setNext}
        next={next}
        user={{
          profile: "",
          userName: "UserName",
          userId: "Shrimp and Chorizo Paella",
        }}
        type="sale"
        RemovePostConfirmation={RemovePostConfirmation}
        itemId={item?.title as string}
      />
      <Divider />
      {!next ? (
        <Box sx={{ display: "flex", width: "50rem", height: "25rem" }}>
          <AddItemBody
            type="sale"
            handleKeywordAdd={handleKeywordAdd}
            keywordValue={keywordValue}
            setKeywordValue={setKeywordValue}
            keywords={keywords}
            handleKeywordDelete={handleKeywordDelete}
          />
          <Box>
            <SwipeImage
              images={productImages}
              height="19rem"
              width="27rem"
              removeImage={onRemoveImage}
              chooseImage={chooseImage}
              type="edit"
            />
            <Typography color="error.main" variant="caption">
              {imageExceedText}
            </Typography>
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            width: "50rem",
            height: "25rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            overflowY: "scroll",
          }}
        >
          <AddItemBodyNext
            moreInputs={moreInputs}
            AddMoreFields={AddMoreFields}
            removeFields={removeFields}
            handleKeywordAdd={handleKeywordAdd}
            keywordValue={keywordValue}
            setKeywordValue={setKeywordValue}
            keywords={keywords}
            handleKeywordDelete={handleKeywordDelete}
          />
        </Box>
      )}
      <AlertDialog
        alertDialog={alertDialog}
        setAlertDialog={setAlertDialog}
        handleConfirm={RemovePost}
      />
    </Card>
  );
};

export default SellPet;
