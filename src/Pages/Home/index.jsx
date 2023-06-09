import React from "react";
import { CardNews } from "../../components/CardNews";
import { EmptyCard } from "../../components/CardEmpty";
import cls from "../../Styles/HomeStyles/index.module.scss";
import { Link, useNavigate } from "react-router-dom";

export const Home = ({}) => {
  const [news, setNews] = React.useState(
    JSON.parse(localStorage.getItem("news")) || []
  );

  return (
    <div className={cls.container_home}>
      <div className={cls.block_news}>
        <div className={cls.content_block_news}>
          <h1>Новости которые шокируют вашу душу!</h1>
          <Link to="/hot_news">
            <button>Hot News</button>
          </Link>
        </div>
      </div>

      <div className={cls.card_news}>
        {news.length === 0 ? (
          <EmptyCard />
        ) : (
          news.map((item) => <CardNews item={item} />)
        )}
      </div>
    </div>
  );
};