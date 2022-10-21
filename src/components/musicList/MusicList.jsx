import styles from "./music.module.css";
import React, { useEffect, useState } from "react";

const MusicList = ({ musicas }) => {
  const [infoMusicFinal, setInfoMusicFinal] = useState([]);
  const urlLocation = window.location.pathname;

  
  useEffect(() => {
    musicas.find((res) =>
      res.route === urlLocation ? setInfoMusicFinal(res.musicas) : null
    )
  }, []);

  return (
    <section className={styles.containerMusics}>
      {infoMusicFinal.length !== 0 ? (
        infoMusicFinal.map((item, i) => (
          <section key={i} className={styles.containerMusic}>
            {item.title}
            <audio src={item.mp3} controls></audio>
          </section>
        ))
      ) : (
        <p>Musicas no disponible</p>
      )}
    </section>
  );
};

export default MusicList;
