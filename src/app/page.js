import Image from "next/image";
import styles from "./page.module.css";
import { Griffy } from "next/font/google";
import ab from "../../public/icons/Full_Star.svg";
import Card from "@/Components/Card";
import cardData from "@/Data/cardData";

export default function ReviewPage() {
  return (
    <div className='hero '>
      {cardData.map((item) => (
        <Card key={item.name} />
      ))}
    </div>
  );
}
