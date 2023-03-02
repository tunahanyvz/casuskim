import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";

import { LocalPlayer, StatePlayer } from "../../protocol";

interface VoteDialogProps {
  isOpen: boolean;
  me: LocalPlayer;
  value: string;
  players: readonly StatePlayer[];
  onClose: (value: string, final?: boolean) => void;
}

function VoteDialog({
  isOpen,
  me,
  value: valueProp,
  players,
  onClose,
}: VoteDialogProps) {
  const [value, setValue] = React.useState<string>(valueProp);
  const radioGroupRef = React.useRef<HTMLElement>(null);
  const handleEntering = () => {
    if (radioGroupRef.current != null) radioGroupRef.current.focus();
  };
  const handleCancel = () => onClose(value);
  const handleOk = () => {
    onClose(value, true);
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };
  React.useEffect(() => {
    if (!isOpen) setValue(valueProp);
  }, [valueProp, isOpen]);

  return (
    <Dialog
      disableBackdropClick
      disableEscapeKeyDown
      fullWidth={true}
      maxWidth="sm" // h
      onEntering={handleEntering}
      open={isOpen}
      aria-labelledby="confirmation-dialog-title"
    >
      <DialogTitle id="confirmation-dialog-title">
        {me.isSpy ? "Kime tuzak kuruyorsun?" : "Casus kim?"}
      </DialogTitle>
      <DialogContent dividers>
        <DialogContentText>
          Not: Bu işlem her turda yalnızca bir kez yapılabilir.
        </DialogContentText>
        <RadioGroup
          ref={radioGroupRef}
          aria-label="playervote"
          name="playervote"
          value={value}
          onChange={handleChange}
        >
          {players.map((player) => {
            return player.discriminator !== me.discriminator ? (
              <FormControlLabel
                value={player.discriminator.toString()}
                key={player.discriminator.toString()}
                control={<Radio color="primary" />}
                label={player.nickname}
              />
            ) : null;
          })}
        </RadioGroup>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel} color="primary">
          İptal
        </Button>
        <Button onClick={handleOk} color="primary">
          Oylama Başlat
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default React.memo(VoteDialog);
