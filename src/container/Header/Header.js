import Search from "./Search";
import styled from "styled-components";

const Header = (props) => {
  return (
    <HeaderWrapper>
      <h1>
        My Note <span>App</span>
      </h1>
      <div className="action">
        <Search searchHandler={props.searchHandler} />
      </div>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 950px;
  padding: 15px;
  .action {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
