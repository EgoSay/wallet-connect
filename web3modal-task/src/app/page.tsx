'use client'
import './globals.css'
import { useAccount } from 'wagmi'
import ConnectButton from "@/components/ConnectButton";


export default function Home() {
  const account = useAccount();
  
  
  return (
  
    <main className='flex flex-col items-center justify-center min-h-screen py-1'>
      <div className="divStyle">
      <ConnectButton />
    </div>
    <div >
        {
          account?.address ?
          <div>Connected Address：{account.address}</div>:
          <div className='text-red-600'>Not connected yet, please click the button above to connect your wallet.</div>
        }
      </div>
    </main>
  );
}