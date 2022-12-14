import {
  ArrowDropDown,
  DoneOutline,
  InfoOutlined,
  RestartAltOutlined,
} from "@mui/icons-material";
import { Popover, Radio } from "antd";
import { uuid } from "@src/utils/functions/uuid";

import useLabels from "../../../hooks/useLabels";

import {
  LeftToolbar,
  RightToolbar,
  StatusItem,
  ToolbarWrapper,
  StatusText,
  FilterWrapper,
} from "./styled";
import { useState } from "react";

const BoardToolbar = () => {
  return (
    <ToolbarWrapper>
      <LeftToolbar>
        <StatusItem>
          <InfoOutlined color="error" />
          <StatusText>6 Open</StatusText>
        </StatusItem>
        <StatusItem>
          <DoneOutline color="success" />
          <StatusText>6 Close</StatusText>
        </StatusItem>
        <StatusItem>
          <RestartAltOutlined color="success" />
          <StatusText>Reset</StatusText>
        </StatusItem>
      </LeftToolbar>

      <RightToolbar>
        <Popover
          placement="bottomRight"
          trigger="click"
          title={<div>Filter by label</div>}
          content={<LabelPopoverContent />}
        >
          Label <ArrowDropDown />
        </Popover>
        <Popover
          placement="bottomRight"
          trigger="click"
          title={() => <div>Sort by</div>}
          content={<SortPopoverContent />}
        >
          Sort <ArrowDropDown />
        </Popover>
      </RightToolbar>
    </ToolbarWrapper>
  );
};

const listOfSort = () => [
  {
    label: "Newest",
    value: 1,
  },
  {
    label: "Oldest",
    value: 2,
  },
  {
    label: "Most commented",
    value: 3,
  },
  {
    label: "Least commented",
    value: 4,
  },
  {
    label: "Recently updated",
    value: 5,
  },
  {
    label: "Least recently updated",
    value: 6,
  },
];

const SortPopoverContent = () => {
  const [value, setValue] = useState(1);

  return (
    <FilterWrapper>
      <Radio.Group
        options={listOfSort()}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        value={value}
      />
    </FilterWrapper>
  );
};

const LabelPopoverContent = () => {
  const { labels } = useLabels();

  const [values, setValues] = useState<string[]>([]);

  const toggleHandler = (label: string) => {
    if (values.includes(label)) {
      setValues((prev) => {
        return prev.filter((val) => val !== label);
      });
    } else {
      setValues((prev) => [...prev, label]);
    }
  };

  return (
    <FilterWrapper>
      {labels
        .map((label) => ({
          label: label.label,
          value: label.label,
        }))
        .map(({ value, label }) => {
          return (
            <Radio
              key={uuid()}
              checked={values.includes(value)}
              onClick={() => toggleHandler(label)}
            >
              {label}
            </Radio>
          );
        })}
    </FilterWrapper>
  );
};

export default BoardToolbar;
