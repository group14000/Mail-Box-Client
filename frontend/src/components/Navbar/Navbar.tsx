import React from 'react'
import { Link } from 'react-router-dom'
import MailIcon from '../shared-component/MailIcon/MailIcon'
import SearchIcon from '../shared-component/SearchIcon/SearchIcon'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

const Navbar: React.FC = () => {
    return (
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
    )
}

export default Navbar
