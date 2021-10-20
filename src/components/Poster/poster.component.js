import React from "react";
//Props ->src, title, subtitle, isDark(bool)
const Poster = (props) =>{
    return(
        <>
        <div className="flex flex-col items-start gap-2 px-3">
            <div className="h-80">
                <img src={`https://image.tmdb.org/t/p/original${props.poster_path}`}
                alt={props.original_title} className="w-full h-full rounded-3xl" />
            </div>
            <h3 className={`text-lg text-bold ${
                props.isDark ? "text-white": "text-gray-700"}`}>
                {props.title}
            </h3>
            <p className={`text-sm text-bold ${
                props.isDark ? "text-white": "text-gray-700" }`}>
                {props.subtitle}
            </p>
        </div>
        </>
    );
};

export default Poster;