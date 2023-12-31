'use client';

import React from 'react';
import { Menu, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { Poppins } from 'next/font/google';
import { cn } from '@/lib/utils';
import { UserButton } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/theme-toggle';
import MobileSidebar from '@/components/MobileSidebar';
import { useProModal } from '@/lib/zustand-store';

const font = Poppins({
  weight: '600',
  subsets: ['latin'],
});

export default function Navbar() {
  const proModal = useProModal();

  return (
    <div className="fixed w-full z-50 flex justify-between items-center py-2 px-4 border-b border-primary/10 bg-secondary h-16">
      <div className="flex items-center">
        {/* <Menu className="block md:hidden" /> */}
        <MobileSidebar />
        <Link href="/">
          <h1
            className={cn(
              'hidden md:block text-xl md:text-3xl font-bold text-primary',
              font.className
            )}
          >
            AI Platform
          </h1>
        </Link>
      </div>
      <div className="flex items-center gap-x-3">
        <Button size={'sm'} variant={'premium'} onClick={proModal.onOpen}>
          Update
          <Sparkles className="w-4 h-4 fill-white text-white ml-2" />
        </Button>
        <ModeToggle />
        <UserButton />
      </div>
    </div>
  );
}
