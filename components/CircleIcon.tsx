import { Box } from '@mui/material';

interface Props {
    icon: JSX.Element;
}

export const CircleIcon = ({ icon }: Props) => {
    return (
        <Box
            sx={{
                backgroundColor: '#F3F2F2',
                padding: '10px',
                borderRadius: '50%',
                minWidth: '50px',
                minHeight: '50px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            {icon}
        </Box>
    )
}
