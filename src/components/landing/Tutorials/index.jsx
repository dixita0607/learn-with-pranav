import React from 'react';
import { Container, Card, Button } from 'components/common';
import { Wrapper, Content, Item, VideoTitle, Grid, Channel, TutorialsWrapper } from './styles';
import videos from './tutorials.json';

export const Tutorials = ({tutorials, channel}) => {
  return (
    <Wrapper id="tutorials">
      <TutorialsWrapper as={Container}>
        <h1>Latest Tutorials</h1>
        <Grid>
          {tutorials.map(({ id, title }) => (
            <Item key={id}>
              <Card>
                <Content>
                  <iframe style={{ width: '100%', backgroundColor: '#EEEEEE' }} height="206"
                          src={`https://www.youtube.com/embed/${id}`} />
                  <VideoTitle title={title}>{title}</VideoTitle>
                </Content>
              </Card>
            </Item>
          ))}
        </Grid>
        <Channel>
          <a href={channel}
             target="_blank">
            <Button secondary>Go to Channel</Button>
          </a>
        </Channel>
      </TutorialsWrapper>
    </Wrapper>
  );
};
