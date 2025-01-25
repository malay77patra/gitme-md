import Emoji from "./Emoji"
import TemplateDataContext from "../contexts/TemplateDataContext"
import { useContext, useState } from "react"
import { EMOJIS } from '../utils'

export default function EmojiHeading() {
    const [templateData, setTemplateData] = useContext(TemplateDataContext)

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
        }}>
            <Emoji src={EMOJIS[templateData.emoji1]} size="24px" />
            <h1 style={{
                margin: '1rem',
                lineHeight: '2rem',
            }} contentEditable={true} suppressContentEditableWarning={true} onKeyDown={
                (e) => {
                    if (e.key === 'Enter') {
                        e.preventDefault()
                    } else {
                        setTemplateData(draft => {
                            draft.title1 = e.target.innerText
                        })
                    }
                }
            } >{templateData.title1}</h1>
        </div>
    )
}