import React, { useState } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { SearchContainer, Input } from "./MainStyle";
import { MdOutlineSearch } from "react-icons/md";
import Content from "./CategoryTab/Content";
import SearchContent from "./CategoryTab/SearchContent";

const CategoryTab = () => {
  const [value, setValue] = React.useState(0);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  const onChangeSearch = (e) => {
    setSearchValue(e.target.value);
  };

  // 사용자가 검색한 게시글 띄워주기 위해, search페이지로 이동하면서 데이터 전달함
  const searchClick = () => {
    navigate("search", {
      state: {
        searchValue: searchValue,
      },
    });
    setSearchValue("");
  };
  return (
    <Box
      sx={{
        marginTop: "3.5rem",
        marginBottom: "4.2rem",
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
        style={{
          position: "fixed",
          backgroundColor: "white",
          width: "100%",
          // overflow: 'auto',
        }}
      >
        <Tab label="전체" component={Link} to="/main" />
        <Tab label="치킨" component={Link} to="/main/chicken" />
        <Tab label="피자/양식" component={Link} to="/main/pizza" />
        <Tab label="중식" component={Link} to="/main/chinese" />
        <Tab label="한식" component={Link} to="/main/korean" />
        <Tab label="일식/돈까스" component={Link} to="/main/japanese" />
        <Tab label="족발/보쌈" component={Link} to="/main/pork" />
        <Tab label="야식" component={Link} to="/main/night" />
        <Tab label="분식" component={Link} to="/main/bunsik" />
        <Tab label="카페/디저트" component={Link} to="/main/cafe" />
        <Tab label="편의점/마트" component={Link} to="/main/mart" />
      </Tabs>

      {/* 각 카테고리 탭에서 공통으로 가지는 상단 컴포넌트 (= 검색 컴포넌트) */}
      <SearchContainer>
        <Input
          placeholder="찾는 음식을 입력해주세요"
          onChange={onChangeSearch}
          value={searchValue}
        />
        <div onClick={searchClick}>
          <MdOutlineSearch
            size={30}
            style={{
              alignItems: "center",
              marginLeft: "0.3rem",
              color: "grey",
              paddingTop: "0.2rem",
            }}
          />
        </div>
      </SearchContainer>

      {/* 각 카테고리 탭 라우터 처리 + 나눔 검색 페이지 라우터 처리 */}
      {/* api 호출할 url 지정해줘야 함 (ex.http://192.168.35.145:8080/main/mart) */}
      <Routes>
        <Route
          path="/"
          element={
            <Content
              url="http://3.39.164.26/main"
              value="전체"
              category={null}
            />
          }
        />
        <Route
          path="chicken"
          element={
            <Content
              url="http://3.39.164.26/main?category=치킨"
              value="치킨"
              category="치킨"
            />
          }
        />
        <Route
          path="pizza"
          element={
            <Content
              url="http://3.39.164.26/main?category=피자양식"
              value="피자"
              category="피자"
            />
          }
        />
        <Route
          path="chinese"
          element={
            <Content
              url="http://3.39.164.26/main?category=중식"
              value="중식"
              category="중식"
            />
          }
        />
        <Route
          path="korean"
          element={
            <Content
              url="http://3.39.164.26/main?category=한식"
              value="한식"
              category="한식"
            />
          }
        />
        <Route
          path="japanese"
          element={
            <Content
              url="http://3.39.164.26/main?category=일식"
              value="일식"
              category="일식"
            />
          }
        />
        <Route
          path="pork"
          element={
            <Content
              url="http://3.39.164.26/main?category=족발보쌈"
              value="족발"
              category="족발"
            />
          }
        />
        <Route
          path="night"
          element={
            <Content
              url="http://3.39.164.26/main?category=야식"
              value="야식"
              category="야식"
            />
          }
        />
        <Route
          path="bunsik"
          element={
            <Content
              url="http://3.39.164.26/main?category=분식"
              value="분식"
              category="분식"
            />
          }
        />
        <Route
          path="cafe"
          element={
            <Content
              url="http://3.39.164.26/main?category=카페디저트"
              value="카페"
              category="카페디저트"
            />
          }
        />
        <Route
          path="mart"
          element={
            <Content
              url="http://3.39.164.26/main?category=편의점"
              value="편의점"
              category="편의점"
            />
          }
        />
        <Route path="search" element={<SearchContent />} />
      </Routes>
    </Box>
  );
};
export default CategoryTab;
