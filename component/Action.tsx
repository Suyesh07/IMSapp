import React from 'react'
import { RiEdit2Fill } from "react-icons/ri";
import { MdDeleteForever } from "react-icons/md";
import { useRouter } from "next/navigation";

const Action = () => {
    const router = useRouter();
  return (
    <div>
      <td className="px-6 flex flex-row gap-3 text-lg items-center mt-4">
        <RiEdit2Fill
          onClick={() => router.push("/customer/add")}
          className="border-black"
        />
        <MdDeleteForever className="border-black" />
      </td>
    </div>
  );
}

export default Action
