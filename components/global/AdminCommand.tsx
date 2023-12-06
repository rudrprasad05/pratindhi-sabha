import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import Link from "next/link";
import react from "react";

interface props {}

const AdminCommand: React.FC<props> = ({}) => {
  return (
    <>
      <Command className="h-full overflow-hidden">
        <CommandInput placeholder="Search..." />
        <CommandList className="h-full">
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <Link className="w-full" href={"/admin"}>
                Dashboard
              </Link>
            </CommandItem>
            <CommandItem>
              <Link className="w-full" href={"/admin/post"}>
                Posts
              </Link>
            </CommandItem>
            <CommandItem>
              <Link className="w-full" href={"/admin/users"}>
                Admin Users
              </Link>
            </CommandItem>
            <CommandItem>
              <Link className="w-full" href={"/admin/categories"}>
                Categories
              </Link>
            </CommandItem>
            <CommandItem>
              <Link className="w-full" href={"/admin/comments"}>
                Comments
              </Link>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem>Profile</CommandItem>
            <CommandItem>Create Admin</CommandItem>
            <CommandItem>Settings</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </>
  );
};

export default AdminCommand;
