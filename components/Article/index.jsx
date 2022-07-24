import styles from "../../styles/Article.module.scss";
import Image from "next/image";
const Article = (props) => {
  return (
    <div
      id="About"
      className={styles.AboutContainer}
      style={{
        "background-color": props.content.background,
      }}
    >
      <article
        style={{
          flexDirection: props.content.direction,
        }}
      >
        <section className={styles.teamInformation}>
          <h2>{props.content.title}</h2>
          <p>{props.content.paragraph}</p>
        </section>
        <section className={styles.teamImage}>
          <Image src={props.content.image} alt={props.content.title} />
        </section>
      </article>
    </div>
  );
};
export default Article;
