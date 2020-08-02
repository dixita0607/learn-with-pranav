import React from 'react';
import { Container, Card, Button } from 'components/common';
import { Wrapper, Content, Item, VideoTitle, Grid, Channel, TutorialsWrapper } from './styles';
import videos from './tutorials.json';

export const Tutorials = () => {
  return (
    <Wrapper id="tutorials">
      <TutorialsWrapper as={Container}>
        <h1>Latest Tutorials</h1>
        <Grid>
          {videos.map(({ title, videoId }) => (
            <Item key={videoId}>
              <Card>
                <Content>
                  <iframe style={{ width: '100%', backgroundColor: '#EEEEEE' }} height="206"
                          src={`https://www.youtube.com/embed/${videoId}`} />
                  <VideoTitle title={title}>{title}</VideoTitle>
                </Content>
              </Card>
            </Item>
          ))}
        </Grid>
        <Channel>
          <a href="https://www.youtube.com/channel/UCKxrMleG0D352dCvTQajD1w?view_as=subscriber?sub_confirmation=1"
             target="_blank">
            <Button secondary>Go to Channel</Button>
          </a>
        </Channel>
      </TutorialsWrapper>
    </Wrapper>
  );
};
