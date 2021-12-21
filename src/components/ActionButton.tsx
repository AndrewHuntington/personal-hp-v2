import * as React from 'react';
import Button from '@mui/material/Button';

// TODO: Better typings
type BtnProps = {
    content: string;
    clickAction?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    styles?: any;
};

export default function ActionButton({ content, clickAction, styles }: BtnProps) {
    return (
        <Button variant="contained" onClick={clickAction} sx={styles}>
            {content}
        </Button>
    );
}

ActionButton.defaultProps = {
    clickAction: undefined,
    styles: {},
};
