import React from "react";
import { makeStyles } from "@material-ui/styles";

import AppContainer from "components/AppContainer";
import ReactJson from "react-json-view";
import { Grid, Typography, TextField, Button, Paper, CircularProgress } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: { display: "flex" },
  paper: { padding: theme.spacing(3, 2) },
  circularProgress: { marginRight: theme.spacing(1), color: theme.palette.action.disabled }
}))

export default function XpathTestPage(props){
  const [ url, setUrl ] = React.useState("http://beritajatim.com/peristiwa/dua-kecamatan-di-pamekasan-aman-dari-kekeringan/");
  const [ xpath, setXpath ] = React.useState("//meta[@property='article:published_time']/@content");
  const [ isExtracting, setIsExtracting ] = React.useState(false);
  const [ result, setResult ] = React.useState({});

  const handleChangeUrl = (e) => setUrl(e.target.value);
  const handleChangeXpath = (e) => setXpath(e.target.value);
  const handleExtractClick = async () => {
    setIsExtracting(true);
    const jsonResult = await (await fetch(`${process.env.REACT_APP_API_BASE_URL}/v1/xpath/extract`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url, xpath })
    })).json();
    setResult(jsonResult.results);
    setIsExtracting(false);
  }

  const classes = useStyles();
  
  return (
    <AppContainer>
      <Grid direction="column" spacing={2} container>
        <Grid xs={12} item>
          <Typography variant="h6">XPATH Tools</Typography>
          <Typography variant="caption">Use this tools to do XPATH testing. Under the hood, this tools will call ARCrawler API to perform XPATH extraction.</Typography>
        </Grid>

        <Grid xs={12} item>
          <Grid direction="row" alignItems="center" spacing={2} container>
            <Grid xs={2} lg={1} item>
              <Typography>URL</Typography>
            </Grid>
            <Grid xs={10} lg={11} item>
              <TextField value={url} onChange={handleChangeUrl} margin="dense" variant="outlined" fullWidth/>
            </Grid>
          </Grid>
        </Grid>
        <Grid xs={12} item>
          <Grid direction="row" alignItems="center" spacing={2} container>
            <Grid xs={2} lg={1} item>
              <Typography>XPATH</Typography>
            </Grid>
            <Grid xs={10} lg={11} item>
              <TextField value={xpath} onChange={handleChangeXpath} margin="dense" variant="outlined" fullWidth/>
            </Grid>
          </Grid>
        </Grid>

        <Grid xs={12} item>
          <Button disabled={isExtracting} onClick={handleExtractClick}variant="contained" color="primary">
            {isExtracting? <CircularProgress className={classes.circularProgress} size={16}/>: null} Extract
          </Button>
        </Grid>

        <Grid xs={12} item>
          <Grid direction="column" container>
            <Typography variant="overline">Extraction Result</Typography>
            <Paper className={classes.paper} elevation={16}>
              <ReactJson name={false} src ={result}/>
            </Paper>
          </Grid>
        </Grid>

      </Grid>
    </AppContainer>
  )
}