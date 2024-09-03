import React from "react";
import style from "./list.module.css";
import clsx from "clsx";
type ListProps<T> = {
    className?: string;
    items: T[];
    keyExtractor: (item: T) => string;
    renderItem: (item: T) => React.ReactNode;
};
const List = <T,>({ className , items, renderItem, keyExtractor }: ListProps<T>) => {
    return (
        <div className={clsx(style.container, className)}>
            {items.map((item) => (
                <div key={keyExtractor(item)} className={style.item}>
                    {renderItem(item)}
                </div>
            ))}
        </div>
    );
};

export default List;
