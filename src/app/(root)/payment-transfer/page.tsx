import HeaderBox from '@/components/HeaderBox'
import PaymentTransferForm from '@/components/PaymentTransferForm'
import React from 'react'

const Transfer = async () => {
    // const loggedIn = await getLoggedInUser();
    // const accounts = await getAccounts({
    //     userId: loggedIn.$id
    // })

    // if (!accounts) return;

    // const accountsData = accounts?.data;
    const accountsData: Account[] = [
        {
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
        },
        {
            id: "0987654321",
            availableBalance: 2500.00,
            currentBalance: 3000.00,
            officialName: "Jane Doe's Savings Account",
            mask: "4321",
            institutionId: "bank456",
            name: "Savings Account",
            type: "depository",
            subtype: "savings",
            appwriteItemId: "appwrite456",
            shareableId: "shareable456",
        },
        {
            id: "1122334455",
            availableBalance: 500.50,
            currentBalance: 800.75,
            officialName: "John Doe's Credit Card",
            mask: "4455",
            institutionId: "bank789",
            name: "Credit Card",
            type: "credit",
            subtype: "credit card",
            appwriteItemId: "appwrite789",
            shareableId: "shareable789",
        },
    ];


    return (
        <section className="payment-transfer">
            <HeaderBox
                title="Payment Transfer"
                subtext="Please provide any specific details or notes related to the payment transfer"
            />

            <section className="size-full pt-5">
                <PaymentTransferForm accounts={accountsData} />
            </section>
        </section>
    )
}

export default Transfer