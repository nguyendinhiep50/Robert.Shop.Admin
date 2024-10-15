'use client'

import Sidebar from "@/components/sidebar/Sidebar";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = {
    $id: "1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p",
    email: "john.doe@example.com",
    userId: "6b7c8d9e-0f1g-2h3i-4j5k-6l7m8n9o0p1q",
    dwollaCustomerUrl: "https://example.com",
    dwollaCustomerId: "abc1234567",
    firstName: "John",
    lastName: "Doe",
    name: "John Doe",
    address1: "123 Main Street",
    city: "New York",
    state: "New York",
    postalCode: "10001",
    dateOfBirth: "1990-05-14",
    ssn: "123456789"
  };

  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn} />

      <div className="flex w-full h-auto flex-col mt-12 sm:mt-14 pr-4">
        {children}
      </div>
    </main>
  );
}
