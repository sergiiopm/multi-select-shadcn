import MultiSelect from "@/components/multiselect";
import MultiSelectDialog from "../components/multiselect-dialog";
import Github from "@/components/github-icon";

export default function Home() {
  const items = [
    { name: "John Doe", email: "john@doe.com" },
    { name: "Jane Doe", email: "jane@doe.com" },
    { name: "Bob Smith", email: "bob@smith.com" },
    { name: "Alice Johnson", email: "alice@johnson.com" },
    { name: "Charlie Brown", email: "charlie@brown.com" },
    { name: "Dave Thomas", email: "dave@thomas.com" },
    { name: "Eve Brown", email: "eve@brown.com" },
    { name: "Frank Williams", email: "frank@williams.com" },
    { name: "Grace Jones", email: "grace@jones.com" },
    { name: "Heidi Lee", email: "heidi@lee.com" },
    { name: "Ivan Jackson", email: "ivan@jackson.com" },
    { name: "Jane Smith", email: "jane@smith.com" },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 text-center px-5">
      <h1 className="text-2xl font-semibold mb-5 text-balance ">
        Multi select Component shadcn Demo
      </h1>

      <MultiSelectDialog
        items={items}
        title="Invite friends"
        description="Select friends to invite"
        emptyMessage="No friends found"
        maxVisibleItems={3}
      >
        Open multi select dialog
      </MultiSelectDialog>

      <MultiSelect items={items} className="max-w-full w-[350px] mt-5" />

      <div className="pt-12">
        <p className="text-balance">
          In development. Your contributions are welcome on
          <a
            href="https://github.com/sergiiopm/multi-select-shadcn"
            target="_blank"
            className="inline-block ml-2 relative top-0.5"
          >
            <Github className="size-5" />
          </a>
        </p>
      </div>
    </div>
  );
}
