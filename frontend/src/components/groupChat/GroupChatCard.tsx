"use client"
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CustomUser } from "@/app/api/auth/[...nextauth]/options";
import GroupChatCardMenu from "./GroupChatCardMenu";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export default function GroupChatCard({
  group,
  user,
}: {
  group: GroupChatType;
  user: CustomUser;
}) {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/chat/${group.id}`);
  }
  return (
    <Card>
      <CardHeader className="flex-row justify-between items-center ">
        <CardTitle className="text-2xl">{group.title}</CardTitle>
        <GroupChatCardMenu user={user} group={group} />
      </CardHeader>
      <CardContent>
        <p>
          Passcode :-<strong>{group.passcode}</strong>
        </p>
        <p>Created At :-{new Date(group.created_at).toDateString()}</p>
        <Button onClick={handleClick}>clap me 🍑</Button>
      </CardContent>
    </Card>
  );
}