import styles from './search.module.scss';

const Search = () => {
  return (
    <div className={styles.header_search}>
      <input type="text" placeholder="Search location" />
    </div>
  );
};

export default Search;
