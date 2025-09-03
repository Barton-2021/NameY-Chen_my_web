import style from "../styles/Intro.module.css";
import Image from "next/image";
import Circle from "./Circle";
import React, { useEffect, useState } from 'react';
import { Metadata } from 'next';
import { Button } from 'antd';


const Intro = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const fullText = '这里是我的创意工作室';

  useEffect(() => {
    const handleType = () => {
      const current = loopNum % 1;
      const fullText = '这里是我的创意工作室';
      const updatedText = isDeleting 
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === fullText) {
        setTimeout(() => setIsDeleting(true), 10000);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        // 删除完立即重新开始，无需等待
      }
    };

    const timer = setTimeout(handleType, isDeleting ? 100 : 150);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum]);

  const scrollToSection = () => {
    const element = document.getElementById('what-we-can-do');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className={style.container}>
      {/* <div className={`${style.circle} ${style.circle1}`} />
      <div className={`${style.circle} ${style.circle2}`} /> */}
      <Circle backgroundColor="#01c686" top="-45vh" left="-45vh" />
      {/* <Circle backgroundColor="#01c686" right="-40vh" /> */}
      <div className={style.card}>
        <h1 className={style.title}>
          <span className={style.brandName}>Hi，大家好！</span>
          <br />
          <span className={style.typewriter}>{text}</span>
          <br />
        </h1>
        <br />
        <br />
        <p className={style.desc}>
          2003年生人，INFJ-T，金牛座，籍贯广东湛江，常驻广州，高中毕业于中山市第一中学，本科大四在校创业者，物联网工程专业，工学学士学位
          <br /><br />
          程序员、鸿蒙开发者、软件架构师、嵌入式软件开发工程师、原创音乐人、中国音乐著作权协会会员、广州智尘梦科技工作室创始人&CEO
          <br /><br />
          兴趣爱好：喜欢研究各种技术，喜欢创造，喜欢分享，喜欢写歌
          <br /><br />
          擅长领域：计算机技术、人工智能物联网研发、web3区块链、法律、哲学、文学、音乐、商业、经济、金融
        </p>
        <br />
        <button className={style.button} onClick={scrollToSection}>了解更多</button>
      </div>
      <div className={style.card}>
        <Image
          src={process.env.NEXT_PUBLIC_URL + "/my.png"}
          layout="fill"
          objectFit="cover"
          alt="my"
        />
      </div>
    </div>
  );
};

export default Intro;