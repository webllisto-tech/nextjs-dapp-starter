import { Metadata } from 'next'

import HomePageTemplate from 'design-systems/Templates/HomePageTemplate'

export const metadata: Metadata = {
  title: 'Home Test 1',
  description: 'Test Data',
}

const HomePage: React.FC = () => {
  return <HomePageTemplate />
}

export default HomePage
