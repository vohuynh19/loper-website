import { Input, Popover, Space } from "antd";
import { FC, useState } from "react";

import FilterListIcon from "@mui/icons-material/FilterList";
import SortIcon from "@mui/icons-material/Sort";
import SearchIcon from "@mui/icons-material/Search";
import RefreshIcon from "@mui/icons-material/Refresh";

import IconButton from "@quest/components/IconButton";
import { FilterState } from "@quest/types/states";

import { Wrapper } from "./styled";
import { useLocale } from "~/src/hooks/useLocale";

type FilterBarProps = {
  onSearch: (filter: FilterState) => void;
};

const FilterBar: FC<FilterBarProps> = ({ onSearch }) => {
  const { t } = useLocale("quest");
  const [filter, setFilter] = useState<FilterState>({});
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);

  const refreshFilterHandler = () => {};
  const changeFilterHandler = () => {};
  const changeSortHandler = () => {};

  const filterOpenChangeHandler = (newOpen: boolean) => {
    setIsFilterOpen(newOpen);
  };
  const sortOpenChangeHandler = (newOpen: boolean) => {
    setIsSortOpen(newOpen);
  };

  return (
    <Wrapper>
      <Input placeholder={t("Enter keyword")} />
      <Space size="middle" align="center">
        <IconButton onClick={refreshFilterHandler} icon={<RefreshIcon />} />

        <Popover
          content={
            <PopContent
              items={filterOptions(t)}
              onSelect={changeFilterHandler}
            />
          }
          trigger="click"
          open={isFilterOpen}
          onOpenChange={filterOpenChangeHandler}
        >
          <IconButton icon={<FilterListIcon />} />
        </Popover>
        <Popover
          trigger="click"
          open={isSortOpen}
          onOpenChange={sortOpenChangeHandler}
          content={
            <PopContent items={sortOptions(t)} onSelect={changeSortHandler} />
          }
        >
          <IconButton icon={<SortIcon />} />
        </Popover>
        <IconButton onClick={() => onSearch(filter)} icon={<SearchIcon />} />
      </Space>
    </Wrapper>
  );
};

type PopContentProps<T> = {
  items: T[];
  onSelect: (value: T) => void;
};

type FilterType = {
  title: string;
  key: string;
  value: string;
};

const PopContent: FC<PopContentProps<FilterType>> = ({ items, onSelect }) => {
  return (
    <div>
      {items.map((item) => (
        <div key={item.key} onClick={() => onSelect(item)}>
          {item.title}
        </div>
      ))}
    </div>
  );
};

const filterOptions = (t: any) => [
  {
    title: t("filterOption.open"),
    key: "1",
    value: "1",
  },
  {
    title: t("filterOption.verifying"),
    key: "2",
    value: "2",
  },
  {
    title: t("filterOption.redeem"),
    key: "3",
    value: "3",
  },
  {
    title: t("filterOption.end"),
    key: "4",
    value: "4",
  },
];

const sortOptions = (t: any) => [
  {
    title: t("sortOption.highReward"),
    key: "1",
    value: "1",
  },
  {
    title: t("sortOption.lowestReward"),
    key: "2",
    value: "2",
  },
  {
    title: t("sortOption.newest"),
    key: "3",
    value: "3",
  },
  {
    title: t("sortOption.oldest"),
    key: "4",
    value: "4",
  },
];

export default FilterBar;
