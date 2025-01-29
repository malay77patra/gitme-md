import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Button } from '@mui/material';

const EMOJIS = {
    meow_attention: 'https://emojis.slackmojis.com/emojis/images/1660853767/60881/meow_attention.gif?1660853767',
    meow_party: 'https://emojis.slackmojis.com/emojis/images/1643514596/5999/meow_party.gif?1643514596',
    meow_code: 'https://emojis.slackmojis.com/emojis/images/1643515023/10521/meow_code.gif?1643515023',
    meow_adorable: 'https://emojis.slackmojis.com/emojis/images/1643515456/14767/meow_adorable.png?1643515456',
    meow_coffeespitting: 'https://emojis.slackmojis.com/emojis/images/1643515239/12569/meow_coffeespitting.gif?1643515239',
    meow_heart: 'https://emojis.slackmojis.com/emojis/images/1643514958/9845/meow_heart.png?1643514958'
};

const Emoji = ({ value, setValue, margin, size = '1rem' }) => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleEmojiSelect = (emojiName) => {
        setValue(emojiName);
        handleClose();
    };

    return (
        <>
            <img src={EMOJIS[value]} alt={value} onClick={handleClickOpen} style={{
                cursor: 'pointer',
                width: size,
                height: size,
                margin: margin
            }} />

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Select an Emoji</DialogTitle>
                <DialogContent>
                    <div>
                        {Object.entries(EMOJIS).map(([emojiName, emojiUrl]) => (
                            <IconButton
                                key={emojiName}
                                onClick={() => handleEmojiSelect(emojiName)}
                                style={{ margin: '10px' }}
                            >
                                <img src={emojiUrl} alt={emojiName} style={{
                                    height: '2rem',
                                    width: '2rem',
                                }} />
                            </IconButton>
                        ))}
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default Emoji;
