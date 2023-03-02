import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";

export interface QuestionSuggestionProps {
  suggestion: string | undefined;
  open: boolean;
  onClose: () => void;
}

const QuestionSuggestion = ({
  suggestion,
  open,
  onClose,
}: QuestionSuggestionProps) => {
  return (
    <Dialog fullWidth={true} maxWidth="sm" open={open} onClose={onClose}>
      <DialogTitle>Soru Önerisi</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {suggestion || "Şu anda öneri yok!"}
        </DialogContentText>
        <DialogContentText style={{ color: "#aaaaaa" }}>
          <i>Öneriler her dakika yenilenir</i>
        </DialogContentText>
      </DialogContent>
      <DialogActions></DialogActions>
    </Dialog>
  );
};

export default QuestionSuggestion;
