"use client";
import { FormEvent, useState, useEffect } from "react";
import styles from "./SearchBar.module.scss";
import { usePathname, useRouter } from "next/navigation";
import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState("");
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname.includes("search")) {
      setSearchQuery(decodeURIComponent(pathname.split("/")[2]));
      return;
    }
    setSearchQuery("");
  }, [pathname]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 500);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  useEffect(() => {
    if (debouncedSearchQuery) {
      router.push(`/search/${debouncedSearchQuery}`);
    }
  }, [debouncedSearchQuery, router]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!searchQuery) return;
    router.push(`/search/${searchQuery}`);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.search}>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search..."
      />
      <button type="submit">
        <span className="text-2xl">
          <FiSearch />
        </span>
      </button>
    </form>
  );
};

export default SearchBar;
