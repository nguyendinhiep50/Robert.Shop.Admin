import { Button } from '@/components/ui/button';
import React from 'react';

interface ModalProps {
    title: string;
    children: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ title, children, isOpen, onClose }) => {

    const handleCancel = async () => {
        console.log("kkk")
        onClose();
    };

    return (
        <div
            id="authentication-modal"
            aria-hidden="true"
            className="fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50"
        >
            <div className="relative p-4 w-full max-w-md">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <div className="flex items-center justify-between p-4 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
                        <Button
                            type="button"
                            onClick={() => { handleCancel() }}
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            X
                        </Button>
                    </div>
                    <div className="p-4 md:p-5">{children}</div>
                </div>
            </div>
        </div>

    );
};
