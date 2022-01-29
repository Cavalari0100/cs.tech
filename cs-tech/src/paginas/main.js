import { withStyles } from "@material-ui/styles"
import Typography from '@material-ui/core/Typography';
import { Col, Row } from "reactstrap";
const styles = theme => ({
    root: {
        margin: 10,
        backgroundColor: "#FAFAFA ",
        boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
    },
    mainPageTitle: {
        padding: 10
    },
    title: {
        color: '#740571 ',
        fontSize: '1.2em',
        margin: '1em'
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    plot: {
    },
    chartContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    normalText: {
        color: "black",
        fontSize: '1.2em',
    },
});

function MainPage({
    classes,
    dashboard
}) {
    return (
        <div className={classes.root}>
            <div className={classes.mainPageTitle}>
                <Typography className={classes.title}>CS.Tech</Typography>
            </div>
            <hr></hr>
            <Row>
                <Col>
                    <Typography className={classes.normalText}>CABEÇALHO</Typography>
                </Col>
                <Col>
                    <Typography className={classes.normalText}>CABEÇALHO</Typography>
                </Col>
                <Col>
                    <Typography className={classes.normalText}>CABEÇALHO</Typography>
                </Col>
            </Row>
            <hr></hr>
            <Row>
                <Col></Col>
                <Col><Typography className={classes.normalText}>POSTS</Typography></Col>
                <Col></Col>
            </Row>
            <hr></hr>
            {/* FOOTER */}
            <Row>
                <Col></Col>
                <Col>
                    <Typography className={classes.normalText}>FOOTER</Typography>
                </Col>
                <Col></Col>
            </Row>
            <Row>
                <Col>
                    <h1 className={classes.normalText}>MAPA</h1>
                </Col>
                <Col>
                    <Typography className={classes.normalText}>Informações</Typography>
                    <Row>
                        <Col>
                        <Typography className={classes.normalText}>Info</Typography>
                        <Typography className={classes.normalText}>Info</Typography>
                        <Typography className={classes.normalText}>Info</Typography>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <Typography className={classes.normalText}>REDES SOCIAIS</Typography>
                    <Row>
                        <Col>
                        <Typography className={classes.normalText}>Resdes socias</Typography>
                        <Typography className={classes.normalText}>Resdes socias</Typography>
                        <Typography className={classes.normalText}>Resdes socias</Typography>
                        </Col>
                    </Row>
                </Col>
                
            </Row>
        </div>
    )
}
export default withStyles(styles)(MainPage);