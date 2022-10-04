import styled from 'styled-components';
import searchFeedIcon from '../../../assets/images/searchFeedIcon.png';

const SearchFeedButton = styled.img`
  width: 23px;
  height: 21px;
`;

function SearchFeedBtn() {
  return <SearchFeedButton src={searchFeedIcon} />;
}

export default SearchFeedBtn;
