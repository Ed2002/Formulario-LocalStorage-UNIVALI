import Dialog, { DialogProps } from "@mui/material/Dialog";
import CloseIcon from '@mui/icons-material/Close';
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import { ReactNode } from "react";

interface IModalProps {
    Title: string
    Close: () => void
    open: boolean;
    children: ReactNode
}

type ModalProps = DialogProps & IModalProps

export const Modal = ({ Title, Close, open, children, ...rest }: ModalProps) => {
    return (
        <Dialog onClose={Close} open={open} {...rest}>
            <DialogTitle>
                <h3>{Title}</h3>
                <IconButton
                    aria-label="close"
                    onClick={Close}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <>
                {children}
            </>
        </Dialog>
    )
}