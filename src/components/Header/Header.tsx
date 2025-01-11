import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.scss";
import { FaRegHeart } from "react-icons/fa";
import { SearchBar } from "@/components";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <div className="flex items-center">
          <Image
            src="/icon.svg"
            alt="MovieApp Logo"
            width={60}
            height={60}
            priority
          />
          <span className="hidden md:inline">MovieApp</span>
        </div>
      </Link>
      <SearchBar />
      <Link href="/favorites" className={styles.favIcon}>
        <FaRegHeart className="text-2xl block" />
      </Link>
    </header>
  );
};

export default Header;
