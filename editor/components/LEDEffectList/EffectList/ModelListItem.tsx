import { useState, useEffect } from "react";
import type { LEDMap, LEDPartName } from "@/core/models";
import PartList from "./PartList";

import {
  ListItemText,
  ListItemIcon,
  ListItemButton,
  Collapse,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";

interface modelProps {
  modelName: string;
  modelData: LEDMap;
  handleOpenRename: (partName: LEDPartName, effectName: string) => void;
  handleOpenEdit: (partName: LEDPartName, effectName: string) => void;
  handleOpenDelete: (partName: LEDPartName, effectName: string) => void;
  expanded: boolean;
}

export default function ModelListItem({
  modelName,
  modelData,
  handleOpenRename,
  handleOpenEdit,
  handleOpenDelete,
  expanded,
}: modelProps) {
  const [listOpen, setListOpen] = useState(false);
  const handleClick = () => {
    setListOpen(!listOpen);
  };

  useEffect(() => {
    setListOpen(expanded);
  }, [expanded]);

  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <EmojiPeopleIcon />
        </ListItemIcon>
        <ListItemText primary={modelName.toUpperCase()} />
        {listOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={listOpen} timeout="auto" unmountOnExit>
        <PartList
          modelData={modelData}
          handleOpenRename={handleOpenRename}
          handleOpenEdit={handleOpenEdit}
          handleOpenDelete={handleOpenDelete}
        />
      </Collapse>
    </>
  );
}
