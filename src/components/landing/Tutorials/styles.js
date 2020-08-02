import styled from 'styled-components';
import detailsIllustration from 'assets/illustrations/details-flipped.svg';

export const Wrapper = styled.div`
  padding: 8rem 0;
  background-image: url(${detailsIllustration});
  background-size: contain;
  background-position: right top;
  background-repeat: no-repeat;
`;

export const TutorialsWrapper = styled.div`
`;

export const Grid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 8fr;
  gap: 1.2rem 1.2rem;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

export const Item = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.11);

  h4 {
    color: #212121;
  }

  p {
    color: #707070;
  }
`;

export const Content = styled.div`
  padding: 1rem 0;
`;

export const Stats = styled.div`
  display: flex;
  align-items: center;

  div {
    display: flex;
    &:first-child {
      margin-right: 0.5rem;
    }

    img {
      margin: 0;
    }

    svg path {
      fill: #000;
    }

    span {
      color: #000;
      margin-left: 0.5rem;
    }
  }
`;

export const VideoTitle = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
`

export const Channel = styled.div`
  padding-top: 4rem;
  display: flex;
  justify-content: center;
`;
