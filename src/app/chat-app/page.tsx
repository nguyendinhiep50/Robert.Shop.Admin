import { users, MessageUsers, InfoChatUsers } from '@/app/chat-app/ChatAppData';

const ChatApp = () => {
    return (
        <div className="relative overflow-hidden bg-transparent shadow-[-4px_-4px_15px_rgba(0,0,0,0.8)] sm:rounded-lg px-6 sm:pl-2 h-screen">
            <div className="flex h-full">
                <div className="w-1/4 bg-none border-r border-gray-300">
                    <header className="p-4 border-b border-gray-300 flex justify-between items-center text-white">
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
                    </header>

                    <div className="custom-scrollbar overflow-y-auto h-[calc(100vh-2rem)] p-3 mb-2">
                        {MessageUsers.map(Item => (
                            <div key={Item.id} className="flex items-center mb-4 cursor-pointer hover:bg-gray-700 p-2 rounded-md">
                                <div className="w-12 h-12 bg-gray-300 rounded-full mr-3">
                                    <img src={Item.imgSrc} alt="Item Avatar" className="w-12 h-12 rounded-full" />
                                </div>
                                <div className="flex-1">
                                    <h2 className="text-lg font-semibold">{Item.name}</h2>
                                    <p className="text-gray-600">{Item.message}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex-1 flex flex-col">
                    <header className="p-4 text-gray-200">
                        <h1 className="text-2xl font-semibold">Alice</h1>
                    </header>

                    <div className="custom-scrollbar flex-1 overflow-y-auto p-4 h-[calc(100vh-16rem)]">
                        {InfoChatUsers.map((message, index) => (
                            <div key={index} className={`flex ${message.isUser ? 'justify-end' : ''} mb-4 cursor-pointer`}>
                                {!message.isUser && (
                                    <div className="w-9 h-9 rounded-full flex items-center justify-center mr-2">
                                        <img src={message.avatar} alt="User Avatar" className="w-8 h-8 rounded-full" />
                                    </div>
                                )}
                                <div className={`flex max-w-96 ${message.isUser ? 'bg-indigo-500 text-white' : 'text-gray-200'} rounded-lg p-3 gap-3`}>
                                    <p>{message.text}</p>
                                </div>
                                {message.isUser && (
                                    <div className="w-9 h-9 rounded-full flex items-center justify-center ml-2">
                                        <img src={message.avatar} alt="My Avatar" className="w-8 h-8 rounded-full" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <footer className="border-t border-gray-300 p-4">
                        <div className="flex items-center">
                            <input type="text" placeholder="Type a message..." className="w-full p-2 rounded-md border border-gray-400 focus:outline-none focus:border-blue-500" />
                            <button className="bg-indigo-500 text-white px-4 py-2 rounded-md ml-2">Send</button>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    );
}

export default ChatApp;
