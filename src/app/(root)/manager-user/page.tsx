'use client'
import { useState } from 'react';
import { users } from '@/app/(root)/manager-user/ManagerUserData';
import { Pagination } from '@/components/Pagination';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Modal } from '@/components/common/modal';
import { Button } from '@/components/ui/button';
import { notificationController } from '@/controllers/notificationController';

const UserTable = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const handleCloseModal = async () => {
        notificationController.success({ message: ('common.success') });
        setIsModalOpen(false);
    };


    return (
        <div className="relative overflow-x-auto bg-transparent shadow-[-4px_-4px_15px_rgba(0,0,0,0.8)] sm:rounded-lg px-8 sm:px-2">
            <div className="flex items-center justify-between flex-col md:flex-row space-y-4 md:space-y-0 pb-4 bg-[#1b1b1b] p-2">
                <div className="relative">
                    <button onClick={() => setDropdownOpen((prev) => !prev)} className="text-gray-500">
                        Action
                    </button>
                    {dropdownOpen && (
                        <div className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                            <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Reward</a>
                                </li>
                            </ul>
                            <div className="py-1">
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete User</a>
                            </div>
                        </div>
                    )}
                </div>

                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                            className="w-4 h-4 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 19l-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            />
                        </svg>
                    </div>
                    <input
                        type="text"
                        id="table-search-users"
                        className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search for users"
                    />
                </div>
            </div>
            <div className="overflow-x-auto">
                <Table>
                    <TableHeader className="bg-[#1b1b1b]">
                        <TableRow>
                            <TableHead className="px-2">Name</TableHead>
                            <TableHead className="px-2">Position</TableHead>
                            <TableHead className="px-2">Status</TableHead>
                            <TableHead className="px-2 max-md:hidden">Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {users.map((user) => (
                            <TableRow key={user.id} className={`$bg-[#FFFBFA] !over:bg-none !border-b-DEFAULT`}>
                                <TableCell className="min-w-32 pl-2 pr-10">
                                    {user.name}
                                </TableCell>
                                <TableCell className="pl-2 pr-10 capitalize min-w-24">
                                    <div className="flex items-center">
                                        <img className="w-10 h-10 rounded-full" src={user.image} alt={user.name} />
                                        <div className="ps-3">
                                            <div className="text-base font-semibold">{user.name}</div>
                                            <div className="font-normal text-gray-500">{user.email}</div>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell className="pl-2 pr-10 max-md:hidden">
                                    {user.status}
                                </TableCell>
                                <TableCell className="pl-2 pr-10 max-md:hidden">
                                    <Button className="font-medium text-white hover:text-blue-500 hover:underline p-2"
                                        onClick={() => { setIsModalOpen(true) }}
                                    >
                                        Edit user
                                    </Button>
                                    <Button className="font-medium text-white hover:text-blue-500 hover:underline p-2"
                                        onClick={() => { setIsModalOpen(true) }}
                                    >
                                        Detail user
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            {isModalOpen && (
                <Modal
                    children="Title"
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                    title="Title"
                />
            )}
            <Pagination
                page={10}
                totalPages={100}
            />
        </div >
    );
};

export default UserTable;