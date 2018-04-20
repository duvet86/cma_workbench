export const DATA_TYPES = {
  NOTSPECIFIED: "NotSpecified",
  TEXTVALUE: "TextValue",
  BOOLVALUE: "BoolValue",
  INTERVALVALUE: "Interval",
  INTVALUE: "IntValue",
  DOUBLEVALUE: "DoubleValue",
  TEXTVALUEWITHLABEL: "TextValueWithLabel",
  TEXTVALUEWITHMASK: "TextValueWithMask",
  TEXTVALUEWITHORDER: "TextValueWithOrder",
  SELECT: "Select",
  TEXTINPUTLIST: "TextInputList",
  MULTISELECT: "MultiSelect"
};

export function setConstraintDisplayValue(constraint) {
  switch (constraint.DataType) {
    case DATA_TYPES.INTERVALVALUE:
      constraint.displayValue = {
        intervalType: constraint.Values[0][0],
        intervalString: constraint.Values[0][1],
        intervalLabel: constraint.Values[0][2]
      };
      break;

    case DATA_TYPES.TEXTVALUE:
    case DATA_TYPES.TEXTVALUEWITHLABEL:
    case DATA_TYPES.TEXTVALUEWITHMASK:
    case DATA_TYPES.TEXTVALUEWITHORDER:
    case DATA_TYPES.BOOLVALUE:
    case DATA_TYPES.INTVALUE:
    case DATA_TYPES.DOUBLEVALUE:
      constraint.displayValue = constraint.Values[0][0];
      break;
    // case DATA_TYPES.SELECT:
    //   c.displayValue = {
    //     valuesHint: valuesHint ? valuesHint : "NoHint",
    //     values: values,
    //     valuesDisplayStringsPreview: valuesDisplayStringsPreview
    //   };
    //   break;
    // case DATA_TYPES.TEXTINPUTLIST:
    // case DATA_TYPES.MULTISELECT:
    //   c.displayValue = {
    //     valuesHint: valuesHint ? valuesHint : "SelectedAll",
    //     values: values,
    //     valuesDisplayStringsPreview: valuesDisplayStringsPreview
    //   };
    //   break;
    default:
      constraint.displayValue = "";
      break;
  }
}
