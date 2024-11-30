import React, { useEffect } from "react";

const WistiaPlayer: React.FC = () => {
  useEffect(() => {
    const playerScript = document.createElement("script");
    playerScript.src = "https://fast.wistia.com/player.js";
    playerScript.async = true;
    document.body.appendChild(playerScript);

    const embedScript = document.createElement("script");
    embedScript.src = "https://fast.wistia.com/embed/whxor9scd6.js";
    embedScript.async = true;
    embedScript.type = "module";
    document.body.appendChild(embedScript);

    return () => {
      document.body.removeChild(playerScript);
      document.body.removeChild(embedScript);
    };
  }, []);

  return (
    <>
      <style>
        {`
          wistia-player[media-id='whxor9scd6']:not(:defined) {
            background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/whxor9scd6/swatch');
            
            filter: blur(5px);
           
         
            
          }
        `}
      </style>
      <wistia-player media-id="whxor9scd6" ></wistia-player>
    </>
  );
};

export default WistiaPlayer;
