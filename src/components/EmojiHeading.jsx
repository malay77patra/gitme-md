import H from './H'
import Emoji from './Emoji'


export default function EmojiHeading({ value, setValue }) {

    return (
        <div style={{
            display: 'flex',
        }}>
            <Emoji size={value.size} value={value.emoji} margin={value.margin} setValue={(v) => {
                setValue({ ...value, emoji: v })
            }} />
            <H variant={value.variant} text={value.text} margin={0} setValue={(v) => {
                setValue({ ...value, text: v })
            }} />
        </div>
    )
}