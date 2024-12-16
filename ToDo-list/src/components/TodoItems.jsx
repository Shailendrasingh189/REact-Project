import { Box, Paper, Stack, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import DeleteIcon from "@mui/icons-material/Delete";

const TodoItems = ({ text, id, isComplete, deleteTodo, toggle }) => {
  return (
    <Paper elevation={2}>
      <Box
        display="flex"
        alignItems="center"
        gap={2}
        margin={"0.75rem"}
        justifyContent="space-between"
      >
        <Stack direction={"row"} spacing={{ xs: 1, sm: 2 }} padding="0.5rem">
          {isComplete ? (
            <CheckCircleIcon
              onClick={() => {
                toggle(id);
              }}
              sx={{ color: "#0288d1", cursor: "pointer" }}
            />
          ) : (
            <CircleOutlinedIcon
              onClick={() => {
                toggle(id);
              }}
              sx={{  color: "#0288d1", cursor: "pointer" }}
            />
          )}
          <Typography sx={{ color: "#475569", textDecoration: isComplete ? 'line-through': 'none' }} >{text}</Typography>
        </Stack>

        <DeleteIcon
          onClick={() => {
            deleteTodo(id);
          }}
          sx={{ color: "#f44336", cursor: "pointer", marginRight: "0.5rem" }}
        />
      </Box>
    </Paper>
  );
};

export default TodoItems;
