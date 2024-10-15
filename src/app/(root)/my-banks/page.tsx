import BankCard from '@/components/BankCard';
import HeaderBox from '@/components/HeaderBox'
import React from 'react'

const MyBanks = async () => {
    const accountData: Account = {
        id: "1234567890",
        availableBalance: 1500.75,
        currentBalance: 2000.50,
        officialName: "John Doe's Checking Account",
        mask: "6789",
        institutionId: "bank123",
        name: "Checking Account",
        type: "depository",
        subtype: "checking",
        appwriteItemId: "appwrite123",
        shareableId: "shareable123",
    };
    return (
        <section className='flex'>
            <div className="my-banks">
                <HeaderBox
                    title="My Bank Accounts"
                    subtext="Effortlessly manage your banking activites."
                />

                <div className="space-y-4">
                    <h2 className="header-2">
                        Your cards
                    </h2>
                    <div className="flex flex-wrap gap-6">
                        {/* {accounts && accounts.data.map((a: Account) => ( */}
                        <BankCard
                            key={accountData.id}
                            account={accountData}
                            userName={"logg"}
                        />
                        {/* ))} */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MyBanks