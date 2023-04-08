import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Toolbar from '@mui/material/Toolbar'
import AddIcon from '@mui/icons-material/Add';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import Paper from '@mui/material/Paper';
import { Modal } from './core/components/Modal/Modal';
import { useRef, useState } from 'react';
import { ModalCarro } from './CarroModal/ModalCarro';
import { FormHandles } from '@unform/core';

export const App = () => {

  const [AddCarroModal, setAddCarroModal] = useState<boolean>(false);
  const formRef = useRef<FormHandles>(null)

  const handleAddCarroModalClickOpen = () => {
    setAddCarroModal(true);
  };
  const handleAddCarroModalClose = () => {
    setAddCarroModal(false);
  };

  const handleSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="App">
      <Modal Title='Adicionar Carro' open={AddCarroModal} Close={handleAddCarroModalClose} maxWidth="md" fullWidth scroll='body'>
        <ModalCarro CloseFunc={handleAddCarroModalClose} RefForm={formRef} Submit={handleSubmit}/>
      </Modal>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <AppBar position="static">
            <Toolbar>
              <h2>Carros App</h2>
            </Toolbar>
          </AppBar>
        </Grid>
      </Grid>
      <Grid container spacing={4} sx={{ padding: 3 }}>
        <Grid item xs={6}>
          <h2>Meus carros</h2>
        </Grid>
        <Grid item xs={6} sx={{ textAlign: 'right' }}>
          <Button variant="contained" onClick={handleAddCarroModalClickOpen}><AddIcon /> Adicionar Carro</Button>
        </Grid>
        <Grid item xs={12}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell><b>Marca</b></TableCell>
                  <TableCell><b>Modelo</b></TableCell>
                  <TableCell><b>Ano</b></TableCell>
                  <TableCell align="center"><b>Opções</b></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
              </TableBody>
              </Table>
              </TableContainer>
          </Grid>
          </Grid>
    </div>
  )
}
