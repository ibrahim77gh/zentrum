import React, { ReactNode } from 'react'
// import ArtTrackIcon from '@mui/icons-material/ArtTrack'
// import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
// import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'
// import ContactSupportIcon from '@mui/icons-material/ContactSupport'
import {
  WebAsset as WebIcon,
  PhoneAndroid as MobileIcon,
  Memory as AIIcon,
  Palette as UXIcon,
} from '@mui/icons-material'

interface Data {
  title: string
  description: string
  icon?: ReactNode
}

export const data: Data[] = [
  {
    title: 'Web Application',
    description: 'Responsive and dynamic web apps tailored to your business needs.',
    icon: <WebIcon />,
  },
  {
    title: 'Mobile Applications',
    description: 'Intuitive and feature-rich mobile apps for seamless user experiences.',
    icon: <MobileIcon />,
  },
  {
    title: 'Generative AI',
    description: 'Harness AI for innovative and intelligent solutions.',
    icon: <AIIcon />,
  },
  {
    title: 'UI/UX Designing',
    description: 'Elevate user interactions with stunning and intuitive designs.',
    icon: <UXIcon />,
  },
]
