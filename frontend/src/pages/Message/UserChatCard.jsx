import { Avatar, Card, CardHeader, IconButton } from "@mui/material";
import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useSelector } from "react-redux";

const UserChatCard = ({ chat }) => {
  const { auth } = useSelector((store) => store);
  const lastMessage = chat.messages;
  const lastMessageText = lastMessage.length > 0 ? lastMessage[lastMessage.length - 1].content : "No messages";
  console.log("chat------", chat)
  console.log("lastmessages------", lastMessageText)
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar
            sx={{
              width: "3.5rem",
              height: "3.5rem",
              fontSize: "1.5rem",
            }}
            src={
              auth.user.id === chat.users[0].id
                ? chat.users[1].avatarUrl
                : chat.users[0].avatarUrl
            }
          />
        }
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
        title={
          auth.user.id === chat.users[0].id
            ? chat.users[1].firstName + " " + chat.users[1].lastName
            : chat.users[0].firstName + " " + chat.users[0].lastName
        }
        subheader={lastMessageText}
      ></CardHeader>
    </Card>
  );
};

export default UserChatCard;
