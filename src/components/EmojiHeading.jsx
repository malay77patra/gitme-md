import Emoji from "./Emoji"

export default function EmojiHeading({ text }) {

    return (
        <h1><Emoji src="https://emojis.slackmojis.com/emojis/images/1660853767/60881/meow_attention.gif?1660853767" size="24px" /> {text} </h1>
    )
}