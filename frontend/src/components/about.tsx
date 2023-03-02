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
        Hakkında
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
              Nasıl oynanır
            </h2>
            <p className={classes.p} id="modal-description">
              <b>CasusKim?</b> oyuncuların aralarındaki casusun kim olduğunu belirlemek
		 için birlikte çalıştığı bir sosyal çıkarım oyunudur.
            </p>
            <br />
            <p className={classes.p} id="modal-description">
              <b>Oynanış:</b> Oyun başladığında, casus olan bir kişi dışında herkes aynı yeri ve benzersiz bir rolü alır. Örneğin, oyuncular konum olarak "Sahil" veya Restoran"ı alabilir. Tüm normal oyuncular casusun kim olduğunu öğrenmek ve casus konumu doğru bir şekilde tahmin edip kazanmadan önce onları oylamak ister.
            </p>
            <br />
            <p className={classes.p} id="modal-description">
              <b>Tartışma:</b> Herkes ne olduğunu öğrendiğinde, tartışma başlar. Tartışma sırasında oyuncular sırayla birbirlerine sorular sorarlar. Oyuncular, casusu bulmalarına yardımcı olacak sorular sormaya çalışırken, casus konumu tahmin etmek ve fark edilmeden kalmak ister. Örneğin, bir oyuncu başka bir oyuncuya "Bu yerde ne tür renkler görüyorsun?" veya "Bu yerde çocuklara izin veriliyor mu?" Bir oyuncu cevap verdiğinde, başka bir oyuncuya soru sormalıdır. Oyuncular istedikleri gibi cevap verebilirler, ancak her zaman çok belirsiz cevaplar verirlerse casus olduklarından şüphelenilebilirler. Tartışma sırasında sorularınızda ve cevaplarınızda ayrık olmanın önemli olduğunu unutmayın çünkü her şey çok açıksa casus kolayca kazanabilir.
            </p>
            <br />
            <p className={classes.p} id="modal-description">
              <b>Oylama ve Turlar:</b> Tur, tartışma zamanlayıcısı dolduğunda sona erer. Tüm oyuncular herhangi bir zamanda bir oyuncuyu oylamaya sunabilir. Oyuncuların geri kalanı daha sonra oylamaya katılıp katılmadıklarına oy verir. Şüpheli bir oyuncuyu başarılı bir şekilde oylamak ve turu zamanlayıcıdan önce bitirmek için oyların <b>oybirliğiyle</b> alınması gerekir. Her oyuncu, başka bir oyuncuyu her turda yalnızca bir kez oylayabilir. Casus ayrıca herhangi bir zamanda konumu tahmin edebilir ve bu da raundu erken bitirir.
            </p>
            <br />
            <p className={classes.p} id="modal-description">
              Tur, tartışma zamanlayıcısı sona erdiğinde, oyuncular başka bir oyuncuyu başarılı bir şekilde oyladığında veya casus konum hakkında bir tahminde bulunduğunda sona erer. Casus olmayan oyuncular yalnızca casusa oy verirlerse veya casus konumu yanlış tahmin ederse kazanabilir, ancak zamanlayıcı biterse veya konumu doğru tahmin ederse casus kazanabilir.
            </p>
            <br />
            <p className={classes.p} id="modal-description">
              Casus Zaferi:
              <br />• Tur biterse ve kimse elenmezse casus <b>2 puan</b> alır
              <br />• Casus olmayan biri oylanırsa casus <b>4 puan</b> alır
              <br />• Casus, konumu doğru tahmin ederse <b>4 puan</b> alır, aksi takdirde bu casus olmayan bir zaferdir
              <br />
              <br />
              Casus Olmayan Zafer:
              <br />• Casus dışındaki herkes <b>1 puan</b> alır
              <br />• Casus için başarılı oylamayı başlatan oyuncu <b>2 puan</b> alır.
            </p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};
