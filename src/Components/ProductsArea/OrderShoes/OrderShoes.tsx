import { Button, ButtonGroup, Checkbox, createMuiTheme, FormControlLabel, TextField, ThemeProvider, Typography } from "@material-ui/core";
import green from '@material-ui/core/colors/green';
import orange from '@material-ui/core/colors/orange';
import { ContactMail, Send, Clear } from "@material-ui/icons";
import "./OrderShoes.css";

function OrderShoes(): JSX.Element {

    // Creating custom theme: 
    const myTheme = createMuiTheme({
        typography: {
            fontFamily: "Helvetica",
            fontSize: 15,
            h3: { fontSize: 30 }
        },
        palette: {
            primary: { main: green[600] },
            secondary: { main: orange[600] }
        }
    });

    return (
        <ThemeProvider theme={myTheme}>
            <div className="ContactUs Box">

                <Typography variant="h3" className="Headline">
                    <ContactMail />
                    &nbsp;
                    הזמנת נעליים
                </Typography>

                <TextField label="model" variant="outlined" className="TextBox" />

                <TextField label="size" type="number" variant="outlined" className="TextBox" />

                <TextField label="color"  variant="outlined" className="TextBox" />

                <FormControlLabel label="אשר שקראת את תקנון המשלוחים שלנו" control={<Checkbox />} />

                <ButtonGroup variant="contained" fullWidth>
                    <Button color="primary" startIcon={<Send />} >בצע הזמנה</Button>
                    <Button color="secondary" startIcon={<Clear />} >בטל</Button>
                </ButtonGroup>

            </div>
        </ThemeProvider>
    );
}

export default OrderShoes;
