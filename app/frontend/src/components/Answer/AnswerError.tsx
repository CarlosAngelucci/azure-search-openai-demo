import { IIconProps, Stack, PrimaryButton } from "@fluentui/react";
import { ErrorCircle24Regular } from "@fluentui/react-icons";
import { IconButton } from "@fluentui/react/lib/Button";

import styles from "./Answer.module.css";
import { useState } from "react";

interface Props {
    error: string;
    onRetry: () => void;
}

export const AnswerError = ({ error, onRetry }: Props) => {
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
        <Stack className={styles.answerContainer} verticalAlign="space-between">
            <ErrorCircle24Regular aria-hidden="true" aria-label="Error icon" primaryFill="red" />

            <Stack.Item grow>
                <p className={styles.answerText}>{error}</p>
            </Stack.Item>
            <Stack className={styles.teste} horizontal>
                <PrimaryButton className={styles.retryButton} onClick={onRetry} text="Retry" />
                <Stack horizontal>
                    <IconButton iconProps={dislikeIcon} title="Dislike" ariaLabel="EmojiDislike" onClick={onClickDislike} />
                    <IconButton iconProps={likeIcon} title="Like" ariaLabel="EmojiLike" onClick={onClickLike} />
                </Stack>
            </Stack>
        </Stack>
    );
};
