import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { lessonsData, role,} from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Lesson = {
  id: number;
  subject: string;
  class: string;
  teacher: string;
  
  
};

const columns = [
  {
    header: "Subject",
    accessor: "subject",
  },
  {
    header: "Class",
    accessor: "class",
    
  },
  {
    header: "Teacher",
    accessor: "teacher",
    className: "hidden md:table-cell",
  },
  
 
  {
    header: "Actions",
    accessor: "action",
  },
];

const renderRow = (item: Lesson) => (
  <tr
    key={item.id}
    className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-purple-100"
  >
    {/* Subject Name */}
    <td className="flex items-center gap-4 p-4">
      {item.subject}
    </td>

    {/* Class */}
    <td>
      {item.class}
    </td>

    {/* Teacher */}
    <td className="hidden md:table-cell">
      {item.teacher}
    </td>

   

    {/* Actions */}
    <td>
      <div className="flex items-center gap-2">
        <Link
          href={`/list/teachers/${item.id}`}
          className="text-blue-500 text-sm font-medium"
        >
          <button className="w-7 h-7 flex items-center justify-center rounded-full bg-sky-300">
            <Image src="/view.png" alt="View" width={16} height={16} />
          </button>
        </Link>

        {role === "admin" && (
          <button className="w-7 h-7 flex items-center justify-center rounded-full bg-purple-300">
            <Image src="/edit.png" alt="Edit" width={16} height={16} />
          </button>
        )}
      </div>
    </td>
  </tr>
); 

const LessonListpage = () => {
  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Lessons</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow-300">
              <Image src="/filter.png" alt="Filter" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow-300">
              <Image src="/sort.png" alt="Sort" width={14} height={14} />
            </button>
            {role === "admin" && (
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow-300">
                <Image src="/plus.png" alt="plus" width={14} height={14} />
              </button>
            )}
          </div>
        </div>
      </div>
      {/* List */}
      <Table columns={columns} renderRow={renderRow} data={lessonsData}/>
      {/* Paginations */}
      <Pagination />
    </div>
  );
};

export default LessonListpage;
