import { IIconProps } from "@fluentui/react";
import { IconButton } from "@fluentui/react/lib/Button";
import { useState } from "react";

export const Like = () => {
    const [clickedLikeButton, setClickedLikeButton] = useState<boolean>(false);
    const [clickedDislikeButton, setClickedDislikeButton] = useState<boolean>(false);

    const dislikeIcon: IIconProps = { iconName: clickedDislikeButton ? "DislikeSolid" : "Dislike" };
    const likeIcon: IIconProps = { iconName: clickedLikeButton ? "LikeSolid" : "Like" };

    function onClickDislike(): void {
        alert("Cliquei Dislike");
        setClickedDislikeButton(true);
        setClickedLikeButton(false);
    }

    function onClickLike(): void {
        alert("Cliquei Like");
        setClickedLikeButton(true);
        setClickedDislikeButton(false);
    }

    return (
        <div>
            <IconButton iconProps={dislikeIcon} title="Dislike" ariaLabel="EmojiDislike" onClick={onClickDislike} />
            <IconButton iconProps={likeIcon} title="Like" ariaLabel="EmojiLike" onClick={onClickLike} />
        </div>
    );
};
