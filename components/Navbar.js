/*
 * @Author: Chen_陈工
 * @Date: 2025-08-27 17:13:51
 * @LastEditors: Do not edit
 * @LastEditTime: 2025-08-28 16:34:54
 * @FilePath: \NameY-Chen_my_web\components\Navbar.js
 */
import { useState } from "react";
import { useRouter } from "next/router";
import style from "../styles/Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  // 定义每个导航项对应的路径前缀
  const isActive = (path) => {
    if (path === '/') {
      return router.pathname === '/';
    }
    // 对于产品页面，检查是否匹配当前路径
    if (path.startsWith('/products/')) {
      const productType = path.split('/')[2];
      return router.query.name === productType;
    }
    return router.pathname === path;
  };

  return (
    <div className={style.container}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src="/logo.png" alt="Logo" style={{ height: '40px', weight:'20px' , marginRight: '10px' }} />
        <Link href="/">NameY-陈</Link>
      </div>
      <ul className={style.list}>
        <li className={`${style.listItem} ${isActive('/') ? style.active : ''}`}>
          <Link href="/">首页</Link>
        </li>
        <li className={`${style.listItem} ${isActive('/products/design') ? style.active : ''}`}>
          <Link href="/products/design">风 · 服务提供</Link>
        </li>
        <li className={`${style.listItem} ${isActive('/products/development') ? style.active : ''}`}>
          <Link href="/products/development">雅 · 项目基地</Link>
        </li>
        <li className={`${style.listItem} ${isActive('/products/production') ? style.active : ''}`}>
          <Link href="/products/production">仙 · 音乐小屋</Link>
        </li>
        <li className={`${style.listItem} ${isActive('/products/photography') ? style.active : ''}`}>
          <Link href="/products/photography">漫 · 摄影展厅</Link>
        </li>
        <li className={`${style.listItem} ${isActive('/contact') ? style.active : ''}`}>
          <Link href="/contact">此刻 · 联系我</Link>
        </li>
      </ul>
      <div className={style.hamburger} onClick={() => setOpen(!open)}>
        <div className={style.line} />
        <div className={style.line} />
        <div className={style.line} />
      </div>
      <ul onClick={()=>setOpen(false)} className={style.menu} style={{ right: open ? "0px" : "-50vw" }}>
        <li className={style.menuItem}>
          <Link href="/">首页</Link>
        </li>
        <li className={style.menuItem}>
          <Link href="/products/design">风 · 服务提供</Link>
        </li>
        <li className={style.menuItem}>
          <Link href="/products/development">雅 · 项目基地</Link>
        </li>
        <li className={style.menuItem}>
          <Link href="/products/production">仙 · 音乐小屋</Link>
        </li>
        <li className={style.menuItem}>
          <Link href="/products/photography">漫 · 摄影展厅</Link>
        </li>
        <li className={style.menuItem}>
          <Link href="/contact">此刻 · 联系我</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;