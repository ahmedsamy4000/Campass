import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ErrorRoundedIcon from '@mui/icons-material/ErrorRounded';
import { Stack } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Deleteprogram } from '../../redux/slices/programsSlice';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({open, handleClose, id}) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h5" component="h2">
            <ErrorRoundedIcon sx={{width: "50px", height: "50px", marginRight: "10px", color: "#fdd835"}}></ErrorRoundedIcon>
            Warning
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            There are reservations for this program, are you sure you want to continue ?
          </Typography>
          <Stack direction={"row"} width={"100%"} justifyContent={"space-between"} mt={2}>
            <button style={{backgroundColor: "red", width: "100px", height: "40px", color: "white"}} onClick={(e)=>{e.preventDefault(); handleClose();}}>Cancel</button>
            <Link to={'/company/programs'} style={{backgroundColor: "green", width: "100px", height: "40px", color: "white"}} onClick={()=>{ dispatch(Deleteprogram(id)); handleClose();}}>Ok</Link>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
