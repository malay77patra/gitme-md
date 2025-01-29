import { useEffect, useRef } from "react";

export default function H({
    placeholder = "Enter heading...",
    text = "",
    setValue,
    margin = "1rem 0",
    variant = 1
}) {
    const HeadingTag = `h${Math.min(Math.max(variant, 1), 6)}`;
    const headingRef = useRef(null);

    useEffect(() => {
        if (headingRef.current) {
            headingRef.current.textContent = text;
        }
    }, [text]);

    const handleInput = (e) => {
        if (e.currentTarget.textContent.trim() === "") {
            e.currentTarget.innerHTML = "";
        }
        setValue?.(e.currentTarget.textContent.trim());
    };

    return (
        <HeadingTag
            ref={headingRef}
            contentEditable
            suppressContentEditableWarning
            className="editable"
            data-placeholder={placeholder}
            onInput={handleInput}
            style={{
                outline: "none",
                paddingBottom: '.3rem',
                margin: margin,
                padding: 0,
            }}
        ></HeadingTag>
    );
}
