import "./Articles.css";
import { Buttons } from "../Buttons/Buttons";
import ReadMoreSVG from "../../assets/note-rounded-square-interface-symbol-svgrepo-com.svg";
import waveLine from "../../assets/dividerLarge.png";

const exampleArticles = [
  {
    imageUrl: "Images/Article.png",
    title: "Emotions during a bootcamp!",
    preview:
      "Attending a web developer bootcamp is an emotional rollercoaster. It's a constant....",
    link: "https://www.linkedin.com/in/isaac-kamran/",
    publishDate: "November 24, 2023",
  },
  {
    imageUrl: "Images/Article.png",
    title: "Exited to share our final project",
    preview:
      "After weeks of hard work and collaboration, our team  consisting of myself, Andrej and Manne is thrilled to present our.... ",
    link: "https://www.linkedin.com/in/isaac-kamran/",
    publishDate: "January 16, 2024",
  },
  {
    imageUrl: "Images/Article.png",
    title: "The Future of Web",
    preview:
      "A look into the future trends and technologies that are shaping the web...",
    link: "https://www.google.se",
    publishDate: "October 1, 2023",
  },
  {
    imageUrl: "Images/Article.png",
    title: "CSS Secrets and Tips",
    preview:
      "Unravel the secrets of CSS to build beautiful and responsive designs...",

    link: "https://www.google.se",
    publishDate: "October 1, 2023",
  },
];

const ArticleCard = ({ imageUrl, title, preview, link, publishDate }) => {
  return (
    <div className="article-card">
      <img src={imageUrl} alt={title} className="article-image" />
      <span className="publish-date">{publishDate}</span>
      <h3>{title}</h3>
      <p>{preview}</p>
      <Buttons
        type="read-more"
        text="Read More"
        icon={<img src={ReadMoreSVG} alt="Icon" />}
        href={link}
      />
    </div>
  );
};

export const Articles = () => {
  return (
    <>
      <div className="divider-wrapper">
        <img src={waveLine} alt="dividing line between slides"></img>
      </div>
      <div className="articles-wrapper">
        <h1>My Words</h1>
        <div className="articles-grid">
          {exampleArticles.map((article) => (
            <ArticleCard
              key={article.title}
              imageUrl={article.imageUrl}
              publishDate={article.publishDate}
              title={article.title}
              preview={article.preview}
              link={article.link}
            />
          ))}
        </div>
      </div>
    </>
  );
};
