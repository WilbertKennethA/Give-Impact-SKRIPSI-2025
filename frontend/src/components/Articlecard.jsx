import "../styles/Articlecard.css"
import { useNavigate } from 'react-router-dom';


const ArticleCard = ({articleImg, articleTitle, articleDate}) => {

  const navigate = useNavigate();
  return(
    <div className="article-card" onClick={() => navigate('/artikel')}>
      <img className="image-article-placeholder" src={articleImg} alt={articleTitle} />
      <div className="article-title-card">{articleTitle}</div>
      <div className="article-date-card">{articleDate}</div>
    </div>
  )
};

export default ArticleCard;