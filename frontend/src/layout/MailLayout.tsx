import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import MailIcon from '@/components/shared-component/MailIcon/MailIcon';
import InboxIcon from '@/components/shared-component/InboxIcon/InboxIcon';
import ArchiveIcon from '@/components/shared-component/ArchiveIcon/ArchiveIcon';
import SearchIcon from '@/components/shared-component/SearchIcon/SearchIcon';
import StarIcon from '@/components/shared-component/StarIcon/StarIcon';
import MoveHorizontalIcon from '@/components/shared-component/MoveHorizontalIcon/MoveHorizontalIcon';
import Trash2Icon from '@/components/shared-component/Trash2Icon/Trash2Icon'; 

const MailLayout: React.FC = () => {
    return (
        <div className="grid min-h-screen w-full overflow-hidden lg:grid-cols-[280px_1fr]">
            <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
                <div className="flex h-[60px] items-center px-6">
                    <Link to="#" className="flex items-center gap-2 font-semibold" >
                        <MailIcon className="h-6 w-6" />
                        <span>Acme Email</span>
                    </Link>
                </div>
                <div className="flex-1">
                    <nav className="grid items-start px-4 text-sm font-medium">
                        <Link
                            to="#"
                            className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900 transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"

                        >
                            <InboxIcon className="h-4 w-4" />
                            Inbox
                            <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">12</Badge>
                        </Link>
                        <Link
                            to="#"
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"

                        >
                            <ArchiveIcon className="h-4 w-4" />
                            Archived
                        </Link>
                        <Link
                            to="#"
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"

                        >
                            <Trash2Icon className="h-4 w-4" />
                            Trash
                        </Link>
                    </nav>
                </div>
            </div>
            <div className="flex flex-col">
                <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
                    <div className="flex-1">
                        <h1 className="font-semibold text-lg">Inbox</h1>
                    </div>
                    <div className="flex flex-1 items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
                        <form className="ml-auto flex-1 sm:flex-initial">
                            <div className="relative">
                                <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                                <Input
                                    type="search"
                                    placeholder="Search emails..."
                                    className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px] bg-white"
                                />
                            </div>
                        </form>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon" className="rounded-full">
                                    <img src="/placeholder.svg" width="32" height="32" className="rounded-full" alt="Avatar" />
                                    <span className="sr-only">Toggle user menu</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuLabel>John Doe</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Settings</DropdownMenuItem>
                                <DropdownMenuItem>Support</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Logout</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </header>
                <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
                    <div className="border shadow-sm rounded-lg p-2">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[40px]">
                                        <Checkbox />
                                    </TableHead>
                                    <TableHead className="w-[40px]">
                                        <StarIcon className="w-4 h-4" />
                                    </TableHead>
                                    <TableHead className="min-w-[200px]">Subject</TableHead>
                                    <TableHead className="min-w-[150px]">From</TableHead>
                                    <TableHead className="hidden md:table-cell min-w-[150px]">Date</TableHead>
                                    <TableHead className="text-right">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell>
                                        <Checkbox />
                                    </TableCell>
                                    <TableCell>
                                        <StarIcon className="w-4 h-4 text-yellow-500" />
                                    </TableCell>
                                    <TableCell className="font-medium">Quarterly Report Update</TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-2">
                                            <Avatar className="h-6 w-6">
                                                <img src="/placeholder.svg" alt="@shadcn" />
                                                <AvatarFallback>JD</AvatarFallback>
                                            </Avatar>
                                            <span>John Doe</span>
                                        </div>
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">May 15, 2023</TableCell>
                                    <TableCell className="text-right">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="ghost" size="icon">
                                                    <MoveHorizontalIcon className="w-4 h-4" />
                                                    <span className="sr-only">Actions</span>
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuItem>Open</DropdownMenuItem>
                                                <DropdownMenuItem>Archive</DropdownMenuItem>
                                                <DropdownMenuItem>Delete</DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <Checkbox />
                                    </TableCell>
                                    <TableCell>
                                        <StarIcon className="w-4 h-4" />
                                    </TableCell>
                                    <TableCell className="font-medium">New Feature Release</TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-2">
                                            <Avatar className="h-6 w-6">
                                                <img src="/placeholder.svg" alt="@shadcn" />
                                                <AvatarFallback>OD</AvatarFallback>
                                            </Avatar>
                                            <span>Olivia Davis</span>
                                        </div>
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">May 12, 2023</TableCell>
                                    <TableCell className="text-right">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="ghost" size="icon">
                                                    <MoveHorizontalIcon className="w-4 h-4" />
                                                    <span className="sr-only">Actions</span>
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuItem>Open</DropdownMenuItem>
                                                <DropdownMenuItem>Archive</DropdownMenuItem>
                                                <DropdownMenuItem>Delete</DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <Checkbox />
                                    </TableCell>
                                    <TableCell>
                                        <StarIcon className="w-4 h-4" />
                                    </TableCell>
                                    <TableCell className="font-medium">Invitation to Team Offsite</TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-2">
                                            <Avatar className="h-6 w-6">
                                                <img src="/placeholder.svg" alt="@shadcn" />
                                                <AvatarFallback>SA</AvatarFallback>
                                            </Avatar>
                                            <span>Sarah Anderson</span>
                                        </div>
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">May 10, 2023</TableCell>
                                    <TableCell className="text-right">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="ghost" size="icon">
                                                    <MoveHorizontalIcon className="w-4 h-4" />
                                                    <span className="sr-only">Actions</span>
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuItem>Open</DropdownMenuItem>
                                                <DropdownMenuItem>Archive</DropdownMenuItem>
                                                <DropdownMenuItem>Delete</DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <Checkbox />
                                    </TableCell>
                                    <TableCell>
                                        <StarIcon className="w-4 h-4" />
                                    </TableCell>
                                    <TableCell className="font-medium">Quarterly Sales Report</TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-2">
                                            <Avatar className="h-6 w-6">
                                                <img src="/placeholder.svg" alt="@shadcn" />
                                                <AvatarFallback>MJ</AvatarFallback>
                                            </Avatar>
                                            <span>Michael Johnson</span>
                                        </div>
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">May 5, 2023</TableCell>
                                    <TableCell className="text-right">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="ghost" size="icon">
                                                    <MoveHorizontalIcon className="w-4 h-4" />
                                                    <span className="sr-only">Actions</span>
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuItem>Open</DropdownMenuItem>
                                                <DropdownMenuItem>Archive</DropdownMenuItem>
                                                <DropdownMenuItem>Delete</DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default MailLayout;

