import React from "react";

import {
  Button,
  IconButton,
  Modal,
  makeStyles,
  Theme,
  createStyles,
  createMuiTheme,
} from "@material-ui/core";
import orange from "@material-ui/core/colors/orange";
import blue from "@material-ui/core/colors/blue";
import Fade from "@material-ui/core/Fade";
import Backdrop from "@material-ui/core/Backdrop";
import Info from "@material-ui/icons/Info";
import Close from "@material-ui/icons/Close";

const theme = createMuiTheme({
  palette: {
    primary: { main: orange[400] },
    secondary: { main: blue[50] },
    background: {
      paper: "#2e2e2e",
    },
    action: {
      disabled: "#aaaaaa",
    },
  },
});

const useModalStyles = makeStyles((_theme: Theme) => {
  return createStyles({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: "none",
      borderRadius: "5px",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      maxWidth: "700px",
      maxHeight: "calc(100vh - 120px)",
      margin: "40px!important",
      overflowY: "auto",
      outline: "none",
    },
    h2: {
      marginBottom: "20px",
      color: "#eeeeee",
    },
    p: {
      color: "#dddddd",
      fontSize: "15px",
    },
  });
});

const useButtonStyles = makeStyles((_theme: Theme) =>
  createStyles({
    button: {
      marginRight: "0.5rem",
      color: "#ffffff",
      paddingLeft: "10px",
      paddingRight: "10px",
      "&:hover": {
        backgroundColor: "#333333",
      },
    },
  })
);

export const About = (props: {
  style?: React.CSSProperties;
  hasPlayed: boolean;
}) => {
  const headerClasses = useButtonStyles();
  const classes = useModalStyles();
  const [open, setOpen] = React.useState(!props.hasPlayed);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div style={props.style}>
      <Button
        startIcon={<Info />}
        onClick={handleOpen}
        className={headerClasses.button}
      >
        Hakk??nda
      </Button>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <IconButton
              style={{ float: "right", color: "#cccccc" }}
              size="small"
              edge="end"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <Close />
            </IconButton>
            <h2 className={classes.h2} id="modal-title">
              Nas??l oynan??r
            </h2>
            <p className={classes.p} id="modal-description">
              <b>CasusKim?</b> oyuncular??n aralar??ndaki casusun kim oldu??unu belirlemek
		 i??in birlikte ??al????t?????? bir sosyal ????kar??m oyunudur.
            </p>
            <br />
            <p className={classes.p} id="modal-description">
              <b>Oynan????:</b> Oyun ba??lad??????nda, casus olan bir ki??i d??????nda herkes ayn?? yeri ve benzersiz bir rol?? al??r. ??rne??in, oyuncular konum olarak "Sahil" veya Restoran"?? alabilir. T??m normal oyuncular casusun kim oldu??unu ????renmek ve casus konumu do??ru bir ??ekilde tahmin edip kazanmadan ??nce onlar?? oylamak ister.
            </p>
            <br />
            <p className={classes.p} id="modal-description">
              <b>Tart????ma:</b> Herkes ne oldu??unu ????rendi??inde, tart????ma ba??lar. Tart????ma s??ras??nda oyuncular s??rayla birbirlerine sorular sorarlar. Oyuncular, casusu bulmalar??na yard??mc?? olacak sorular sormaya ??al??????rken, casus konumu tahmin etmek ve fark edilmeden kalmak ister. ??rne??in, bir oyuncu ba??ka bir oyuncuya "Bu yerde ne t??r renkler g??r??yorsun?" veya "Bu yerde ??ocuklara izin veriliyor mu?" Bir oyuncu cevap verdi??inde, ba??ka bir oyuncuya soru sormal??d??r. Oyuncular istedikleri gibi cevap verebilirler, ancak her zaman ??ok belirsiz cevaplar verirlerse casus olduklar??ndan ????phelenilebilirler. Tart????ma s??ras??nda sorular??n??zda ve cevaplar??n??zda ayr??k olman??n ??nemli oldu??unu unutmay??n ????nk?? her ??ey ??ok a????ksa casus kolayca kazanabilir.
            </p>
            <br />
            <p className={classes.p} id="modal-description">
              <b>Oylama ve Turlar:</b> Tur, tart????ma zamanlay??c??s?? doldu??unda sona erer. T??m oyuncular herhangi bir zamanda bir oyuncuyu oylamaya sunabilir. Oyuncular??n geri kalan?? daha sonra oylamaya kat??l??p kat??lmad??klar??na oy verir. ????pheli bir oyuncuyu ba??ar??l?? bir ??ekilde oylamak ve turu zamanlay??c??dan ??nce bitirmek i??in oylar??n <b>oybirli??iyle</b> al??nmas?? gerekir. Her oyuncu, ba??ka bir oyuncuyu her turda yaln??zca bir kez oylayabilir. Casus ayr??ca herhangi bir zamanda konumu tahmin edebilir ve bu da raundu erken bitirir.
            </p>
            <br />
            <p className={classes.p} id="modal-description">
              Tur, tart????ma zamanlay??c??s?? sona erdi??inde, oyuncular ba??ka bir oyuncuyu ba??ar??l?? bir ??ekilde oylad??????nda veya casus konum hakk??nda bir tahminde bulundu??unda sona erer. Casus olmayan oyuncular yaln??zca casusa oy verirlerse veya casus konumu yanl???? tahmin ederse kazanabilir, ancak zamanlay??c?? biterse veya konumu do??ru tahmin ederse casus kazanabilir.
            </p>
            <br />
            <p className={classes.p} id="modal-description">
              Casus Zaferi:
              <br />??? Tur biterse ve kimse elenmezse casus <b>2 puan</b> al??r
              <br />??? Casus olmayan biri oylan??rsa casus <b>4 puan</b> al??r
              <br />??? Casus, konumu do??ru tahmin ederse <b>4 puan</b> al??r, aksi takdirde bu casus olmayan bir zaferdir
              <br />
              <br />
              Casus Olmayan Zafer:
              <br />??? Casus d??????ndaki herkes <b>1 puan</b> al??r
              <br />??? Casus i??in ba??ar??l?? oylamay?? ba??latan oyuncu <b>2 puan</b> al??r.
            </p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};
