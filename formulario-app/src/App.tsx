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
import { useEffect, useRef, useState } from 'react';
import { ModalCarro } from './CarroModal/ModalCarro';
import { FormHandles } from '@unform/core';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export const App = () => {
  const [Carros,SetCarros] = useState<Array<CarroType>>([]);
  const [AddCarroModal, setAddCarroModal] = useState<boolean>(false);
  const formRef = useRef<FormHandles>(null)

  const handleAddCarroModalClickOpen = () => {
    setAddCarroModal(true);
  };
  const handleAddCarroModalClose = () => {
    setAddCarroModal(false);
  };

  const handleSubmit = (data: CarroType) => {
    console.log(data);
    SetCarros([...Carros, data]);
    handleAddCarroModalClose();
  };

  useEffect(() => {
    localStorage.setItem("Carros", JSON.stringify(Carros));
  }, [Carros])

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);

  const handleClickOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
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
                {Carros.length ? (
                  <>
                    {Carros.map((item:CarroType, index:number) =>{
                      return (
                        <TableRow
                          key={index}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                           <TableCell component="th" scope="row">
                              <p>{item.Marca}</p>
                           </TableCell>
                           <TableCell component="th" scope="row">
                              <p>{item.Modelo}</p>
                           </TableCell>
                           <TableCell component="th" scope="row">
                              <p>{item.Ano}</p>
                           </TableCell>
                           <TableCell component="th" scope="row" style={{textAlign: 'center'}}>
                              <IconButton
                                id="btn-options"
                                aria-controls={openMenu ? 'menu-options' : undefined}
                                aria-haspopup="true"
                                aria-expanded={openMenu ? 'true' : undefined}
                                onClick={handleClickOpenMenu}
                              >
                                <MoreVertIcon />
                              </IconButton>
                              <Menu 
                                id="menu-options"
                                open={openMenu} anchorEl={anchorEl} 
                                onClose={handleCloseMenu}
                                MenuListProps={{
                                  'aria-labelledby': 'btn-options',
                                }}
                              >
                                <MenuItem>Alterar</MenuItem>
                                <MenuItem>Deletar</MenuItem>
                              </Menu>
                           </TableCell>
                        </TableRow>
                      );
                    })}
                  </>
                ):(
                  <TableRow>
                    <TableCell component="th" scope="row" colSpan={4} align="center">
                      <h3>Sem Carros</h3>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
              </Table>
              </TableContainer>
          </Grid>
          </Grid>
    </div>
  )
}
