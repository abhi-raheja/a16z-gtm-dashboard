import { Company } from '../types/company';
import { manualCompanyData } from './companies.manual';

// Original scraped data
const scrapedCompanies: Company[] = [
  {
    "id": "1",
    "name": "Adim",
    "description": "Part of a16z's crypto portfolio.",
    "website": "https://adimverse.com/",
    "category": "Infrastructure",
    "twitter": {
      "handle": null,
      "url": null,
      "bio": null
    },
    "marketingCampaign": {
      "title": "Latest from Adim",
      "description": "Recent developments and updates in blockchain technology.",
      "date": "2024-12-01",
      "pinnedTweetUrl": null
    }
  },
  {
    "id": "2",
    "name": "Alchemy",
    "description": "Your complete developer platform to build rollups, apps & everything in between. Start shipping onchain.",
    "website": "https://www.alchemy.com/",
    "category": "Infrastructure",
    "twitter": {
      "handle": "Alchemy",
      "url": "https://x.com/Alchemy",
      "bio": "Your complete developer platform to build rollups, apps & everything in between. Start shipping onchain"
    },
    "marketingCampaign": {
      "title": "Latest from Alchemy",
      "description": "Recent developments and updates in blockchain technology.",
      "date": "2024-12-01",
      "pinnedTweetUrl": "https://x.com/Alchemy/status/1880255852944232949"
    }
  },
  {
    "id": "3",
    "name": "Aleo",
    "description": "Aleo is a Layer-1 blockchain that's zero-knowledge by design. Join us and build an actually secure internet \u2192",
    "website": "https://www.aleo.org/",
    "category": "Infrastructure",
    "twitter": {
      "handle": "aleohq",
      "url": "https://x.com/aleohq",
      "bio": "Aleo is a Layer-1 blockchain that's zero-knowledge by design. Join us and build an actually secure internet \u2192"
    },
    "marketingCampaign": {
      "title": "Latest from Aleo",
      "description": "Recent developments and updates in blockchain technology.",
      "date": "2024-12-01",
      "pinnedTweetUrl": "https://x.com/aleohq/status/1838276629791223970"
    }
  },
  {
    "id": "4",
    "name": "AminoChain",
    "description": "Building Trust in Science and Healthcare | a16z CSX",
    "website": "https://aminochain.io/",
    "category": "Infrastructure",
    "twitter": {
      "handle": "Amino_Chain",
      "url": "https://x.com/Amino_Chain",
      "bio": "Building Trust in Science and Healthcare | a16z CSX"
    },
    "marketingCampaign": {
      "title": "Latest from AminoChain",
      "description": "Recent developments and updates in blockchain technology.",
      "date": "2024-12-01",
      "pinnedTweetUrl": "https://x.com/Amino_Chain/status/1838930217890394440"
    }
  },
  {
    "id": "5",
    "name": "Anchorage Digital",
    "description": "The trusted crypto platform for institutions. CEO . Disclosures:",
    "website": "https://www.anchorage.com/",
    "category": "Infrastructure",
    "twitter": {
      "handle": "Anchorage",
      "url": "https://x.com/Anchorage",
      "bio": "The trusted crypto platform for institutions. CEO . Disclosures:"
    },
    "marketingCampaign": {
      "title": "Latest from Anchorage Digital",
      "description": "Recent developments and updates in blockchain technology.",
      "date": "2024-12-01",
      "pinnedTweetUrl": "https://x.com/Anchorage/status/1868657585722892674"
    }
  },
  {
    "id": "6",
    "name": "Angle",
    "description": "Part of a16z's crypto portfolio.",
    "website": "https://www.angle.money/",
    "category": "Infrastructure",
    "twitter": {
      "handle": null,
      "url": null,
      "bio": null
    },
    "marketingCampaign": {
      "title": "Latest from Angle",
      "description": "Recent developments and updates in blockchain technology.",
      "date": "2024-12-01",
      "pinnedTweetUrl": null
    }
  },
  {
    "id": "7",
    "name": "Aptos",
    "description": "Accelerating the future of Web3 on Aptos \u2014 committed to bringing decentralization to the masses. (For information on Aptos network, check out )",
    "website": "https://aptoslabs.com/",
    "category": "Infrastructure",
    "twitter": {
      "handle": "aptoslabs",
      "url": "https://x.com/aptoslabs",
      "bio": "Accelerating the future of Web3 on Aptos \u2014 committed to bringing decentralization to the masses. (For information on Aptos network, check out )"
    },
    "marketingCampaign": {
      "title": "Latest from Aptos",
      "description": "Recent developments and updates in blockchain technology.",
      "date": "2024-12-01",
      "pinnedTweetUrl": "https://x.com/aptoslabs/status/1879561343810130014"
    }
  },
  {
    "id": "8",
    "name": "Arpeggi",
    "description": "Part of a16z's crypto portfolio.",
    "website": "https://arpeggi.io/",
    "category": "Infrastructure",
    "twitter": {
      "handle": null,
      "url": null,
      "bio": null
    },
    "marketingCampaign": {
      "title": "Latest from Arpeggi",
      "description": "Recent developments and updates in blockchain technology.",
      "date": "2024-12-01",
      "pinnedTweetUrl": null
    }
  },
  {
    "id": "9",
    "name": "Arweave",
    "description": "Part of a16z's crypto portfolio.",
    "website": "https://www.arweave.org/",
    "category": "Infrastructure",
    "twitter": {
      "handle": null,
      "url": null,
      "bio": null
    },
    "marketingCampaign": {
      "title": "Latest from Arweave",
      "description": "Recent developments and updates in blockchain technology.",
      "date": "2024-12-01",
      "pinnedTweetUrl": null
    }
  },
  {
    "id": "10",
    "name": "Autograph",
    "description": "Part of a16z's crypto portfolio.",
    "website": "https://autograph.io/",
    "category": "Infrastructure",
    "twitter": {
      "handle": null,
      "url": null,
      "bio": null
    },
    "marketingCampaign": {
      "title": "Latest from Autograph",
      "description": "Recent developments and updates in blockchain technology.",
      "date": "2024-12-01",
      "pinnedTweetUrl": null
    }
  },
  {
    "id": "11",
    "name": "Avalanche",
    "description": "Avalanche is a high-performance blockchain platform designed for builders who need to scale. RT \u2260 endorsements.",
    "website": "https://www.avax.network/",
    "category": "Infrastructure",
    "twitter": {
      "handle": "avax",
      "url": "https://x.com/avax",
      "bio": "Avalanche is a high-performance blockchain platform designed for builders who need to scale. RT \u2260 endorsements."
    },
    "marketingCampaign": {
      "title": "Latest from Avalanche",
      "description": "Recent developments and updates in blockchain technology.",
      "date": "2024-12-01",
      "pinnedTweetUrl": "https://x.com/avax/status/1868710879535214878"
    }
  },
  {
    "id": "12",
    "name": "Azra Games",
    "description": "Backed with $68m in financing by , , , | Building and the Azraverse.",
    "website": "https://www.azragames.com/",
    "category": "Gaming",
    "twitter": {
      "handle": "AzraGames",
      "url": "https://x.com/AzraGames",
      "bio": "Backed with $68m in financing by , , , | Building and the Azraverse."
    },
    "marketingCampaign": {
      "title": "Latest from Azra Games",
      "description": "Recent developments and updates in blockchain technology.",
      "date": "2024-12-01",
      "pinnedTweetUrl": "https://x.com/AzraGames/status/1846207939776073744"
    }
  },
  {
    "id": "13",
    "name": "Aztec",
    "description": "Building the first privacy network on Ethereum. Designed for secure and private transactions, powered by .",
    "website": "https://aztec.network/",
    "category": "Infrastructure",
    "twitter": {
      "handle": "aztecnetwork",
      "url": "https://x.com/aztecnetwork",
      "bio": "Building the first privacy network on Ethereum. Designed for secure and private transactions, powered by ."
    },
    "marketingCampaign": {
      "title": "Latest from Aztec",
      "description": "Recent developments and updates in blockchain technology.",
      "date": "2024-12-01",
      "pinnedTweetUrl": "https://x.com/aztecnetwork/status/1823433767471681931"
    }
  },
  {
    "id": "14",
    "name": "Bastion",
    "description": "Wallet infrastructure with built-in regulatory compliance for payments, central exchanges, and trading platforms",
    "website": "https://www.bastion.com/",
    "category": "Infrastructure",
    "twitter": {
      "handle": "bastionplatform",
      "url": "https://x.com/bastionplatform",
      "bio": "Wallet infrastructure with built-in regulatory compliance for payments, central exchanges, and trading platforms"
    },
    "marketingCampaign": {
      "title": "Latest from Bastion",
      "description": "Recent developments and updates in blockchain technology.",
      "date": "2024-12-01",
      "pinnedTweetUrl": "https://x.com/bastionplatform/status/1703801858534539689"
    }
  },
  {
    "id": "15",
    "name": "Battlebound",
    "description": "Redefining the Creature Collecting genre with Sign up to playtest \ud83d\udc47",
    "website": "https://battlebound.io/",
    "category": "Infrastructure",
    "twitter": {
      "handle": "battlebound",
      "url": "https://x.com/battlebound",
      "bio": "Redefining the Creature Collecting genre with Sign up to playtest \ud83d\udc47"
    },
    "marketingCampaign": {
      "title": "Latest from Battlebound",
      "description": "Recent developments and updates in blockchain technology.",
      "date": "2024-12-01",
      "pinnedTweetUrl": "https://x.com/battlebound/status/1846214425440592233"
    }
  },
  {
    "id": "16",
    "name": "Bitski",
    "description": "Part of a16z's crypto portfolio.",
    "website": "https://www.bitski.com/",
    "category": "Infrastructure",
    "twitter": {
      "handle": null,
      "url": null,
      "bio": null
    },
    "marketingCampaign": {
      "title": "Latest from Bitski",
      "description": "Recent developments and updates in blockchain technology.",
      "date": "2024-12-01",
      "pinnedTweetUrl": null
    }
  },
  {
    "id": "17",
    "name": "Blackbird",
    "description": "Part of a16z's crypto portfolio.",
    "website": "https://www.blackbird.xyz/",
    "category": "Infrastructure",
    "twitter": {
      "handle": null,
      "url": null,
      "bio": null
    },
    "marketingCampaign": {
      "title": "Latest from Blackbird",
      "description": "Recent developments and updates in blockchain technology.",
      "date": "2024-12-01",
      "pinnedTweetUrl": null
    }
  },
  {
    "id": "18",
    "name": "CCP Games",
    "description": "We create virtual worlds",
    "website": "https://www.ccpgames.com/",
    "category": "Gaming",
    "twitter": {
      "handle": "CCPGames",
      "url": "https://x.com/CCPGames",
      "bio": "We create virtual worlds"
    },
    "marketingCampaign": {
      "title": "Latest from CCP Games",
      "description": "Recent developments and updates in blockchain technology.",
      "date": "2024-12-01",
      "pinnedTweetUrl": "https://x.com/CCPGames/status/1856366669402165596"
    }
  },
  {
    "id": "19",
    "name": "Celo",
    "description": "Mobile-first. EVM compatible. Carbon negative. Celo is a blockchain built for the real world. \ud83c\udf31",
    "website": "https://celo.org/",
    "category": "Infrastructure",
    "twitter": {
      "handle": "Celo",
      "url": "https://x.com/Celo",
      "bio": "Mobile-first. EVM compatible. Carbon negative. Celo is a blockchain built for the real world. \ud83c\udf31"
    },
    "marketingCampaign": {
      "title": "Latest from Celo",
      "description": "Recent developments and updates in blockchain technology.",
      "date": "2024-12-01",
      "pinnedTweetUrl": "https://x.com/Celo/status/1868666390510711087"
    }
  },
  {
    "id": "20",
    "name": "Co:Create",
    "description": "Connecting clients with the world's best tattoo artists.",
    "website": "https://www.usecocreate.io/",
    "category": "Infrastructure",
    "twitter": {
      "handle": "cocreateink",
      "url": "https://x.com/cocreateink",
      "bio": "Connecting clients with the world's best tattoo artists."
    },
    "marketingCampaign": {
      "title": "Latest from Co:Create",
      "description": "Recent developments and updates in blockchain technology.",
      "date": "2024-12-01",
      "pinnedTweetUrl": "https://x.com/cocreateink/status/1774142057218445607"
    }
  },
  {
    "id": "21",
    "name": "CoinSwitch Kuber",
    "description": "Join the CoinSwitch Cares program using the link in bio.",
    "website": "https://coinswitch.co/",
    "category": "Infrastructure",
    "twitter": {
      "handle": "CoinSwitch",
      "url": "https://x.com/CoinSwitch",
      "bio": "Join the CoinSwitch Cares program using the link in bio."
    },
    "marketingCampaign": {
      "title": "Latest from CoinSwitch Kuber",
      "description": "Recent developments and updates in blockchain technology.",
      "date": "2024-12-01",
      "pinnedTweetUrl": "https://x.com/CoinSwitch/status/1876492480931401823"
    }
  },
  {
    "id": "22",
    "name": "Compound",
    "description": "Part of a16z's crypto portfolio.",
    "website": "https://compound.finance/",
    "category": "DeFi",
    "twitter": {
      "handle": null,
      "url": null,
      "bio": null
    },
    "marketingCampaign": {
      "title": "Latest from Compound",
      "description": "Recent developments and updates in blockchain technology.",
      "date": "2024-12-01",
      "pinnedTweetUrl": null
    }
  },
  {
    "id": "23",
    "name": "Dapper Labs",
    "description": "We are the company \ud83d\ude3c The team behind",
    "website": "https://www.dapperlabs.com/",
    "category": "Infrastructure",
    "twitter": {
      "handle": "dapperlabs",
      "url": "https://x.com/dapperlabs",
      "bio": "We are the company \ud83d\ude3c The team behind"
    },
    "marketingCampaign": {
      "title": "Latest from Dapper Labs",
      "description": "Recent developments and updates in blockchain technology.",
      "date": "2024-12-01",
      "pinnedTweetUrl": "https://x.com/dapperlabs/status/1765113265510637835"
    }
  },
  {
    "id": "24",
    "name": "Daylight",
    "description": "Building a decentralized electric utility to bring cheap, sustainable, reliable power to all. Join us:",
    "website": "https://daylight.world/",
    "category": "Infrastructure",
    "twitter": {
      "handle": "daylightenergy_",
      "url": "https://x.com/daylightenergy_",
      "bio": "Building a decentralized electric utility to bring cheap, sustainable, reliable power to all. Join us:"
    },
    "marketingCampaign": {
      "title": "Latest from Daylight",
      "description": "Recent developments and updates in blockchain technology.",
      "date": "2024-12-01",
      "pinnedTweetUrl": null
    }
  },
  {
    "id": "25",
    "name": "DELV",
    "description": "Part of a16z's crypto portfolio.",
    "website": "https://www.delv.tech/",
    "category": "Infrastructure",
    "twitter": {
      "handle": null,
      "url": null,
      "bio": null
    },
    "marketingCampaign": {
      "title": "Latest from DELV",
      "description": "Recent developments and updates in blockchain technology.",
      "date": "2024-12-01",
      "pinnedTweetUrl": null
    }
  },
  {
    "id": "26",
    "name": "DeSo",
    "description": "The first & only censorship-resistant Layer-1 blockchain purpose-built to power storage-heavy apps and scale decentralized social networks for mass adoption.",
    "website": "https://www.deso.org/",
    "category": "Infrastructure",
    "twitter": {
      "handle": "desoprotocol",
      "url": "https://x.com/desoprotocol",
      "bio": "The first & only censorship-resistant Layer-1 blockchain purpose-built to power storage-heavy apps and scale decentralized social networks for mass adoption."
    },
    "marketingCampaign": {
      "title": "Latest from DeSo",
      "description": "Recent developments and updates in blockchain technology.",
      "date": "2024-12-01",
      "pinnedTweetUrl": null
    }
  },
  {
    "id": "27",
    "name": "Dfinity",
    "description": "Updates on all things Internet Computer | World Computer network. AI builds there. -",
    "website": "https://dfinity.org/",
    "category": "Infrastructure",
    "twitter": {
      "handle": "dfinity",
      "url": "https://x.com/dfinity",
      "bio": "Updates on all things Internet Computer | World Computer network. AI builds there. -"
    },
    "marketingCampaign": {
      "title": "Latest from Dfinity",
      "description": "Recent developments and updates in blockchain technology.",
      "date": "2024-12-01",
      "pinnedTweetUrl": "https://x.com/dfinity/status/1793396419530768541"
    }
  },
  {
    "id": "28",
    "name": "District",
    "description": "Part of a16z's crypto portfolio.",
    "website": "https://www.joindistrict.com/",
    "category": "Infrastructure",
    "twitter": {
      "handle": null,
      "url": null,
      "bio": null
    },
    "marketingCampaign": {
      "title": "Latest from District",
      "description": "Recent developments and updates in blockchain technology.",
      "date": "2024-12-01",
      "pinnedTweetUrl": null
    }
  },
  {
    "id": "29",
    "name": "dYdX",
    "description": "Co-founder & CEO at . Creating more economic freedom in the world. ENS: barmstrong.eth Co-founder",
    "website": "https://dydx.exchange/",
    "category": "DeFi",
    "twitter": {
      "handle": "brian_armstrong",
      "url": "https://x.com/brian_armstrong",
      "bio": "Co-founder & CEO at . Creating more economic freedom in the world. ENS: barmstrong.eth Co-founder"
    },
    "marketingCampaign": {
      "title": "Latest from dYdX",
      "description": "Recent developments and updates in blockchain technology.",
      "date": "2024-12-01",
      "pinnedTweetUrl": null
    }
  },
  {
    "id": "30",
    "name": "Dynamic",
    "description": "One SDK for every wallet interaction. Extensive multichain and third-party wallet support. Trusted by and thousands more.",
    "website": "https://www.dynamic.xyz/",
    "category": "Infrastructure",
    "twitter": {
      "handle": "dynamic_xyz",
      "url": "https://x.com/dynamic_xyz",
      "bio": "One SDK for every wallet interaction. Extensive multichain and third-party wallet support. Trusted by and thousands more."
    },
    "marketingCampaign": {
      "title": "Latest from Dynamic",
      "description": "Recent developments and updates in blockchain technology.",
      "date": "2024-12-01",
      "pinnedTweetUrl": "https://x.com/dynamic_xyz/status/1879914016451248583"
    }
  },
  {
    "id": "31",
    "name": "Eco",
    "description": "Part of a16z's crypto portfolio.",
    "website": "https://www.eco.com/",
    "category": "Infrastructure",
    "twitter": {
      "handle": "intent",
      "url": "https://x.com/intent",
      "bio": null
    },
    "marketingCampaign": {
      "title": "Latest from Eco",
      "description": "Recent developments and updates in blockchain technology.",
      "date": "2024-12-01",
      "pinnedTweetUrl": null
    }
  },
  {
    "id": "32",
    "name": "EigenLayer",
    "description": "Build open innovation \u221e play infinite sum games. for the EigenDA AVS & for all AVSs",
    "website": "https://www.eigenlayer.xyz/",
    "category": "Infrastructure",
    "twitter": {
      "handle": "eigenlayer",
      "url": "https://x.com/eigenlayer",
      "bio": "Build open innovation \u221e play infinite sum games. for the EigenDA AVS & for all AVSs"
    },
    "marketingCampaign": {
      "title": "Latest from EigenLayer",
      "description": "Recent developments and updates in blockchain technology.",
      "date": "2024-12-01",
      "pinnedTweetUrl": "https://x.com/eigenlayer/status/1870107078833869127"
    }
  },
  {
    "id": "33",
    "name": "Entropy",
    "description": "The Autonomous Agent Network",
    "website": "https://entropy.xyz/",
    "category": "Infrastructure",
    "twitter": {
      "handle": "entropydotxyz",
      "url": "https://x.com/entropydotxyz",
      "bio": "The Autonomous Agent Network"
    },
    "marketingCampaign": {
      "title": "Latest from Entropy",
      "description": "Recent developments and updates in blockchain technology.",
      "date": "2024-12-01",
      "pinnedTweetUrl": "https://x.com/entropydotxyz/status/1786063112870699161"
    }
  },
  {
    "id": "34",
    "name": "Espresso",
    "description": "Espresso fuels cross-chain composability, uniting Ethereum & beyond through a global confirmation layer \u2022 Mainnet live",
    "website": "https://www.espressosys.com/",
    "category": "Infrastructure",
    "twitter": {
      "handle": "EspressoSys",
      "url": "https://x.com/EspressoSys",
      "bio": "Espresso fuels cross-chain composability, uniting Ethereum & beyond through a global confirmation layer \u2022 Mainnet live"
    },
    "marketingCampaign": {
      "title": "Latest from Espresso",
      "description": "Recent developments and updates in blockchain technology.",
      "date": "2024-12-01",
      "pinnedTweetUrl": "https://x.com/EspressoSys/status/1855973751982309624"
    }
  },
  {
    "id": "35",
    "name": "Everyrealm",
    "description": "Innovative technology for the social gaming generation.",
    "website": "https://everyrealm.com/",
    "category": "Infrastructure",
    "twitter": {
      "handle": "everyrealm",
      "url": "https://x.com/everyrealm",
      "bio": "Innovative technology for the social gaming generation."
    },
    "marketingCampaign": {
      "title": "Latest from Everyrealm",
      "description": "Recent developments and updates in blockchain technology.",
      "date": "2024-12-01",
      "pinnedTweetUrl": null
    }
  },
  {
    "id": "36",
    "name": "Farcaster",
    "description": "Part of a16z's crypto portfolio.",
    "website": "https://www.farcaster.xyz/",
    "category": "Infrastructure",
    "twitter": {
      "handle": null,
      "url": null,
      "bio": null
    },
    "marketingCampaign": {
      "title": "Latest from Farcaster",
      "description": "Recent developments and updates in blockchain technology.",
      "date": "2024-12-01",
      "pinnedTweetUrl": null
    }
  },
  {
    "id": "37",
    "name": "Fei",
    "description": "Part of a16z's crypto portfolio.",
    "website": "https://fei.money/",
    "category": "Infrastructure",
    "twitter": {
      "handle": null,
      "url": null,
      "bio": null
    },
    "marketingCampaign": {
      "title": "Latest from Fei",
      "description": "Recent developments and updates in blockchain technology.",
      "date": "2024-12-01",
      "pinnedTweetUrl": null
    }
  },
  {
    "id": "38",
    "name": "FingerprintsDAO",
    "description": "The home of blockchain art.",
    "website": "https://fingerprintsdao.xyz/",
    "category": "DAO",
    "twitter": {
      "handle": "FingerprintsDAO",
      "url": "https://x.com/FingerprintsDAO",
      "bio": "The home of blockchain art."
    },
    "marketingCampaign": {
      "title": "Latest from FingerprintsDAO",
      "description": "Recent developments and updates in blockchain technology.",
      "date": "2024-12-01",
      "pinnedTweetUrl": null
    }
  },
  {
    "id": "39",
    "name": "Flow",
    "description": "Flow is a decentralized platform that anyone can access, everyone can trust, and no-one can censor or block. Flow is the future. \ud83c\udf0a",
    "website": "https://www.onflow.org/",
    "category": "Infrastructure",
    "twitter": {
      "handle": "flow_blockchain",
      "url": "https://x.com/flow_blockchain",
      "bio": "Flow is a decentralized platform that anyone can access, everyone can trust, and no-one can censor or block. Flow is the future. \ud83c\udf0a"
    },
    "marketingCampaign": {
      "title": "Latest from Flow",
      "description": "Recent developments and updates in blockchain technology.",
      "date": "2024-12-01",
      "pinnedTweetUrl": "https://x.com/flow_blockchain/status/1869072976597094609"
    }
  },
  {
    "id": "40",
    "name": "Flowcarbon",
    "description": "Financing the future of carbon projects: development, finance, credit sales + technology. Recognized by Time as an America\u2019s Top GreenTech Co. 2024.",
    "website": "https://www.flowcarbon.com/",
    "category": "Infrastructure",
    "twitter": {
      "handle": "weareflowcarbon",
      "url": "https://x.com/weareflowcarbon",
      "bio": "Financing the future of carbon projects: development, finance, credit sales + technology. Recognized by Time as an America\u2019s Top GreenTech Co. 2024."
    },
    "marketingCampaign": {
      "title": "Latest from Flowcarbon",
      "description": "Recent developments and updates in blockchain technology.",
      "date": "2024-12-01",
      "pinnedTweetUrl": "https://x.com/weareflowcarbon/status/1861140924799066584"
    }
  },
  {
    "id": "41",
    "name": "Forta",
    "description": "Stop hacks before they happen. Powered by the most advanced AI detection model, Forta Firewall integrates with protocols and chains to prevent +99% of hacks.",
    "website": "https://forta.org/",
    "category": "Infrastructure",
    "twitter": {
      "handle": "FortaNetwork",
      "url": "https://x.com/FortaNetwork",
      "bio": "Stop hacks before they happen. Powered by the most advanced AI detection model, Forta Firewall integrates with protocols and chains to prevent +99% of hacks."
    },
    "marketingCampaign": {
      "title": "Latest from Forta",
      "description": "Recent developments and updates in blockchain technology.",
      "date": "2024-12-01",
      "pinnedTweetUrl": "https://x.com/FortaNetwork/status/1858894855184712191"
    }
  },
  {
    "id": "42",
    "name": "Foundation",
    "description": "This is the start of something new.",
    "website": "https://foundation.app/",
    "category": "Infrastructure",
    "twitter": {
      "handle": "foundation",
      "url": "https://x.com/foundation",
      "bio": "This is the start of something new."
    },
    "marketingCampaign": {
      "title": "Latest from Foundation",
      "description": "Recent developments and updates in blockchain technology.",
      "date": "2024-12-01",
      "pinnedTweetUrl": null
    }
  },
  {
    "id": "43",
    "name": "Freatic",
    "description": "Part of a16z's crypto portfolio.",
    "website": "https://freatic.team/",
    "category": "Infrastructure",
    "twitter": {
      "handle": "intent",
      "url": "https://x.com/intent",
      "bio": null
    },
    "marketingCampaign": {
      "title": "Latest from Freatic",
      "description": "Recent developments and updates in blockchain technology.",
      "date": "2024-12-01",
      "pinnedTweetUrl": null
    }
  },
  {
    "id": "44",
    "name": "Friends with Benefits",
    "description": "Part of a16z's crypto portfolio.",
    "website": "https://www.fwb.help/",
    "category": "Infrastructure",
    "twitter": {
      "handle": null,
      "url": null,
      "bio": null
    },
    "marketingCampaign": {
      "title": "Latest from Friends with Benefits",
      "description": "Recent developments and updates in blockchain technology.",
      "date": "2024-12-01",
      "pinnedTweetUrl": null
    }
  },
  {
    "id": "45",
    "name": "Gensyn",
    "description": "The network for machine intelligence",
    "website": "https://www.gensyn.ai/",
    "category": "Infrastructure",
    "twitter": {
      "handle": "gensynai",
      "url": "https://x.com/gensynai",
      "bio": "The network for machine intelligence"
    },
    "marketingCampaign": {
      "title": "Latest from Gensyn",
      "description": "Recent developments and updates in blockchain technology.",
      "date": "2024-12-01",
      "pinnedTweetUrl": "https://x.com/gensynai/status/1843677684444082201"
    }
  },
  {
    "id": "46",
    "name": "Golden",
    "description": "Knowledge for all.",
    "website": "https://golden.com/",
    "category": "Infrastructure",
    "twitter": {
      "handle": "golden",
      "url": "https://x.com/golden",
      "bio": "Knowledge for all."
    },
    "marketingCampaign": {
      "title": "Latest from Golden",
      "description": "Recent developments and updates in blockchain technology.",
      "date": "2024-12-01",
      "pinnedTweetUrl": null
    }
  },
  {
    "id": "47",
    "name": "Goldfinch",
    "description": "General Partner investing in web3. founder @ Autonomous Partners. into crypto before it was cool.",
    "website": "https://goldfinch.finance/",
    "category": "DeFi",
    "twitter": {
      "handle": "ariannasimpson",
      "url": "https://x.com/ariannasimpson",
      "bio": "General Partner investing in web3. founder @ Autonomous Partners. into crypto before it was cool."
    },
    "marketingCampaign": {
      "title": "Latest from Goldfinch",
      "description": "Recent developments and updates in blockchain technology.",
      "date": "2024-12-01",
      "pinnedTweetUrl": null
    }
  },
  {
    "id": "48",
    "name": "Halliday",
    "description": "The end-to-end payments platform for your rollup: empower users with fiat on/off ramps, cross-chain swaps, and exchange payments direct to your chain.",
    "website": "https://www.halliday.xyz/",
    "category": "Infrastructure",
    "twitter": {
      "handle": "HallidayHQ",
      "url": "https://x.com/HallidayHQ",
      "bio": "The end-to-end payments platform for your rollup: empower users with fiat on/off ramps, cross-chain swaps, and exchange payments direct to your chain."
    },
    "marketingCampaign": {
      "title": "Latest from Halliday",
      "description": "Recent developments and updates in blockchain technology.",
      "date": "2024-12-01",
      "pinnedTweetUrl": null
    }
  },
  {
    "id": "49",
    "name": "Improbable",
    "description": "Venture into new worlds. We believe that the metaverse is an opportunity for communities, companies and brands to have a positive impact in the real world.",
    "website": "https://www.improbable.io/",
    "category": "Infrastructure",
    "twitter": {
      "handle": "Improbableio",
      "url": "https://x.com/Improbableio",
      "bio": "Venture into new worlds. We believe that the metaverse is an opportunity for communities, companies and brands to have a positive impact in the real world."
    },
    "marketingCampaign": {
      "title": "Latest from Improbable",
      "description": "Recent developments and updates in blockchain technology.",
      "date": "2024-12-01",
      "pinnedTweetUrl": "https://x.com/Improbableio/status/1879114569022407031"
    }
  },
  {
    "id": "50",
    "name": "Iron Fish",
    "description": "Privacy layer for crypto, for all assets. Join our Discord:",
    "website": "https://ironfish.network/",
    "category": "Infrastructure",
    "twitter": {
      "handle": "ironfishcrypto",
      "url": "https://x.com/ironfishcrypto",
      "bio": "Privacy layer for crypto, for all assets. Join our Discord:"
    },
    "marketingCampaign": {
      "title": "Latest from Iron Fish",
      "description": "Recent developments and updates in blockchain technology.",
      "date": "2024-12-01",
      "pinnedTweetUrl": "https://x.com/ironfishcrypto/status/1876713592231264368"
    }
  },
  {
    "id": "51",
    "name": "Irreverent Labs",
    "description": "Part of a16z's crypto portfolio.",
    "website": "https://irreverentlabs.com/",
    "category": "Infrastructure",
    "twitter": {
      "handle": null,
      "url": null,
      "bio": null
    },
    "marketingCampaign": {
      "title": "Latest from Irreverent Labs",
      "description": "Recent developments and updates in blockchain technology.",
      "date": "2024-12-01",
      "pinnedTweetUrl": null
    }
  },
  {
    "id": "52",
    "name": "IYK",
    "description": "Connecting physical objects to the digital world \u2726 \u2736 \u2737 \u2738 \u2739 \u273a",
    "website": "https://iyk.app/",
    "category": "Infrastructure",
    "twitter": {
      "handle": "iyk_app",
      "url": "https://x.com/iyk_app",
      "bio": "Connecting physical objects to the digital world \u2726 \u2736 \u2737 \u2738 \u2739 \u273a"
    },
    "marketingCampaign": {
      "title": "Latest from IYK",
      "description": "Recent developments and updates in blockchain technology.",
      "date": "2024-12-01",
      "pinnedTweetUrl": null
    }
  },
  {
    "id": "53",
    "name": "Kiosk",
    "description": "Part of a16z's crypto portfolio.",
    "website": "https://kiosk.app/",
    "category": "Infrastructure",
    "twitter": {
      "handle": "kiosk",
      "url": "https://x.com/kiosk",
      "bio": null
    },
    "marketingCampaign": {
      "title": "Latest from Kiosk",
      "description": "Recent developments and updates in blockchain technology.",
      "date": "2024-12-01",
      "pinnedTweetUrl": null
    }
  },
  {
    "id": "54",
    "name": "LayerZero",
    "description": "Build Anything. Build Omnichain. // \u3164",
    "website": "https://layerzero.network/",
    "category": "Infrastructure",
    "twitter": {
      "handle": "layerzero_core",
      "url": "https://x.com/layerzero_core",
      "bio": "Build Anything. Build Omnichain. // \u3164"
    },
    "marketingCampaign": {
      "title": "Latest from LayerZero",
      "description": "Recent developments and updates in blockchain technology.",
      "date": "2024-12-01",
      "pinnedTweetUrl": "https://x.com/layerzero_core/status/1879922861915402455"
    }
  },
  {
    "id": "55",
    "name": "Lido",
    "description": "Part of a16z's crypto portfolio.",
    "website": "https://lido.fi/",
    "category": "Infrastructure",
    "twitter": {
      "handle": null,
      "url": null,
      "bio": null
    },
    "marketingCampaign": {
      "title": "Latest from Lido",
      "description": "Recent developments and updates in blockchain technology.",
      "date": "2024-12-01",
      "pinnedTweetUrl": null
    }
  },
  {
    "id": "56",
    "name": "Lightspark",
    "description": "Open payments for the Internet. Enterprise-grade, fast, secure payments on Lightning.",
    "website": "https://www.lightspark.com/",
    "category": "Infrastructure",
    "twitter": {
      "handle": "lightspark",
      "url": "https://x.com/lightspark",
      "bio": "Open payments for the Internet. Enterprise-grade, fast, secure payments on Lightning."
    },
    "marketingCampaign": {
      "title": "Latest from Lightspark",
      "description": "Recent developments and updates in blockchain technology.",
      "date": "2024-12-01",
      "pinnedTweetUrl": null
    }
  },
  {
    "id": "57",
    "name": "Linera",
    "description": "The Real-Time Blockchain \u2014 Linera is infra optimized for real-time apps, using microchains to deliver ultra-low latency and high security. Founded by .",
    "website": "https://linera.io/",
    "category": "Infrastructure",
    "twitter": {
      "handle": "linera_io",
      "url": "https://x.com/linera_io",
      "bio": "The Real-Time Blockchain \u2014 Linera is infra optimized for real-time apps, using microchains to deliver ultra-low latency and high security. Founded by ."
    },
    "marketingCampaign": {
      "title": "Latest from Linera",
      "description": "Recent developments and updates in blockchain technology.",
      "date": "2024-12-01",
      "pinnedTweetUrl": "https://x.com/linera_io/status/1856351869490303432"
    }
  },
  {
    "id": "58",
    "name": "Loop",
    "description": "\ud83d\udd01 Simplifying crypto payments \ud83d\udcda Learn more: \ud83d\ude80 Let's talk:",
    "website": "https://www.loopcrypto.xyz/",
    "category": "Infrastructure",
    "twitter": {
      "handle": "loopcrypto_xyz",
      "url": "https://x.com/loopcrypto_xyz",
      "bio": "\ud83d\udd01 Simplifying crypto payments \ud83d\udcda Learn more: \ud83d\ude80 Let's talk:"
    },
    "marketingCampaign": {
      "title": "Latest from Loop",
      "description": "Recent developments and updates in blockchain technology.",
      "date": "2024-12-01",
      "pinnedTweetUrl": "https://x.com/loopcrypto_xyz/status/1856105486875275304"
    }
  },
  {
    "id": "59",
    "name": "Manifold",
    "description": "Enabling creative sovereignty. Start here:",
    "website": "https://www.manifold.xyz/",
    "category": "Infrastructure",
    "twitter": {
      "handle": "manifoldxyz",
      "url": "https://x.com/manifoldxyz",
      "bio": "Enabling creative sovereignty. Start here:"
    },
    "marketingCampaign": {
      "title": "Latest from Manifold",
      "description": "Recent developments and updates in blockchain technology.",
      "date": "2024-12-01",
      "pinnedTweetUrl": "https://x.com/manifoldxyz/status/1871687820299194850"
    }
  },
  {
    "id": "60",
    "name": "Matter Labs",
    "description": "Part of a16z's crypto portfolio.",
    "website": "https://matter-labs.io/",
    "category": "Infrastructure",
    "twitter": {
      "handle": null,
      "url": null,
      "bio": null
    },
    "marketingCampaign": {
      "title": "Latest from Matter Labs",
      "description": "Recent developments and updates in blockchain technology.",
      "date": "2024-12-01",
      "pinnedTweetUrl": null
    }
  },
  {
    "id": "61",
    "name": "Mem",
    "description": "Part of a16z's crypto portfolio.",
    "website": "https://mem.co/",
    "category": "Infrastructure",
    "twitter": {
      "handle": null,
      "url": null,
      "bio": null
    },
    "marketingCampaign": {
      "title": "Latest from Mem",
      "description": "Recent developments and updates in blockchain technology.",
      "date": "2024-12-01",
      "pinnedTweetUrl": null
    }
  },
  {
    "id": "62",
    "name": "Merit Systems",
    "description": "Part of a16z's crypto portfolio.",
    "website": "https://www.merit.systems/",
    "category": "Infrastructure",
    "twitter": {
      "handle": null,
      "url": null,
      "bio": null
    },
    "marketingCampaign": {
      "title": "Latest from Merit Systems",
      "description": "Recent developments and updates in blockchain technology.",
      "date": "2024-12-01",
      "pinnedTweetUrl": null
    }
  },
  {
    "id": "63",
    "name": "Meta4 Capital",
    "description": "Web 3.0-focused investment management firm interested in the vast potential of non-fungible tokens, and the financialization thereof.",
    "website": "https://www.meta4.capital/",
    "category": "Infrastructure",
    "twitter": {
      "handle": "Meta4Capital",
      "url": "https://x.com/Meta4Capital",
      "bio": "Web 3.0-focused investment management firm interested in the vast potential of non-fungible tokens, and the financialization thereof."
    },
    "marketingCampaign": {
      "title": "Latest from Meta4 Capital",
      "description": "Recent developments and updates in blockchain technology.",
      "date": "2024-12-01",
      "pinnedTweetUrl": null
    }
  },
  {
    "id": "64",
    "name": "Morpho",
    "description": "Contributing to the Morpho Protocol. Earn, Borrow, Build on Morpho. Join the community:",
    "website": "https://www.morpho.xyz/",
    "category": "Infrastructure",
    "twitter": {
      "handle": "MorphoLabs",
      "url": "https://x.com/MorphoLabs",
      "bio": "Contributing to the Morpho Protocol. Earn, Borrow, Build on Morpho. Join the community:"
    },
    "marketingCampaign": {
      "title": "Latest from Morpho",
      "description": "Recent developments and updates in blockchain technology.",
      "date": "2024-12-01",
      "pinnedTweetUrl": "https://x.com/MorphoLabs/status/1879903267146309805"
    }
  },
  {
    "id": "65",
    "name": "Mysten Labs",
    "description": "Part of a16z's crypto portfolio.",
    "website": "https://mystenlabs.com/",
    "category": "Infrastructure",
    "twitter": {
      "handle": null,
      "url": null,
      "bio": null
    },
    "marketingCampaign": {
      "title": "Latest from Mysten Labs",
      "description": "Recent developments and updates in blockchain technology.",
      "date": "2024-12-01",
      "pinnedTweetUrl": null
    }
  },
  {
    "id": "66",
    "name": "Mythical Games",
    "description": "We are Mythical Games, a next-generation game technology studio at the intersection of blockchain and games. Marketplace:",
    "website": "https://mythicalgames.com/",
    "category": "Gaming",
    "twitter": {
      "handle": "playmythical",
      "url": "https://x.com/playmythical",
      "bio": "We are Mythical Games, a next-generation game technology studio at the intersection of blockchain and games. Marketplace:"
    },
    "marketingCampaign": {
      "title": "Latest from Mythical Games",
      "description": "Recent developments and updates in blockchain technology.",
      "date": "2024-12-01",
      "pinnedTweetUrl": "https://x.com/playmythical/status/1859986928139198691"
    }
  },
  {
    "id": "67",
    "name": "Nansen",
    "description": "See forward with the most powerful multichain AI analytics platform.",
    "website": "https://www.nansen.ai/",
    "category": "Infrastructure",
    "twitter": {
      "handle": "nansen_ai",
      "url": "https://x.com/nansen_ai",
      "bio": "See forward with the most powerful multichain AI analytics platform."
    },
    "marketingCampaign": {
      "title": "Latest from Nansen",
      "description": "Recent developments and updates in blockchain technology.",
      "date": "2024-12-01",
      "pinnedTweetUrl": "https://x.com/nansen_ai/status/1881250311354155408"
    }
  },
  {
    "id": "68",
    "name": "Near",
    "description": "The blockchain for AI.",
    "website": "https://near.org/",
    "category": "Infrastructure",
    "twitter": {
      "handle": "nearprotocol",
      "url": "https://x.com/nearprotocol",
      "bio": "The blockchain for AI."
    },
    "marketingCampaign": {
      "title": "Latest from Near",
      "description": "Recent developments and updates in blockchain technology.",
      "date": "2024-12-01",
      "pinnedTweetUrl": "https://x.com/nearprotocol/status/1880650193005388112"
    }
  },
  {
    "id": "69",
    "name": "NOD Games",
    "description": "Part of a16z's crypto portfolio.",
    "website": "https://www.nodgames.com/",
    "category": "Gaming",
    "twitter": {
      "handle": null,
      "url": null,
      "bio": null
    },
    "marketingCampaign": {
      "title": "Latest from NOD Games",
      "description": "Recent developments and updates in blockchain technology.",
      "date": "2024-12-01",
      "pinnedTweetUrl": null
    }
  },
  {
    "id": "70",
    "name": "Nova Labs",
    "description": "Nova Labs creates technologies and services that shape the future of connectivity. Built on the Helium Network. \ud83d\udd90\ufe0f",
    "website": "https://nova.xyz/",
    "category": "Infrastructure",
    "twitter": {
      "handle": "novalabs_",
      "url": "https://x.com/novalabs_",
      "bio": "Nova Labs creates technologies and services that shape the future of connectivity. Built on the Helium Network. \ud83d\udd90\ufe0f"
    },
    "marketingCampaign": {
      "title": "Latest from Nova Labs",
      "description": "Recent developments and updates in blockchain technology.",
      "date": "2024-12-01",
      "pinnedTweetUrl": null
    }
  },
  {
    "id": "71",
    "name": "Nym",
    "description": "Part of a16z's crypto portfolio.",
    "website": "https://nymtech.net/",
    "category": "Infrastructure",
    "twitter": {
      "handle": null,
      "url": null,
      "bio": null
    },
    "marketingCampaign": {
      "title": "Latest from Nym",
      "description": "Recent developments and updates in blockchain technology.",
      "date": "2024-12-01",
      "pinnedTweetUrl": null
    }
  },
  {
    "id": "72",
    "name": "Optimism",
    "description": "Optimism is building a Superchain to scale Ethereum | Labs | Governance",
    "website": "https://www.optimism.io/",
    "category": "Infrastructure",
    "twitter": {
      "handle": "optimism",
      "url": "https://x.com/optimism",
      "bio": "Optimism is building a Superchain to scale Ethereum | Labs | Governance"
    },
    "marketingCampaign": {
      "title": "Latest from Optimism",
      "description": "Recent developments and updates in blockchain technology.",
      "date": "2024-12-01",
      "pinnedTweetUrl": "https://x.com/optimism/status/1881756340143673591"
    }
  },
  {
    "id": "73",
    "name": "PartyDAO",
    "description": "Making crypto multiplayer. Minting platform: Crowdfunding and group wallet:",
    "website": "https://www.partybid.app/",
    "category": "NFT",
    "twitter": {
      "handle": "prtydao",
      "url": "https://x.com/prtydao",
      "bio": "Making crypto multiplayer. Minting platform: Crowdfunding and group wallet:"
    },
    "marketingCampaign": {
      "title": "Latest from PartyDAO",
      "description": "Recent developments and updates in blockchain technology.",
      "date": "2024-12-01",
      "pinnedTweetUrl": null
    }
  },
  {
    "id": "74",
    "name": "Phantom",
    "description": "The friendly crypto wallet built for DeFi & NFTs. | Get support at | We never DM first or ask for your Secret Recovery Phrase!",
    "website": "https://phantom.app/",
    "category": "Infrastructure",
    "twitter": {
      "handle": "phantom",
      "url": "https://x.com/phantom",
      "bio": "The friendly crypto wallet built for DeFi & NFTs. | Get support at | We never DM first or ask for your Secret Recovery Phrase!"
    },
    "marketingCampaign": {
      "title": "Latest from Phantom",
      "description": "Recent developments and updates in blockchain technology.",
      "date": "2024-12-01",
      "pinnedTweetUrl": "https://x.com/phantom/status/1881190197397692647"
    }
  },
  {
    "id": "75",
    "name": "Pimlico",
    "description": "Build with Smart Accounts | get started:",
    "website": "https://www.pimlico.io/",
    "category": "Infrastructure",
    "twitter": {
      "handle": "pimlicoHQ",
      "url": "https://x.com/pimlicoHQ",
      "bio": "Build with Smart Accounts | get started:"
    },
    "marketingCampaign": {
      "title": "Latest from Pimlico",
      "description": "Recent developments and updates in blockchain technology.",
      "date": "2024-12-01",
      "pinnedTweetUrl": "https://x.com/pimlicoHQ/status/1721890681185321018"
    }
  },
  {
    "id": "76",
    "name": "Plai Labs",
    "description": "The first AI development platform that unites low-code speed with full-code power. Built for teams.",
    "website": "https://plailabs.com/",
    "category": "Infrastructure",
    "twitter": {
      "handle": "getsalt_ai",
      "url": "https://x.com/getsalt_ai",
      "bio": "The first AI development platform that unites low-code speed with full-code power. Built for teams."
    },
    "marketingCampaign": {
      "title": "Latest from Plai Labs",
      "description": "Recent developments and updates in blockchain technology.",
      "date": "2024-12-01",
      "pinnedTweetUrl": "https://x.com/getsalt_ai/status/1869444563498356897"
    }
  },
  {
    "id": "77",
    "name": "PleasrDAO",
    "description": "we buy art from anti-establishment rebels",
    "website": "https://pleasr.org/",
    "category": "DAO",
    "twitter": {
      "handle": "PleasrDAO",
      "url": "https://x.com/PleasrDAO",
      "bio": "we buy art from anti-establishment rebels"
    },
    "marketingCampaign": {
      "title": "Latest from PleasrDAO",
      "description": "Recent developments and updates in blockchain technology.",
      "date": "2024-12-01",
      "pinnedTweetUrl": null
    }
  },
  {
    "id": "78",
    "name": "PROOF",
    "description": "Part of a16z's crypto portfolio.",
    "website": "https://docs.proof.xyz/",
    "category": "Infrastructure",
    "twitter": {
      "handle": null,
      "url": null,
      "bio": null
    },
    "marketingCampaign": {
      "title": "Latest from PROOF",
      "description": "Recent developments and updates in blockchain technology.",
      "date": "2024-12-01",
      "pinnedTweetUrl": null
    }
  },
  {
    "id": "79",
    "name": "Proof of Play",
    "description": "Onchain game studio & technology company, building and the composable infrastructure it runs on. Backed by \ud83c\udff4\u200d\u2620\ufe0f",
    "website": "https://www.proofofplay.com/",
    "category": "Gaming",
    "twitter": {
      "handle": "ProofOfPlay",
      "url": "https://x.com/ProofOfPlay",
      "bio": "Onchain game studio & technology company, building and the composable infrastructure it runs on. Backed by \ud83c\udff4\u200d\u2620\ufe0f"
    },
    "marketingCampaign": {
      "title": "Latest from Proof of Play",
      "description": "Recent developments and updates in blockchain technology.",
      "date": "2024-12-01",
      "pinnedTweetUrl": "https://x.com/ProofOfPlay/status/1704876956762956188"
    }
  },
  {
    "id": "80",
    "name": "Protocol Labs",
    "description": "We are an innovation network of more than 600 teams, projects and movements, driving breakthroughs in computing to push humanity forward.",
    "website": "https://protocol.ai/",
    "category": "Infrastructure",
    "twitter": {
      "handle": "protocollabs",
      "url": "https://x.com/protocollabs",
      "bio": "We are an innovation network of more than 600 teams, projects and movements, driving breakthroughs in computing to push humanity forward."
    },
    "marketingCampaign": {
      "title": "Latest from Protocol Labs",
      "description": "Recent developments and updates in blockchain technology.",
      "date": "2024-12-01",
      "pinnedTweetUrl": "https://x.com/protocollabs/status/1880335693203009580"
    }
  },
  {
    "id": "81",
    "name": "RLY Network",
    "description": "A permissionless, open toolkit for building onchain mobile apps, featuring embedded wallets and gasless transactions.",
    "website": "https://rly.network/",
    "category": "Infrastructure",
    "twitter": {
      "handle": "RallyProtocol",
      "url": "https://x.com/RallyProtocol",
      "bio": "A permissionless, open toolkit for building onchain mobile apps, featuring embedded wallets and gasless transactions."
    },
    "marketingCampaign": {
      "title": "Latest from RLY Network",
      "description": "Recent developments and updates in blockchain technology.",
      "date": "2024-12-01",
      "pinnedTweetUrl": "https://x.com/RallyProtocol/status/1786508928181792880"
    }
  },
  {
    "id": "82",
    "name": "Royal",
    "description": "Music + Crypto",
    "website": "https://royal.io/",
    "category": "Infrastructure",
    "twitter": {
      "handle": "join_royal",
      "url": "https://x.com/join_royal",
      "bio": "Music + Crypto"
    },
    "marketingCampaign": {
      "title": "Latest from Royal",
      "description": "Recent developments and updates in blockchain technology.",
      "date": "2024-12-01",
      "pinnedTweetUrl": "https://x.com/join_royal/status/1881796887298408730"
    }
  },
  {
    "id": "83",
    "name": "Runloop",
    "description": "\u2022 Previously , (acq by ), , (acq by ), \u2022 \ud83c\uddfa\ud83c\uddf8\ud83c\uddf7\ud83c\uddf4\ud83c\udde8\ud83c\udde6\ud83c\udde8\ud83c\udded",
    "website": "https://runloop.xyz/",
    "category": "Infrastructure",
    "twitter": {
      "handle": "cgst",
      "url": "https://x.com/cgst",
      "bio": "\u2022 Previously , (acq by ), , (acq by ), \u2022 \ud83c\uddfa\ud83c\uddf8\ud83c\uddf7\ud83c\uddf4\ud83c\udde8\ud83c\udde6\ud83c\udde8\ud83c\udded"
    },
    "marketingCampaign": {
      "title": "Latest from Runloop",
      "description": "Recent developments and updates in blockchain technology.",
      "date": "2024-12-01",
      "pinnedTweetUrl": "https://x.com/cgst/status/1359668906567163906"
    }
  },
  {
    "id": "84",
    "name": "Rye",
    "description": "Millions of Products. One API.",
    "website": "https://www.rye.com/",
    "category": "Infrastructure",
    "twitter": {
      "handle": "rye",
      "url": "https://x.com/rye",
      "bio": "Millions of Products. One API."
    },
    "marketingCampaign": {
      "title": "Latest from Rye",
      "description": "Recent developments and updates in blockchain technology.",
      "date": "2024-12-01",
      "pinnedTweetUrl": null
    }
  },
  {
    "id": "85",
    "name": "Shibuya",
    "description": "Part of a16z's crypto portfolio.",
    "website": "https://www.shibuya.xyz/",
    "category": "Infrastructure",
    "twitter": {
      "handle": null,
      "url": null,
      "bio": null
    },
    "marketingCampaign": {
      "title": "Latest from Shibuya",
      "description": "Recent developments and updates in blockchain technology.",
      "date": "2024-12-01",
      "pinnedTweetUrl": null
    }
  },
  {
    "id": "86",
    "name": "Sky Mavis",
    "description": "\ud83d\udddd\ufe0f Our mission: create economic freedom for everyone, starting with gamers // \ud83d\udc26 We're hiring:",
    "website": "https://www.skymavis.com/",
    "category": "Infrastructure",
    "twitter": {
      "handle": "SkyMavisHQ",
      "url": "https://x.com/SkyMavisHQ",
      "bio": "\ud83d\udddd\ufe0f Our mission: create economic freedom for everyone, starting with gamers // \ud83d\udc26 We're hiring:"
    },
    "marketingCampaign": {
      "title": "Latest from Sky Mavis",
      "description": "Recent developments and updates in blockchain technology.",
      "date": "2024-12-01",
      "pinnedTweetUrl": "https://x.com/SkyMavisHQ/status/1681576126899195906"
    }
  },
  {
    "id": "87",
    "name": "Solana",
    "description": "Part of a16z's crypto portfolio.",
    "website": "https://solana.com/",
    "category": "Infrastructure",
    "twitter": {
      "handle": null,
      "url": null,
      "bio": null
    },
    "marketingCampaign": {
      "title": "Latest from Solana",
      "description": "Recent developments and updates in blockchain technology.",
      "date": "2024-12-01",
      "pinnedTweetUrl": null
    }
  },
  {
    "id": "88",
    "name": "Sound.xyz",
    "description": "Discover amazing new music and prove that you were there first.",
    "website": "https://www.sound.xyz/",
    "category": "Infrastructure",
    "twitter": {
      "handle": "soundxyz_",
      "url": "https://x.com/soundxyz_",
      "bio": "Discover amazing new music and prove that you were there first."
    },
    "marketingCampaign": {
      "title": "Latest from Sound.xyz",
      "description": "Recent developments and updates in blockchain technology.",
      "date": "2024-12-01",
      "pinnedTweetUrl": "https://x.com/soundxyz_/status/1762522482064634027"
    }
  },
  {
    "id": "89",
    "name": "Sovrun",
    "description": "Shaping the future of gaming through AI, Blockchain & Autonomous Worlds || \ud83c\udfae Where gaming knows no bounds Ecosystem:",
    "website": "https://www.sovrun.org/",
    "category": "Infrastructure",
    "twitter": {
      "handle": "SovrunOfficial",
      "url": "https://x.com/SovrunOfficial",
      "bio": "Shaping the future of gaming through AI, Blockchain & Autonomous Worlds || \ud83c\udfae Where gaming knows no bounds Ecosystem:"
    },
    "marketingCampaign": {
      "title": "Latest from Sovrun",
      "description": "Recent developments and updates in blockchain technology.",
      "date": "2024-12-01",
      "pinnedTweetUrl": "https://x.com/SovrunOfficial/status/1855956075008458785"
    }
  },
  {
    "id": "90",
    "name": "Spruce",
    "description": "Building a future where users control their identity & data across all digital interactions. Join our Discord community:",
    "website": "https://spruceid.com/",
    "category": "Infrastructure",
    "twitter": {
      "handle": "SpruceID",
      "url": "https://x.com/SpruceID",
      "bio": "Building a future where users control their identity & data across all digital interactions. Join our Discord community:"
    },
    "marketingCampaign": {
      "title": "Latest from Spruce",
      "description": "Recent developments and updates in blockchain technology.",
      "date": "2024-12-01",
      "pinnedTweetUrl": "https://x.com/SpruceID/status/1825553051228438679"
    }
  },
  {
    "id": "91",
    "name": "Story",
    "description": "Tokenize Intelligence. Story is the World's \ua9c1IP\ua9c2 Blockchain.",
    "website": "https://www.storyprotocol.xyz/",
    "category": "Infrastructure",
    "twitter": {
      "handle": "StoryProtocol",
      "url": "https://x.com/StoryProtocol",
      "bio": "Tokenize Intelligence. Story is the World's \ua9c1IP\ua9c2 Blockchain."
    },
    "marketingCampaign": {
      "title": "Latest from Story",
      "description": "Recent developments and updates in blockchain technology.",
      "date": "2024-12-01",
      "pinnedTweetUrl": "https://x.com/StoryProtocol/status/1881713146274156951"
    }
  },
  {
    "id": "92",
    "name": "Syndicate",
    "description": "Infrastructure for powerful onchain products and communities at scale. Member of . DMs open.",
    "website": "https://syndicate.io/",
    "category": "Infrastructure",
    "twitter": {
      "handle": "syndicateio",
      "url": "https://x.com/syndicateio",
      "bio": "Infrastructure for powerful onchain products and communities at scale. Member of . DMs open."
    },
    "marketingCampaign": {
      "title": "Latest from Syndicate",
      "description": "Recent developments and updates in blockchain technology.",
      "date": "2024-12-01",
      "pinnedTweetUrl": null
    }
  },
  {
    "id": "93",
    "name": "Tally Labs",
    "description": "Telling stories, traveling worlds, creating content, and (trying to) avoid with \u2022 Wrote the 1st community-generative \ud83d\udcd5NFT",
    "website": "https://www.jenkinsthevalet.com/",
    "category": "Infrastructure",
    "twitter": {
      "handle": "jenkinsthevalet",
      "url": "https://x.com/jenkinsthevalet",
      "bio": "Telling stories, traveling worlds, creating content, and (trying to) avoid with \u2022 Wrote the 1st community-generative \ud83d\udcd5NFT"
    },
    "marketingCampaign": {
      "title": "Latest from Tally Labs",
      "description": "Recent developments and updates in blockchain technology.",
      "date": "2024-12-01",
      "pinnedTweetUrl": "https://x.com/jenkinsthevalet/status/1830972200289005829"
    }
  },
  {
    "id": "94",
    "name": "Talos",
    "description": "Talos empowers institutions to trade digital assets.",
    "website": "https://talos.com/",
    "category": "Infrastructure",
    "twitter": {
      "handle": "talostrading",
      "url": "https://x.com/talostrading",
      "bio": "Talos empowers institutions to trade digital assets."
    },
    "marketingCampaign": {
      "title": "Latest from Talos",
      "description": "Recent developments and updates in blockchain technology.",
      "date": "2024-12-01",
      "pinnedTweetUrl": "https://x.com/talostrading/status/1849058696006926589"
    }
  },
  {
    "id": "95",
    "name": "Towns",
    "description": "Permissionless group chats. Runs on . Built on .",
    "website": "https://www.towns.com/",
    "category": "Infrastructure",
    "twitter": {
      "handle": "townsxyz",
      "url": "https://x.com/townsxyz",
      "bio": "Permissionless group chats. Runs on . Built on ."
    },
    "marketingCampaign": {
      "title": "Latest from Towns",
      "description": "Recent developments and updates in blockchain technology.",
      "date": "2024-12-01",
      "pinnedTweetUrl": "https://x.com/townsxyz/status/1877400025854316679"
    }
  },
  {
    "id": "96",
    "name": "Trust Token",
    "description": "Expanding access to financial opportunities and global trade with its Archblock Stablecoins portfolio and Archblock Marketplace. Incubated & .",
    "website": "https://www.trusttoken.com/",
    "category": "Infrastructure",
    "twitter": {
      "handle": "archblock_",
      "url": "https://x.com/archblock_",
      "bio": "Expanding access to financial opportunities and global trade with its Archblock Stablecoins portfolio and Archblock Marketplace. Incubated & ."
    },
    "marketingCampaign": {
      "title": "Latest from Trust Token",
      "description": "Recent developments and updates in blockchain technology.",
      "date": "2024-12-01",
      "pinnedTweetUrl": "https://x.com/archblock_/status/1632784261370765312"
    }
  },
  {
    "id": "97",
    "name": "Uniswap",
    "description": "Part of a16z's crypto portfolio.",
    "website": "https://uniswap.org/",
    "category": "DeFi",
    "twitter": {
      "handle": null,
      "url": null,
      "bio": null
    },
    "marketingCampaign": {
      "title": "Latest from Uniswap",
      "description": "Recent developments and updates in blockchain technology.",
      "date": "2024-12-01",
      "pinnedTweetUrl": null
    }
  },
  {
    "id": "98",
    "name": "Valora",
    "description": "Valora makes saving, sending and spending crypto as easy as sending a text. For support questions, contact .",
    "website": "https://valoraapp.com/",
    "category": "Infrastructure",
    "twitter": {
      "handle": "valora",
      "url": "https://x.com/valora",
      "bio": "Valora makes saving, sending and spending crypto as easy as sending a text. For support questions, contact ."
    },
    "marketingCampaign": {
      "title": "Latest from Valora",
      "description": "Recent developments and updates in blockchain technology.",
      "date": "2024-12-01",
      "pinnedTweetUrl": "https://x.com/valora/status/1869492310087745929"
    }
  },
  {
    "id": "99",
    "name": "VeeFriends",
    "description": "Favorite VeeFriend?",
    "website": "https://veefriends.com/",
    "category": "Infrastructure",
    "twitter": {
      "handle": "veefriends",
      "url": "https://x.com/veefriends",
      "bio": "Favorite VeeFriend?"
    },
    "marketingCampaign": {
      "title": "Latest from VeeFriends",
      "description": "Recent developments and updates in blockchain technology.",
      "date": "2024-12-01",
      "pinnedTweetUrl": "https://x.com/veefriends/status/1880390839152574711"
    }
  },
  {
    "id": "100",
    "name": "Virtually Human Studio",
    "description": "VHS is a startup exploring the boundaries of entertainment. We experiment with emerging technologies in gaming, data and mixed reality.",
    "website": "https://www.vhslab.com/",
    "category": "Infrastructure",
    "twitter": {
      "handle": "V_H_Studio",
      "url": "https://x.com/V_H_Studio",
      "bio": "VHS is a startup exploring the boundaries of entertainment. We experiment with emerging technologies in gaming, data and mixed reality."
    },
    "marketingCampaign": {
      "title": "Latest from Virtually Human Studio",
      "description": "Recent developments and updates in blockchain technology.",
      "date": "2024-12-01",
      "pinnedTweetUrl": "https://x.com/V_H_Studio/status/1752105342320906382"
    }
  },
  {
    "id": "101",
    "name": "World",
    "description": "The real human network. World App support:",
    "website": "https://world.org/",
    "category": "Infrastructure",
    "twitter": {
      "handle": "worldcoin",
      "url": "https://x.com/worldcoin",
      "bio": "The real human network. World App support:"
    },
    "marketingCampaign": {
      "title": "Latest from World",
      "description": "Recent developments and updates in blockchain technology.",
      "date": "2024-12-01",
      "pinnedTweetUrl": "https://x.com/worldcoin/status/1877721028429849018"
    }
  },
  {
    "id": "102",
    "name": "XMTP",
    "description": "Come build the most secure and private messaging network in the world\u2014owned by the people who build it and use it.",
    "website": "https://xmtp.com/",
    "category": "Infrastructure",
    "twitter": {
      "handle": "xmtp_",
      "url": "https://x.com/xmtp_",
      "bio": "Come build the most secure and private messaging network in the world\u2014owned by the people who build it and use it."
    },
    "marketingCampaign": {
      "title": "Latest from XMTP",
      "description": "Recent developments and updates in blockchain technology.",
      "date": "2024-12-01",
      "pinnedTweetUrl": "https://x.com/xmtp_/status/1802755101603385470"
    }
  },
  {
    "id": "103",
    "name": "Yield Guild Games",
    "description": "We are a Web3 Guild Protocol for enabling guilds globally. Press: ygg.com",
    "website": "https://yieldguild.io/",
    "category": "Gaming",
    "twitter": {
      "handle": "yieldguild",
      "url": "https://x.com/yieldguild",
      "bio": "We are a Web3 Guild Protocol for enabling guilds globally. Press: ygg.com"
    },
    "marketingCampaign": {
      "title": "Latest from Yield Guild Games",
      "description": "Recent developments and updates in blockchain technology.",
      "date": "2024-12-01",
      "pinnedTweetUrl": "https://x.com/yieldguild/status/1854074788937183395"
    }
  },
  {
    "id": "104",
    "name": "Yuga Labs",
    "description": "Part of a16z's crypto portfolio.",
    "website": "https://www.yuga.com/",
    "category": "Infrastructure",
    "twitter": {
      "handle": null,
      "url": null,
      "bio": null
    },
    "marketingCampaign": {
      "title": "Latest from Yuga Labs",
      "description": "Recent developments and updates in blockchain technology.",
      "date": "2024-12-01",
      "pinnedTweetUrl": null
    }
  }
] as Company[];

