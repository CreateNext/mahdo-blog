import Link from "next/link";

const Menu = () => {
  return (
    <div className="menu">
      <ul className="menu__list">
        <li className="menu__item">
          <Link href="/">/Index</Link>
        </li>
        <li className="menu__item">
          <Link href="/about">/about</Link>
        </li>
        <li className="menu__item">
          <Link href="/login">/login</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
