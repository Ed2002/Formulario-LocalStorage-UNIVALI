import Grid from "@mui/material/Grid";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import { Input } from "../core/components/Form/Input/input";
import Button from "@mui/material/Button";
import { InputCheckBox } from "../core/components/Form/CheckBox";
import { SelectInput } from "../core/components/Form/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import { RadioInput, RadioInputType } from "../core/components/Form/Radio";
import LogoHonda from '../assets/honda.svg';
import LogoFord from '../assets/ford.svg';
import LogoToyota from '../assets/toyota.svg';
import LogoVolkswagen from '../assets/volkswagen.svg';
import LogoChevrolet from '../assets/chevrolet-2.svg';
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";


interface ICarroModal {
    Submit: (data: any) => void;
    CloseFunc: () => void;
    RefForm: React.RefObject<FormHandles>;
    InitialData?: CarroType;
}

const BlindadoOptions:Array<RadioInputType> = [
    { value: true, label: "Sim" },
    { value: false, label: "Não" },
]

const Opcionais = () => {
    return (
        <>
        <Grid item xs={12}>  
                    <InputCheckBox name="Airbag" label="Airbag"/>
                </Grid>
                <Grid item xs={12}>
                    <InputCheckBox name="Alarme" label="Alarme"/>
                </Grid>
                <Grid item xs={12}>
                    <InputCheckBox name="ArCondicionado" label="Ar Condicionado"/>
                </Grid>
                <Grid item xs={12}>
                    <InputCheckBox name="BancosCouro" label="Bancos em couro"/>
                </Grid>
                <Grid item xs={12}>                    
                    <InputCheckBox name="ComputadorBordo" label="Computador de bordo"/>
                </Grid>   
                <Grid item xs={12}>                    
                    <InputCheckBox name="ControleAutomaticoVelocidade" label="Controle automático de velocidade"/>
                </Grid>   
                <Grid item xs={12}>                    
                    <InputCheckBox name="ControleTracao" label="Controle de tração"/>
                </Grid>  
                <Grid item xs={12}>                    
                    <InputCheckBox name="DirecaoHidraulica" label="Direção hidráulica"/>
                </Grid>  
                <Grid item xs={12}>                    
                    <InputCheckBox name="FreioAbs" label="Freio abs"/>
                </Grid>  
                <Grid item xs={12}>                    
                    <InputCheckBox name="RodasLigaLeve" label="Rodas de liga leve"/>
                </Grid>  
                <Grid item xs={12}>                    
                    <InputCheckBox name="SensorChuva" label="Sensor de chuva"/>
                </Grid> 
                <Grid item xs={12}>                    
                    <InputCheckBox name="SensorEstacionamento" label="Sensor de estacionamento"/>
                </Grid>
                <Grid item xs={12}>                    
                    <InputCheckBox name="TetoSolar" label="Teto solar"/>
                </Grid>
                <Grid item xs={12}>                    
                    <InputCheckBox name="VidrosEletricos" label="Vidros elétricos"/>
                </Grid>
        </>
    );
}



export const ModalCarro = (({ Submit, CloseFunc, RefForm, InitialData }: ICarroModal) => {
    return (
        <Form onSubmit={Submit} ref={RefForm} initialData={InitialData}>
            <Grid container spacing={2} sx={{ padding: 3 }}>
                <Grid item xs={12}>
                    <SelectInput name="Marca" label="Marca">
                        <MenuItem value="Toyota">
                            <img src={LogoToyota} alt="LogoToyota" width={100} height={70}/>
                        </MenuItem>
                        <MenuItem value="Volkswagen">
                            <img src={LogoVolkswagen} alt="LogoVolkswagen" width={100} height={70}/>
                        </MenuItem>
                        <MenuItem value="Honda">
                            <img src={LogoHonda} alt="LogoHonda" width={100} height={70}/>
                        </MenuItem>
                        <MenuItem value="Ford">
                            <img src={LogoFord} alt="LogoFord" width={100} height={70}/>
                        </MenuItem>
                        <MenuItem value="Chevrolet">
                            <img src={LogoChevrolet} alt="LogoChevrolet" width={100} height={70}/>
                        </MenuItem>
                    </SelectInput>
                </Grid>
                <Grid item xs={12}>
                    <Input name="Modelo" label="Modelo" fullWidth inputProps={{
                        maxLength: 100
                    }}/>
                </Grid>
                <Grid item xs={12}>
                    <Input name="Versao" label="Versão" fullWidth inputProps={{
                        maxLength: 100
                    }}/>
                </Grid>
                <Grid item xs={12}>
                    <Input type="number" name="Ano" label="Ano" fullWidth inputProps={{
                        min: 1769
                    }}/>
                </Grid>
                <Grid item xs={12}>
                    <Input type="number" name="Preco" label="Preço" fullWidth inputProps={{
                        min: 0
                    }}/>
                </Grid>
                <Grid item xs={12}>
                    <SelectInput name="Cor" label="Cor">
                        <MenuItem value="Azul">Azul</MenuItem>
                        <MenuItem value="Bege">Bege</MenuItem>
                        <MenuItem value="Branco">Branco</MenuItem>
                        <MenuItem value="Cinza">Cinza</MenuItem>
                        <MenuItem value="Marrom">Marrom</MenuItem>
                        <MenuItem value="Prata">Prata</MenuItem>
                        <MenuItem value="Preto">Preto</MenuItem>
                        <MenuItem value="Vermelho">Vermelho</MenuItem>
                    </SelectInput>
                </Grid>
                <Grid item xs={12}>
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panelOpcionais-content"
                        id="panelOpcionais-header"
                        >
                        <h4>Opcionais</h4>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Opcionais/>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
                <Grid item xs={12}>                    
                    <RadioInput name="Blindado" label="Blindado" elements={BlindadoOptions}/>
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