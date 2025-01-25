import EmojiHeading from "../components/EmojiHeading"
import { EMOJIS } from "../utils"
import TemplateDataContext from "../contexts/TemplateDataContext"
import { useImmer } from 'use-immer'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Box, Divider } from '@mui/material';
import { useState } from "react";


const DEFAULT_TEMPLATE_DATA = {
    emoji1: Object.keys(EMOJIS)[0],
    title1: 'Hey! Nice to see you.'
}

function Template() {
    const [templateData, setTemplateData] = useImmer({
        emoji1: DEFAULT_TEMPLATE_DATA.emoji1,
        title1: DEFAULT_TEMPLATE_DATA.title1
    })
    const [open, setOpen] = useState(false)


    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleReset = () => {
        setTemplateData(DEFAULT_TEMPLATE_DATA)
        setOpen(false)
    }

    return (
        <TemplateDataContext.Provider value={[templateData, setTemplateData]}>
            <Box sx={{
                textAlign: 'center',
                marginBottom: '2rem',
                display: 'flex',
                justifyContent: 'center',
                gap: '1rem'
            }}>
                <Button variant="contained" onClick={() => console.log(templateData)}>Export</Button>
                <Button variant="contained" color="error" onClick={handleClickOpen}>Reset</Button>
            </Box>
            <EmojiHeading />
            <Divider />

            <Dialog
                open={open}
                onClose={handleClose}
            >
                <DialogTitle>
                    Are you sure you want to reset chnages?
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        This action can not be undone. make sure you are aware of the consuquences.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>CANCLE</Button>
                    <Button onClick={handleReset} autoFocus>
                        OK
                    </Button>
                </DialogActions>
            </Dialog>
        </TemplateDataContext.Provider>
    );
}

export default Template;