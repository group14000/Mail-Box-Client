import React from 'react';
import { Link } from 'react-router-dom';
import FileIcon from '@/components/shared-component/FileIcon/FileIcon';
import InboxIcon from '@/components/shared-component/InboxIcon/InboxIcon';
import MailIcon from '@/components/shared-component/MailIcon/MailIcon';
import SearchIcon from '@/components/shared-component/SearchIcon/SearchIcon';
import SendIcon from '@/components/shared-component/SendIcon/SendIcon';
import Trash2Icon from '@/components/shared-component/Trash2Icon/Trash2Icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const MailLayout: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="#" className="flex items-center gap-2">
            <MailIcon className="w-6 h-6" />
            <span className="text-xl font-bold">Mail App</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link to="#" className="hover:underline">
              Inbox
            </Link>
            <Link to="#" className="hover:underline">
              Sent
            </Link>
            <Link to="#" className="hover:underline">
              Drafts
            </Link>
            <Link to="#" className="hover:underline">
              Trash
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search emails"
              className="pl-10 pr-4 py-2 rounded-md bg-primary-foreground/10 focus:outline-none focus:ring-2 focus:ring-primary-foreground/50"
            />
          </div>
          <Button variant="ghost" size="icon" className="rounded-full">
            <img src="/placeholder.svg" width="32" height="32" className="rounded-full" alt="Avatar" />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </div>
      </header>
      <div className="flex-1 flex">
        <div className="bg-muted border-r px-4 py-6 flex flex-col gap-4 w-64 hidden md:flex">
          <Button variant="ghost" className="justify-start gap-2">
            <InboxIcon className="w-5 h-5" />
            Inbox
          </Button>
          <Button variant="ghost" className="justify-start gap-2">
            <SendIcon className="w-5 h-5" />
            Sent
          </Button>
          <Button variant="ghost" className="justify-start gap-2">
            <FileIcon className="w-5 h-5" />
            Drafts
          </Button>
          <Button variant="ghost" className="justify-start gap-2">
            <Trash2Icon className="w-5 h-5" />
            Trash
          </Button>
        </div>
        <div className="flex-1 p-6 overflow-y-auto">
          <div className="grid gap-4">
            <article className="flex flex-col gap-2 p-4 border rounded-md hover:bg-accent transition-colors">
              <div className="flex items-center justify-between">
                <div className="font-medium">John Doe</div>
                <div className="text-xs text-muted-foreground">2 days ago</div>
              </div>
              <div className="font-medium">Re: Important Update</div>
              <p className="text-sm text-muted-foreground line-clamp-2">
                Dear John, I hope this email finds you well. I wanted to follow up on the important update I mentioned
                in my previous message. Please let me know if you have any questions or concerns.
              </p>
            </article>
            <article className="flex flex-col gap-2 p-4 border rounded-md hover:bg-accent transition-colors">
              <div className="flex items-center justify-between">
                <div className="font-medium">Jane Smith</div>
                <div className="text-xs text-muted-foreground">1 week ago</div>
              </div>
              <div className="font-medium">New Project Proposal</div>
              <p className="text-sm text-muted-foreground line-clamp-2">
                Hi there, I wanted to share a new project proposal with you. I think it could be a great opportunity for
                us to collaborate. Please take a look and let me know what you think.
              </p>
            </article>
            <article className="flex flex-col gap-2 p-4 border rounded-md hover:bg-accent transition-colors">
              <div className="flex items-center justify-between">
                <div className="font-medium">Marketing Team</div>
                <div className="text-xs text-muted-foreground">3 days ago</div>
              </div>
              <div className="font-medium">New Product Launch</div>
              <p className="text-sm text-muted-foreground line-clamp-2">
                Dear all, we are excited to announce the launch of our new product! This is a game-changer in the
                industry, and we can't wait for you to try it out. Please let me know if you have any questions.
              </p>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MailLayout;
