import React from "react";
import { CardNews } from "../../components/CardNews";
import cls from "../Styles/SportStyles/index.module.scss"

export const HotNews = () => {
    const [news, setNews] = React.useState(
        JSON.parse(localStorage.getItem("news")) || []
    )

    const filtredNews = news.filter((item) => item.category === "hot_news")

    return(
        <div className={cls.sport_container}>
            <h1 className={cls.title_sport}>
            {filtredNews.map((item) => (
                <CardNews item={item} />
            ))}
            </h1>
        </div>
    )
}