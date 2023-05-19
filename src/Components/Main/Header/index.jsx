import React, { useState } from "react";
import cls from "./index.module.scss";
import { Link } from "react-router-dom";
import { useTheme } from "../../../Hooks/theme"
const headerItems = [
    {
        id: 1,
        item: "Sport",
        route: "/sport",
    },
    {
        id: 2,
        item: "Politic",
        route: "/politic", 
    },
    {
        id: 3,
        item: "Hot News",
        route: "/hot",
    },
    {
        id: 4,
        item: "Criminal",
        route: "/criminal",
    },
    
];

export const Header = () => {
    const { setTheme } = useState();

    return(
        <div className={cls.header_container}>
            <Link to={"/"}> News </Link>
            <ul>
                {headerItems.map((item) => (
                    <Link key={item.id} to={item.route} >
                        {item.item}
                    </Link>
                ))}
                <div>
                    <button onClick={() => setTheme('light')} className={cls.light}>light</button>
                    <button onClick={() => setTheme('dark')} className={cls.dark}>dark</button>
                </div>
            </ul>
        </div>
    )
}