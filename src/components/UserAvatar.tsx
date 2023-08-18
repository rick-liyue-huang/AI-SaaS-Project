'use client';

import React from 'react';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { useUser } from '@clerk/nextjs';

export default function UserAvatar() {
  const { user } = useUser();

  return (
    <Avatar className="w-12 h-12">
      <AvatarImage src={user?.imageUrl} />
    </Avatar>
  );
}
