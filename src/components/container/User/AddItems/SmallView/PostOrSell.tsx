import React, { useEffect } from "react";
import {
  Avatar,
  Box,
  Card,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import { useAddItemsStyle } from "../AddItemsStyle";
import SwipeImage from "../../../../presentational/SwipeImage/ImageList";
import { AddItemBody, AddItemBodyNext } from "../AddItemsBody";
import { AddMoreField, AddPostOrSellProps, KeywordData } from "../AddItemProps";
import AddItemHeader from "../AddItemHeader";
import { LibraryAddCheckRounded } from "@mui/icons-material";
import { stringToColor } from "../../../../../utils/common/StringToColor";

const SharePost: React.FC<AddPostOrSellProps> = ({
  setOpen,
  value,
  count,
  editItem,
}) => {
  const classes = useAddItemsStyle();

  const [keywords, setKeyword] = React.useState<KeywordData[]>([]);
  const [keywordValue, setKeywordValue] = React.useState<string>("");
  const [productImages, setProductImages] = React.useState<string[]>([]);
  const [moreInputs, setMoreInputs] = React.useState<AddMoreField[]>([]);
  const [productImagesBackUp, setProductImagesBackUp] = React.useState<
    string[]
  >([]);

  const imageLength = value ? 5 : 2;

  useEffect(() => {
    if (editItem) {
      console.log(editItem);
      const keywordList: KeywordData[] = [];
      editItem?.keywords?.map((item, i) =>
        keywordList.push({ key: i, label: item })
      );
      setKeyword(keywordList);
      setProductImages(editItem?.images);
    }
  }, [editItem]);

  useEffect(() => {
    if (!value) {
      if (productImages.length > imageLength) {
        setProductImagesBackUp(productImages);
        setProductImages((prev) => prev.filter((item, i) => i < imageLength));
      }
    } else {
      if (productImagesBackUp.length) setProductImages(productImagesBackUp);
    }
  }, [value]);

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
        //
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
    <Box>
      <Box style={{ width: "100%" }}>
        {count === 0 && (
          <SwipeImage
            images={productImages}
            width="100%"
            height="28rem"
            removeImage={onRemoveImage}
            chooseImage={chooseImage}
            type="edit"
            length={imageLength}
            showBorder={false}
          />
        )}
        {count !== 0 && (
          <Box
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <UserProfile />
            <Box
              style={{ position: "relative", height: "4rem", width: "4rem" }}
            >
              <img
                src={productImages[0]}
                alt="Image"
                style={{ height: "4rem", width: "4rem" }}
              />
              {productImages.length > 1 && (
                <LibraryAddCheckRounded
                  color="secondary"
                  style={{
                    fontSize: 14,
                    position: "absolute",
                    top: 5,
                    right: 5,
                  }}
                />
              )}
            </Box>
          </Box>
        )}
        {count === 1 && (
          <Box style={{ width: "100%" }}>
            <AddItemBody
              type={value ? "sale" : "post"}
              handleKeywordAdd={handleKeywordAdd}
              keywordValue={keywordValue}
              setKeywordValue={setKeywordValue}
              keywords={keywords}
              handleKeywordDelete={handleKeywordDelete}
              width="100%"
            />
          </Box>
        )}

        {count === 2 && (
          <AddItemBodyNext
            moreInputs={moreInputs}
            AddMoreFields={AddMoreFields}
            removeFields={removeFields}
            handleKeywordAdd={handleKeywordAdd}
            keywordValue={keywordValue}
            setKeywordValue={setKeywordValue}
            keywords={keywords}
            handleKeywordDelete={handleKeywordDelete}
            width="100%"
          />
        )}
      </Box>
    </Box>
  );
};

const UserProfile = () => {
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <IconButton onClick={() => alert("Profile")}>
        <Avatar
          sx={{
            width: 30,
            height: 30,
            bgcolor: stringToColor("UserName"),
          }}
          alt="Reshna"
          src="Reshna"
        />
      </IconButton>
      <Typography variant="caption">UserName</Typography>
    </Box>
  );
};
export default SharePost;
