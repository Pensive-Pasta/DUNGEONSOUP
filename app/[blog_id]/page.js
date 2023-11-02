import ArticleHero from "../components/article/article-hero";
import ArticleDetails from "../components/article/details";
import Link from "next/link";

const SingleArticle = ({ blog_id, id}) => {
  // fetch blog content by calling api with blog_id destructured from the params
  // fetch author by id destructured from params
  const article = {
    id: "1",
    title: "The Art of Negotiation",
    subtitle: "Convincing that troll to let you pass",
    readTime: 12,
    likes: 4,
    author_id: 1,
    content:
      "Lorem ipsum dolor sit amet consectetur. Diam at lacus aliquam sed. Lectus ut in sed facilisi. Aliquet tortor faucibus a vestibulum congue auctor neque sem mauris. Gravida aliquet dictum massa at enim nisl orci. In placerat sit posuere dui cras dis vel aliquet. Elementum urna ullamcorper vestibulum sagittis laoreet nisl tincidunt dolor mi. Euismod lacus mauris urna elementum suspendisse tristique hac. Vel adipiscing morbi netus purus habitasse consectetur varius commodo. Tempor tincidunt vel nunc consectetur facilisi et nunc. Facilisis ac cursus mattis tincidunt. Integer in rhoncus nunc id scelerisque mauris a. Mi enim molestie pulvinar arcu commodo lectus arcu. Lectus gravida rhoncus posuere id eu nibh volutpat lorem. Non lacus nunc ut tristique odio magna. Volutpat non facilisi urna fermentum in eget pretium. Bibendum faucibus velit viverra pretium commodo. Malesuada sed urna cras elementum velit. Et nunc sagittis aliquam praesent tortor. Tellus non adipiscing arcu aliquam mollis. Turpis at dolor semper magna et eget tortor. Purus pellentesque ac ipsum nulla mauris nulla purus. Non consectetur faucibus sed nisi magna proin enim quam suspendisse. Turpis aliquet scelerisque sed tristique platea sed tincidunt egestas. Nibh dui nibh pellentesque arcu nunc. Mauris sociis risus velit id. Sit cras magna fermentum fermentum fringilla tellus venenatis. Lectus integer quam massa tristique cras ut mattis arcu sagittis. Viverra magna a amet arcu pellentesque a sed elit sagittis.",
    thumbnail_image: "",
    banner_image: "",
    in_article_image: "",
  };
  const author = {
    id: '1',
    name: 'Ricky', 
    about: 'About about about',
    banner_image: '',
    profile_image: ''
  }
  const {
    title,
    subtitle,
    read_time,
    likes,
    content,
    thumbnail_image,
    banner_image,
    in_article_image,
  } = article;
  return (
    <div>
      <ArticleHero img={banner_image} title={title} subtitle={subtitle} />
      <ArticleDetails
        authorId={author.id}
        authorName={author.name}
        readTime={read_time}
        likes={likes}
        blogId={blog_id}
      />
      <article>{content}</article>
      <Link href={`/${author.id}`}>More from {author.name}</Link>
    </div>
  );
};

export default SingleArticle;
