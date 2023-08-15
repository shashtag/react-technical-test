import React from "react";
import Image from "next/image";
import styles from "./card.module.css";

const Card = ({ stars, comment, img, name, designation }) => {
  const displayStars = [];

  for (let i = 0; i < stars; i++) {
    displayStars.push(
      <Image
        width={16}
        height={16}
        src='/icons/Full_Star.svg'
        alt='star'
        style={{ marginRight: ".25rem" }}
      />,
    );
  }
  for (let i = 0; i < 5 - stars; i++) {
    displayStars.push(
      <Image
        width={16}
        height={16}
        src='/icons/Empty_Star.svg'
        alt='star'
        style={{ marginRight: ".25rem" }}
      />,
    );
  }

  return (
    <div className={styles.card}>
      <div>{displayStars}</div>
      <div className={styles.comment}>“{comment}”</div>
      <div className={styles.details}>
        <div className={styles.avatar}>
          <Image height={44} width={44} src={img} alt='' />
        </div>
        <div>
          <div className={styles.name}>{name}</div>
          <div className={styles.designation}>{designation}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
