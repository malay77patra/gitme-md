import { Dialog, DialogTitle, Container, DialogContent, Button } from "@mui/material"
import { useState, useContext } from "react"
import TemplateDataContext from "../contexts/TemplateDataContext"
import { EMOJIS } from '../utils'


const Emoji = ({ src, size }) => {
    const [open, setOpen] = useState(false)
    const [templateData, setTemplateData] = useContext(TemplateDataContext)

    const handleClick = () => {
        setOpen(true)
    };
    const handleClose = () => {
        setOpen(false)
    }
    const handleEmojiClick = (emoji) => {
        setTemplateData(draft => {
            draft.emoji1 = emoji
        })
        setOpen(false)
    }

    return (
        <>
            <img src={src} style={{ width: size, height: size, cursor: 'pointer' }} onClick={handleClick} />
            <Dialog onClose={handleClose} open={open}>
                <DialogTitle sx={{ textAlign: 'center' }}>SELECT EMOJI</DialogTitle>
                <DialogContent dividers>
                    <Container sx={{ maxWidth: '450px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                        {Object.entries(EMOJIS).map(([key, url]) => (
                            <div key={key} style={{ textAlign: 'center' }}>
                                <Button variant="outlined">
                                    <img src={url} alt={key} onClick={() => { handleEmojiClick(key) }} style={{ width: '32px', height: '32px', objectFit: 'contain' }} />
                                </Button>
                            </div>
                        ))}
                    </Container>
                </DialogContent>
            </Dialog>
        </>
    );
};


export default Emoji;
