import Image from "next/image";
import styles from "./page.module.css";
import { Griffy } from "next/font/google";
import ab from "../../public/icons/Full_Star.svg";
import Card from "@/Components/Card/Card";
import cardData from "@/Data/cardData";

export default function ReviewPage() {
  return (
    <div className={styles.hero}>
      {cardData.map((item) => (
        <Card
          key={item.name}
          stars={item.stars}
          comment={item.comment}
          img={item.img}
          name={item.name}
          designation={item.designation}
        />
      ))}
    </div>
  );
}
