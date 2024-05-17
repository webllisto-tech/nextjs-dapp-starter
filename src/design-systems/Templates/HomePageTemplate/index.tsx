'use client'
import { useWeb3Modal, useWeb3ModalState } from '@web3modal/wagmi/react'
import { useAccount } from 'wagmi'

import Button from 'design-systems/Atoms/Button'
import Typography from 'design-systems/Atoms/Typography'
import Layout from 'design-systems/Organisms/Layout'

const HomePageTemplate: React.FC = () => {
  const { open } = useWeb3Modal()
  const { address, isConnected } = useAccount()

  return (
    <Layout>
      <Typography size="h1">Homepage</Typography>
      <div className="mt-6 flex justify-center">
        <w3m-button />
      </div>

      {isConnected && <Typography size="paragraph">Connected Address: {address}</Typography>}
    </Layout>
  )
}

export default HomePageTemplate
