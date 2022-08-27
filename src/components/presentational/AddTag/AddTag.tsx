import { Done } from "@mui/icons-material";
import { InputBase, IconButton, Chip } from "@mui/material";

interface KeywordData {
  key: number;
  label: string;
}

type AddTagProps = {
  handleKeywordAdd: (keyword: string) => void;
  keywordValue: string;
  setKeywordValue: (e: string) => void;
  keywords: KeywordData[];
  handleKeywordDelete: (item: KeywordData) => void;
};

const AddTag: React.FC<AddTagProps> = ({
  handleKeywordAdd,
  keywordValue,
  setKeywordValue,
  keywords,
  handleKeywordDelete
}) => {
  return (
    <>
      <div>
        <InputBase
          placeholder="Add tag"
          endAdornment={
            <IconButton onClick={() => handleKeywordAdd(keywordValue)}>
              <Done
                fontSize="small"
                sx={{ color: "action.active", mr: 1, my: 0.5 }}
              />
            </IconButton>
          }
          value={keywordValue}
          onChange={(e) => setKeywordValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleKeywordAdd(keywordValue);
          }}
        />
      </div>
      {keywords.map((item, i) => (
        <Chip
          label={item.label}
          onDelete={() => handleKeywordDelete(item)}
          size="small"
          key={i}
        />
      ))}
    </>
  );
};

export default AddTag;