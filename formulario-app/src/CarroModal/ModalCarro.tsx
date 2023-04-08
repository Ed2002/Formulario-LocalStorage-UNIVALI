import Grid from "@mui/material/Grid";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import { Input } from "../core/components/Form/Input/input";
import Button from "@mui/material/Button";
import { InputCheckBox } from "../core/components/Form/CheckBox";


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