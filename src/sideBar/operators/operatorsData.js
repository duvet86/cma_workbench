import SearchIcon from "material-ui-icons/Search";
import FilterListIcon from "material-ui-icons/FilterList";
import FunctionsIcon from "material-ui-icons/Functions";
import InsertChartIcon from "material-ui-icons/InsertChart";
import ShareIcon from "material-ui-icons/Share";
import SubdirectoryArrowRightIcon from "material-ui-icons/SubdirectoryArrowRight";
import SubdirectoryArrowLeftIcon from "material-ui-icons/SubdirectoryArrowLeft";

export const itemType = {
  OPERATOR: "OPERATOR"
};

export const staticOperatorsList = [
  {
    OperatorServiceId: 1,
    Label: "Data Query",
    Description: "Query your data"
  },
  {
    OperatorServiceId: 2,
    Label: "Filter",
    Description: "Filter your data"
  }
  // {
  //   OperatorServiceId: 3,
  //   Label: "Text/Notes",
  //   Description: "Add notes to your queries",
  // },
  // {
  //   OperatorServiceId: 4,
  //   Label: "Top N",
  //   Description: "Select only top n records from your query",
  // },
  // {
  //   OperatorServiceId: 5,
  //   Label: "Rank",
  //   Description: "Partion your data in groups",
  // }
];

export const operatorsExtraInfo = {
  // Data Query.
  1: {
    IconComponent: SearchIcon,
    backgroundColor: "#7b582d"
  },
  // Filter.
  2: {
    IconComponent: FilterListIcon,
    backgroundColor: "#2c5367"
  },
  // // Text/Notes.
  // 3: {
  //   IconComponent: NoteIcon
  //   //backgroundColor: "#e0b841"
  // },
  // // Top N.
  // 4: {
  //   IconComponent: ArrowUpwardIcon
  //   //backgroundColor: "#c2b29f"
  // },
  // // Rank.
  // 5: {
  //   IconComponent: ArrowDownwardIcon
  //   //backgroundColor: "#c2b29f"
  // },
  // Calculator.
  "f2b180d1-8c2c-422c-bd70-3a84cad759ee": {
    IconComponent: FunctionsIcon,
    backgroundColor: "#e4ab00"
  },
  // Histogram.
  "6ac6ee28-4adf-4a94-9c9c-60393a089b53": {
    IconComponent: InsertChartIcon,
    backgroundColor: "#861b1b"
  },
  // Join.
  "447a2ad9-6201-4c24-88d9-7dd2b761482f": {
    IconComponent: ShareIcon,
    backgroundColor: "#458159"
  },
  // Pivot.
  "e27b60fb-e3f4-4619-82db-e7b1ecf572b2": {
    IconComponent: SubdirectoryArrowRightIcon,
    backgroundColor: "#0880c7"
  },
  // Unpivot.
  "b5d85439-cffb-4198-8818-3921607a4e8b": {
    IconComponent: SubdirectoryArrowLeftIcon,
    backgroundColor: "#0831c7"
  }
};
