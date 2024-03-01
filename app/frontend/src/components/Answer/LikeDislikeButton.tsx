import { IIconProps, Stack } from "@fluentui/react";
import { IconButton, PrimaryButton } from "@fluentui/react/lib/Button";
import { useState } from "react";
import * as React from "react";
import { mergeStyleSets, DefaultButton, FocusTrapZone, Layer, Overlay, Popup } from "@fluentui/react";
import { useBoolean } from "@fluentui/react-hooks";
import { TextField } from "@fluentui/react/lib/TextField";

const popupStyles = mergeStyleSets({
    root: {
        background: "rgba(0, 0, 0, 0.2)",
        bottom: "0",
        left: "0",
        position: "fixed",
        right: "0",
        top: "0"
    },
    content: {
        background: "white",
        left: "50%",
        maxWidth: "400px",
        padding: "0 2em 2em",
        position: "absolute",
        top: "50%",
        transform: "translate(-50%, -50%)"
    }
});

export const Like = () => {
    const [textoFeedback, { setTrue: showTextoFeedback, setFalse: hideTextoFeedback }] = useBoolean(false);
    const [motivoFeedback, setMotivoFeedback] = useState<string>("");
    const [multiline, { toggle: toggleMultiline }] = useBoolean(false);

    const [clickedLikeButton, setClickedLikeButton] = useState<boolean>(false);
    const [clickedDislikeButton, setClickedDislikeButton] = useState<boolean>(false);

    const dislikeIcon: IIconProps = { iconName: clickedDislikeButton ? "DislikeSolid" : "Dislike" };
    const likeIcon: IIconProps = { iconName: clickedLikeButton ? "LikeSolid" : "Like" };

    function onClickDislike(): void {
        showTextoFeedback();
        setClickedDislikeButton(true);
        setClickedLikeButton(false);
    }

    function onClickLike(): void {
        alert("Cliquei Like");
        setClickedLikeButton(true);
        setClickedDislikeButton(false);
    }

    const onChange = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => {
        setMotivoFeedback(newValue || "");
    };

    function onSubmit(): void {
        alert("Feedback enviado");
    }

    function onCancelar(): void {
        setMotivoFeedback("");
        hideTextoFeedback();
    }

    return (
        <div>
            {textoFeedback && (
                <Layer>
                    <Popup className={popupStyles.root} role="dialog" aria-modal="true" onDismiss={hideTextoFeedback} enableAriaHiddenSiblings={true}>
                        <Overlay onClick={hideTextoFeedback} />
                        <FocusTrapZone>
                            <div role="document" className={popupStyles.content}>
                                <h2>Feedback da Respota</h2>
                                <TextField
                                    label="Nos diga o motivo pelo qual a resposta não foi satisfatória."
                                    multiline
                                    rows={3}
                                    value={motivoFeedback}
                                    onChange={onChange}
                                />
                                <Stack horizontal>
                                    <DefaultButton text="Cancelar" onClick={onCancelar} allowDisabledFocus />
                                    <PrimaryButton text="Enviar" onClick={onSubmit} allowDisabledFocus />
                                </Stack>
                            </div>
                        </FocusTrapZone>
                    </Popup>
                </Layer>
            )}
            <IconButton iconProps={dislikeIcon} title="Dislike" ariaLabel="EmojiDislike" onClick={onClickDislike} />
            <IconButton iconProps={likeIcon} title="Like" ariaLabel="EmojiLike" onClick={onClickLike} />
        </div>
    );
};
