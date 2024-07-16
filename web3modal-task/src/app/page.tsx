'use client'
import './globals.css'
import { useAccount } from 'wagmi'
import ConnectButton from "@/components/ConnectButton";


export default function Home() {
  const { address, isConnecting, isDisconnected } = useAccount()
  
  return (
  
    <main className='flex flex-col items-center justify-center min-h-screen py-1'>
      <div className="divStyle">
      <ConnectButton />
    </div>
    <div >
        {
          (isConnecting || isDisconnected) ?
          <div className='text-red-600'>Not connected yet, please click the ConnectButton first</div>:
          <div>Connected Wallet Address：{address}</div>
        }
      </div>
    </main>
  );
}