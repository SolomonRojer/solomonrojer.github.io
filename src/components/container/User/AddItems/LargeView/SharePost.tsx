import React, { useEffect } from "react";
import { Box, Card, Divider, Typography } from "@mui/material";
import { useAddItemsStyle } from "../AddItemsStyle";
import SwipeImage from "../../../../presentational/SwipeImage/ImageList";
import { AddItemBody } from "../AddItemsBody";
import AddItemHeader from "../AddItemHeader";
import { AddItemsProps, KeywordData } from "../AddItemProps";

const SharePost: React.FC<AddItemsProps> = ({ setOpen }) => {
  const classes = useAddItemsStyle();

  const [keywords, setKeyword] = React.useState<KeywordData[]>([]);
  const [keywordValue, setKeywordValue] = React.useState<string>("");
  const [imageExceedText, setImageExceedText] = React.useState("");
  const [productImages, setProductImages] = React.useState<string[]>([]);

  const imageLength = 2;

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
      if (productImages.length + e.target.files?.length <= imageLength) {
        const files: File[] = Array.prototype.slice.call(e.target.files);
        const imageURL: string[] = [];
        files.forEach((image) => imageURL.push(URL.createObjectURL(image)));
        setProductImages((prev) => [...prev, ...imageURL]);
      } else {
        setImageExceedText(
          `choose only ${imageLength - productImages.length} picture`
        );
      }
  };

  const onRemoveImage = (index: number) => {
    setProductImages(productImages.filter((item, i) => i !== index));
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
        user={{
          profile: "",
          userName: "UserName",
          userId: "Shrimp and Chorizo Paella",
        }}
        type="post"
        itemId=""
      />
      <Divider />
      <Box sx={{ display: "flex", width: "50rem", height: "25rem" }}>
        <AddItemBody
          type="post"
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
            length={imageLength}
          />
          <Typography color="error.main" variant="caption">
            {imageExceedText}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};

export default SharePost;
