import React from "react";
import styled from 'styled-components';

const YoutubeIframe = styled.div`
    overflow: hidden;
    padding-bottom: 400px;
    width: 600px;
    position: relative;
    height: 0;

    iframe {
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        position: absolute;
    }
`

const YoutubeEmbed = ({ embedId }) => (
  <YoutubeIframe>
    <iframe
      width="670"
      height="377"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </YoutubeIframe>
);

export default YoutubeEmbed;