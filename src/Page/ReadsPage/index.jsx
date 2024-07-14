import React from "react";
import styles from "./index.module.scss";
import books from "./books.json";

const ReadsPage = () => {
  const bookList = () => {
    return books.data.map((book) => (
      <a
        className={styles.book_container}
        href=""
        target="_blank"
        rel="noreferrer noopener"
        key={book.title}
      >
        <div class={styles.book}>
          <img alt="" src={book.coverImage} className={styles.image} />
        </div>
      </a>
    ));
  };
  return <div className={styles.books}>{bookList()}</div>;
};

export default ReadsPage;
