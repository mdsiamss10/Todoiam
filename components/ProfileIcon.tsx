import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
import Image from "next/image";
import LogoutButton from "./LogoutButton";
async function ProfileIcon() {
  const session = await getServerSession(authOptions);
  const optional_image =
    "https://cdn-icons-png.flaticon.com/512/3237/3237472.png";
  return (
    <div className="dropdown dropdown-bottom dropdown-right">
      <label tabIndex={0}>
        <Image
          src={session?.user?.image ?? optional_image}
          alt={`${session?.user?.name}'s Image`}
          className="w-14 h-14 rounded-full cursor-pointer"
          width={1000}
          height={1000}
        />
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <LogoutButton />
        </li>
      </ul>
    </div>
  );
}

export default ProfileIcon;