// Apply manual overrides and add manual-only companies
export default [
    // Merge and sort all companies
    ...[
        // First, merge scraped and manual data
        ...scrapedCompanies
            .filter(company => !['Spotify', 'Google Podcasts', 'Overcast', 'Pocket Casts'].includes(company.name))
            .map(company => {
                const manualData = manualCompanyData.find(m => m.name === company.name);
                if (!manualData) return company;
                
                return {
                    ...company,
                    description: manualData.description || company.description,
                    twitter: manualData.twitter ? {
                        ...company.twitter,
                        ...manualData.twitter
                    } : company.twitter,
                    marketingCampaign: manualData.marketingCampaign ? {
                        ...company.marketingCampaign,
                        ...manualData.marketingCampaign
                    } : company.marketingCampaign
                };
            }),
        // Then add manual-only companies
        ...manualCompanyData
            .filter(manual => !scrapedCompanies.some(scraped => scraped.name === manual.name))
            .map((manual, index) => ({
                id: (scrapedCompanies.length + index + 1).toString(),
                name: manual.name,
                description: manual.description || "",
                website: "",
                category: "Infrastructure",
                twitter: manual.twitter || {
                    handle: null,
                    url: null,
                    bio: null
                },
                marketingCampaign: manual.marketingCampaign || {
                    title: `Latest from ${manual.name}`,
                    description: "Recent developments and updates in blockchain technology.",
                    date: "2024-12-01",
                    pinnedTweetUrl: null
                }
            }))
    ].sort((a, b) => a.name.localeCompare(b.name)) // Sort alphabetically by name
];