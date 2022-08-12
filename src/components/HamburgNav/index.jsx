import React, { useState } from "react";
import MenuItem from "./MenuItem";
import {
  FaHome,
  RiErrorWarningFill,
  IoIosSwap,
  RiCoinLine,
  GiTwoCoins,
  IoChatboxEllipsesOutline,
  GoMail,
  FaDonate,
  GiLion,
  RiMoneyDollarCircleLine,
} from 'react-icons/all'

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menu = [
    {
      label: 'Home',
      path: '/',
      icon: <FaHome className="inline-block" style={{ width: '32px', height: '32px' }} />,
      parent: false,
      child: [],
    },
    {
      label: 'About',
      path: '/about',
      icon: <RiErrorWarningFill className="inline-block" style={{ width: '32px', height: '32px' }} />,
      parent: false,
      child: [],
    },
    {
      label: 'Trade',
      path: '#',
      icon: <IoIosSwap className="inline-block" style={{ width: '32px', height: '32px' }} />,
      parent: true,
      child: [
        {
          path: 'https://swap.rasta.finance/',
          label: 'RastaSwap ★',
        },
        {
          path: 'https://exchange.rasta.finance',
          label: 'Old RastaDex (RLP)',
        },
      ],
    },
    {
      label: 'Zion Launchpad',
      path: '#',
      icon: <GiLion className="inline-block" style={{ width: '32px', height: '32px' }} />,
      parent: true,
      child: [
        {
          path: 'https://zionlp.com/launchpad-artists',
          label: 'Launchpad Artists',
          blank: true,
        },
        {
          path: 'https://zionlp.com',
          label: 'Launchpad NFTs',
        },
      ],
    },
    {
      label: 'NFT Staking',
      path: '#',
      icon: <FaDonate className="inline-block" style={{ width: '32px', height: '28px' }} />,
      parent: true,
      child: [
        {
          path: '/stakenft',
          label: 'RastaDividendNFT',
        },
        {
          path: '/streetpunksnft',
          label: 'Streetpunk NFT',
        },
      ],
    },
    // {
    //  label: 'Rasino',
    //  sublabel:'(coming soon)',
    //  plusLabel: '(Coming Soon)',
    //  path: '#',
    //  icon: <RiMoneyDollarCircleLine className="inline-block" style={{ width: '32px', height: '32px' }} />,
    //  parent: false,
    //  child: [],
    // },
    {
      label: 'Stake Liquidity',
      path: '/liquidity',
      icon: <RiCoinLine className="inline-block" style={{ width: '32px', height: '32px' }} />,
      parent: false,
      child: [],
    },
    {
      label: 'Stake Tokens',
      path: '/pools',
      icon: <GiTwoCoins className="inline-block" style={{ width: '32px', height: '32px' }} />,
      parent: false,
      child: [],
    },
    {
      label: 'StakeRasta',
      path: '/stake',
      icon: <RiMoneyDollarCircleLine className="inline-block" style={{ width: '32px', height: '32px' }} />,
      parent: false,
      child: [],
    },
    // {
    //  label: 'TOP LAUNCH PAD',
    //  sublabel:'(coming soon)',
    //  path: '#',
    //  icon: <AiFillStar className="inline-block" style={{ width: '32px', height: '32px' }} />,
    //  parent: false,
    //  child: [],
    // },
    // {
    //   label: 'TECHRATE AUDIT',
    //   path: 'https://rasta.finance/files/RastaAudit.pdf',
    //  icon: <FaBook className="inline-block" style={{ width: '32px', height: '32px' }} />,
    //  parent: false,
    //  child: [],
    // },
    {
      label: 'View More...',
      path: '#',
      icon: <IoChatboxEllipsesOutline className="inline-block" style={{ width: '32px', height: '32px' }} />,
      parent: true,
      child: [
        {
          path: 'https://rasta.finance/files/RastaAudit.pdf',
          label: 'Audit',
        },
        {
          path: 'https://coinmarketcap.com/currencies/rasta-finance/',
          label: 'CoinMarketCap',
        },
        {
          path: 'https://docs.rasta.finance',
          label: 'Whitepaper',
        },
        // {
        //   path: 'https://rastafinance.medium.com',
        //   label: 'Medium',
        // },
        {
          path: 'https://dappradar.com/binance-smart-chain/defi/rasta-finance',
          label: 'Dapp Radar',
        },
        {
          path: 'https://dex.guru/token/0xe3e8cc42da487d1116d26687856e9fb684817c52-bsc',
          label: 'Chart',
        },
      ],
    },
    {
      label: 'Contact',
      path: '/contact',
      icon: <GoMail className="inline-block" style={{ width: '32px', height: '32px' }} />,
      parent: false,
      child: [],
    },
  ]
  return (
    <div className="navigation ml-16 ">
      <button
        className="hamburg-wrapper cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="25"
            height="25"
            viewBox="0 0 50 50"
          >
            <path d="M 5 9 L 5 11 L 45 11 L 45 9 L 5 9 z M 5 24 L 5 26 L 45 26 L 45 24 L 5 24 z M 5 39 L 5 41 L 45 41 L 45 39 L 5 39 z"></path>
          </svg>
        </div>
      </button>
      {
        <div
          className={`effects fixed h-full left-0 top-0 bg-black w-full min-h-screen z-50 text-white overflow-hidden ${
            isOpen ? "active" : false
          }`}
        >
          <div className="flex-col flex">
            <div className="container mx-auto py-16">
              <div className="exit">
                <button
                  className="close text-white text-2xl"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  X
                </button>
              </div>
              <ul className="menu">
              {menu.map((item, index) => {
               return <MenuItem menu={item} showSidebar={setIsOpen} key={index}/>
              })}
              </ul>
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default Index;
