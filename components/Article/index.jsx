import styles from "../../styles/Article.module.scss";
const Article = (props) => {
  return (
    <div
      id="About"
      className={styles.About - container}
      style={{
        "background-color": props.content.background,
      }}
    >
      <article
        style={{
          flexDirection: props.content.direction,
        }}
      >
        <section className={styles.team - information}>
          <h2>{props.content.title}</h2>
          <p>{props.content.paragraph}</p>
        </section>
        <section className={styles.team - image}>
          <img src={props.content.image} alt={props.content.title} />
        </section>
      </article>
    </div>
  );
};
export default Article;
