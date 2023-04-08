import Grid from "@mui/material/Grid";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import { Input } from "../core/components/Form/Input/input";
import Button from "@mui/material/Button";
import { InputCheckBox } from "../core/components/Form/CheckBox";
import { SelectInput } from "../core/components/Form/Select";
import MenuItem from "@mui/material/MenuItem";
import LogoHonda from '../assets/honda.svg';
import LogoFord from '../assets/ford.svg';


interface ICarroModal {
    Submit: (data: any) => void;
    CloseFunc: () => void;
    RefForm: React.RefObject<FormHandles>;
    InitialData?: CarroType;
}



export const ModalCarro = (({ Submit, CloseFunc, RefForm, InitialData }: ICarroModal) => {
    return (
        <Form onSubmit={Submit} ref={RefForm} initialData={InitialData}>
            <Grid container spacing={2} sx={{ padding: 3 }}>
                <Grid item xs={12}>
                    <Input name="NomeTarefa" label="Nome da Tarefa" fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <InputCheckBox name="Teste" label="Teste"/>
                </Grid>
                <Grid item xs={12}>
                    <SelectInput name="Tipo" label="Tipo" fullWidth>
                        <MenuItem value="Honda">
                            <img src={LogoHonda} width={100} height={50}/>
                        </MenuItem>
                        <MenuItem value="Ford">
                            <img src={LogoFord} width={100} height={50}/>
                        </MenuItem>
                    </SelectInput>
                </Grid>
                <Grid item xs={12}>
                    <SelectInput name="testes" label="seleciona">
                        <MenuItem value="1">1</MenuItem>
                        <MenuItem value="2">2</MenuItem>
                        <MenuItem value="3">3</MenuItem>
                        <MenuItem value="4">4</MenuItem>
                        <MenuItem value="5">5</MenuItem>
                        <MenuItem value="6">6</MenuItem>
                        <MenuItem value="7">7</MenuItem>
                        <MenuItem value="8">8</MenuItem>
                        <MenuItem value="9">9</MenuItem>
                        <MenuItem value="10">10</MenuItem>
                        <MenuItem value="11">11</MenuItem>
                        <MenuItem value="12">12</MenuItem>
                        <MenuItem value="13">13</MenuItem>
                        <MenuItem value="14">14</MenuItem>
                        <MenuItem value="15">15</MenuItem>
                        <MenuItem value="16">16</MenuItem>
                    </SelectInput>
                </Grid>
                <Grid item xs={6}>
                    <Button variant="outlined" size="large" fullWidth type="button" onClick={CloseFunc}>Fechar</Button>
                </Grid>
                <Grid item xs={6}>
                    <Button variant="contained" size="large" type="submit" fullWidth>Salvar</Button>
                </Grid>
            </Grid>
        </Form>
    );
})