import FormModel from "@/components/FormModel";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { announcementsData,role } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Announcement = {
  id: number;
  title: string;
  class: string;
  date: string;
 
};

const columns = [
  {
    header: "Title",
    accessor: "title",
  },
  {
    header: "Class",
    accessor: "class",
  },
  {
    header: "Date",
    accessor: "date",
    className: "hidden md:table-cell",
  },
 
 
  {
    header: "Actions",
    accessor: "action",
  },
];

const renderRow = (item: Announcement) => (
  <tr
    key={item.id}
    className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-purple-100"
  >
    {/* Title */}
    <td className="flex items-center gap-4 p-4">{item.title}</td>

    {/* Class */}
    <td>{item.class}</td>

    {/* Date */}
    <td className="hidden md:table-cell">{item.date}</td>
    {/* Start Time */}
    
    

    {/* Actions */}
    <td>
      <div className="flex items-center gap-2">
        <Link
          href={`/list/teachers/${item.id}`}
          className="text-blue-500 text-sm font-medium"
        >
          <button className="w-7 h-7 flex items-center justify-center rounded-full bg-sky-300">
            <Image src="/edit.png" alt="Edit" width={16} height={16} />
          </button>
        </Link>

        {role === "admin" && (
           <FormModel table="announcement" type="delete" id={item.id}/>
        )}
      </div>
    </td>
  </tr>
);

const AnnouncementListpage = () => {
  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Announcements</h1>
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
      <Table columns={columns} renderRow={renderRow} data={announcementsData} />
      {/* Paginations */}
      <Pagination />
    </div>
  );
};

export default AnnouncementListpage;
