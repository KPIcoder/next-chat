import { Box, Stack } from "@mui/material";

import { ChatItem } from "../types/chat.types";
import { ChatListItem } from "./ChatListItem";

type Props = {
  chats: ChatItem[];
};

export default function ChatList({ chats }: Props) {
  return (
    <Box
      sx={{
        borderRight: "1px solid black",
      }}
    >
      <Stack spacing={3}>
        {chats.map((chat) => (
          <ChatListItem
            key={chat.id}
            id={chat.id}
            avatar={chat.avatar}
            nickname={chat.nickname}
            lastMessage={chat.lastMessage}
          />
        ))}
      </Stack>
    </Box>
  );
}