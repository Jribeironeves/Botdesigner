import styled from "styled-components";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { makeStyles } from "@material-ui/core/styles";
import ArrowDropDownCircleOutlinedIcon from "@mui/icons-material/ArrowDropDownCircleOutlined";
import SendIcon from "@mui/icons-material/Send";
import { RiPlayListAddLine } from "react-icons/ri";

export const Container = styled.div`
  position: relative;
  left: 0rem;
  top: 60px;
  overflow-x: hidden;
  width: 100%;
`;

export const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    left: "100px",
    height: "500px",
    width: "87%",
    flexGrow: 1,
    paddingLeft: "20px",
    color: "#A8A8A8",
    backgroundColor: "#F3F4F8",
    borderRadius: 20,
    overflow: "auto",
    "& .MuiTreeItem-root": {
      "&:hover > .MuiTreeItem-content": {
        backgroundColor: "transparent !important",
      },
      "&.Mui-selected > .MuiTreeItem-content": {
        backgroundColor: "transparent !important",
      },
      "&.Mui-selected.MuiTreeItem-focused > .MuiTreeItem-content": {
        backgroundColor: "transparent !important",
      },
    },
    "& .MuiTreeItem-content": {
      "&.Mui-selected": {
        backgroundColor: "transparent !important",
      },
    },
    "& .MuiTreeItem-content.Mui-focused": {
      backgroundColor: "transparent !important",
    },
    "& .MuiButtonBase-root:hover": {
      backgroundColor: "transparent",
    },
    "& .MuiButtonBase-root.Mui-focusVisible": {
      backgroundColor: "transparent",
    },
    [theme.breakpoints.down("sm")]: {
      top: "-60px",
      left: "30px",
      width: "80%",
    },
  },
}));

export const FlowChartLine = styled.div`
  position: absolute;
  left: 17px;
  top: 0;
  width: 1px;
  height: 100%;
  background-color: #d3d7db;
  z-index: 1;
`;

export const StyledArrowDropDownIcon = styled(ArrowDropDownCircleOutlinedIcon)`
  color: #000;
  z-index: 100;
  margin-left: 6px;
  width: 20px !important;
  height: 20px !important;
`;

export const StyledArrowRightIcon = styled(ArrowDropDownCircleOutlinedIcon)`
  color: #000;
  width: 20px !important;
  height: 20px !important;
`;

export const ContainerNode = styled.div`
  position: relative;
`;

export const StartIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: #3680ae;
  color: #fff;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
`;

export const ChildNodeIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: #4198ce;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  margin-right: 8px;
  margin-top: 2.5rem;
`;

export const NodeText = styled.span`
  position: absolute;
  top: -30px;
  left: 3.5%;
  transform: translateX(-50%);
  background-color: #ffffff;
  padding: 4px 8px;
  border: 1px solid #cccccc;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
  color: #000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    top: -30px;
    left: 9%;
  }
`;

export const DeleteButton = styled(DeleteOutlineIcon)`
  position: absolute;
  top: 10px;
  left: 3.5%;
  color: #000;
  @media (max-width: 768px) {
    top: 9px;
    left: 17%;
  }
`;

export const AddButton = styled(RiPlayListAddLine)`
  color: #000;
  width: 30px !important;
  height: 30px !important;
  margin-left: 0.5rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  cursor: pointer;
`;

export const StyledSendIcon = styled(SendIcon)`
  color: #ffffff;
  padding-left: 0.2rem;
  width: 20px !important;
  height: 20px !important;
`;
