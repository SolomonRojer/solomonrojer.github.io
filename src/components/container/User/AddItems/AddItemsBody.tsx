import React, { FC } from "react";
import {
  Box,
  Typography,
  CardContent,
  TextField,
  IconButton,
  Button,
  Divider,
  InputBase,
  FormHelperText,
} from "@mui/material";
import {
  Phone,
  LocationOn,
  CurrencyRupee,
  CloseRounded,
} from "@mui/icons-material";
import AddTag from "../../../presentational/AddTag/AddTag";
import { AddItemBodyProps, MoreInputsProps } from "./AddItemProps";

export const AddItemBody: React.FC<AddItemBodyProps> = ({
  onChange,
  type,
  handleKeywordAdd,
  keywordValue,
  setKeywordValue,
  keywords,
  handleKeywordDelete,
  width = "20rem",
}) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <CardContent>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 0.3 },
            width: width,
          }}
          noValidate
          autoComplete="off"
        >
          <InputBase
            sx={{ ml: 1, flex: 1, height: "5rem" }}
            placeholder="Write caption..."
            multiline
            rows={5}
            fullWidth
          />
          <Divider />
          <InputBase fullWidth placeholder="title" />
          <Divider />
          <InputBase
            fullWidth
            placeholder="location"
            endAdornment={
              <LocationOn
                fontSize="small"
                sx={{ color: "action.active", mr: 1, my: 0.5 }}
              />
            }
          />
          <Divider />
          {type === "sale" ? (
            <>
              <InputBase
                fullWidth
                placeholder="price"
                endAdornment={
                  <CurrencyRupee
                    fontSize="small"
                    sx={{ color: "action.active", mr: 1, my: 0.5 }}
                  />
                }
              />
              <Divider />
              <InputBase
                fullWidth
                placeholder="price"
                endAdornment={
                  <Phone
                    fontSize="small"
                    sx={{ color: "action.active", mr: 1, my: 0.5 }}
                  />
                }
              />
              <Divider />
            </>
          ) : (
            <AddTag
              handleKeywordAdd={handleKeywordAdd}
              keywordValue={keywordValue}
              setKeywordValue={setKeywordValue}
              keywords={keywords}
              handleKeywordDelete={handleKeywordDelete}
            />
          )}
        </Box>
      </CardContent>
    </Box>
  );
};

const MoreInputs: FC<MoreInputsProps> = ({ item, removeField, key }) => (
  <Box
    sx={{
      "& > :not(style)": { m: 0.5 },
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
    }}
    key={key}
  >
    <TextField
      placeholder="Property name ex: color"
      size="small"
      variant="standard"
    />
    <Typography style={{ marginInline: 5 }}>:</Typography>
    <TextField placeholder="Value ex: red" size="small" variant="standard" />
    <IconButton onClick={() => removeField(item.id)}>
      <CloseRounded fontSize="small" color="error" />
    </IconButton>
  </Box>
);

export const AddItemBodyNext: React.FC<AddItemBodyProps> = ({
  onChange,
  moreInputs,
  removeFields,
  AddMoreFields,
  handleKeywordAdd,
  keywordValue,
  setKeywordValue,
  keywords,
  handleKeywordDelete,
  width = "30rem",
}) => {
  return (
    <CardContent>
      <Box
        sx={{
          "& > :not(style)": { m: 0.2 },
          width: width,
        }}
      >
        <FormHelperText>can add five tags related to your pet</FormHelperText>
        <AddTag
          handleKeywordAdd={handleKeywordAdd}
          keywordValue={keywordValue}
          setKeywordValue={setKeywordValue}
          keywords={keywords}
          handleKeywordDelete={handleKeywordDelete}
        />
        <Divider />
        <Box style={{ marginTop: "2%" }}>
          <FormHelperText>
            can add five extra fields related to your pet
          </FormHelperText>
          {moreInputs?.map(
            (item, i) =>
              removeFields && (
                <MoreInputs item={item} removeField={removeFields} key={i} />
              )
          )}
          <Button
            fullWidth
            variant="outlined"
            style={{ borderColor: "#eee", marginTop: "1%" }}
            color="secondary"
            onClick={AddMoreFields}
          >
            <Typography variant="body2" color="text.secondary">
              + Add more fields
            </Typography>
          </Button>
        </Box>
      </Box>
    </CardContent>
  );
};
