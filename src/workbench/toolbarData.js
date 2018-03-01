import SaveIcon from "material-ui-icons/Save";
import ShareIcon from "material-ui-icons/Share";
import UndoIcon from "material-ui-icons/Undo";
import RedoIcon from "material-ui-icons/Redo";
import OpenWithIcon from "material-ui-icons/OpenWith";
import ArrowDownwardIcon from "material-ui-icons/ArrowDownward";

const toolbarData = [
  {
    id: 1,
    label: "Save",
    IconComponent: SaveIcon
  },
  {
    id: 2,
    label: "Save As",
    IconComponent: SaveIcon
  },
  {
    id: 3,
    label: "Share",
    IconComponent: ShareIcon
  },
  {
    id: 4,
    label: "Undo",
    IconComponent: UndoIcon
  },
  {
    id: 5,
    label: "Redo",
    IconComponent: RedoIcon
  },
  {
    id: 6,
    label: "Layout",
    IconComponent: OpenWithIcon
  },
  {
    id: 7,
    label: "Export Graph",
    IconComponent: ArrowDownwardIcon
  }
];

export default toolbarData;
