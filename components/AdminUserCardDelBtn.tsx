// "use client";

// import { FullUserType } from "@/types";
// import { Button } from "./ui/button";
// import { AiFillDelete } from "react-icons/ai";
// import { DeleteUser } from "@/actions/user";
// import toast from "react-hot-toast";

// const handleDelete = async (user: FullUserType) => {
//   await DeleteUser(user.id)
//     .then(() => toast.success("User Deleted"))
//     .catch((error: any) => console.log(error));
// };

// export const DelButton = async ({ user }: { user: FullUserType }) => {
//   return (
//     <Button
//       onClick={() => handleDelete(user)}
//       className="ml-auto p-2 bg-background hover:bg-background group"
//       variant={"destructive"}
//     >
//       <AiFillDelete
//         className={"w-6 h-6 fill-red-500 group-hover:fill-red-500/80"}
//       />
//     </Button>
//   );
// };
