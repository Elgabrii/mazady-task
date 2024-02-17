import { render, screen } from '@testing-library/react'

import Home from '@/app/page'

describe('home page tests', () => {
  
  it('should render navbar', () => {
    const { getByTestId } = render(<Home />)
    expect(getByTestId('navbar')).toBeInTheDocument()
  })

  it('should render profile', () => {
    const { getByTestId } = render(<Home />)
    expect(getByTestId('profile')).toBeInTheDocument()
  })

  it('should render QRCode', () => {
    const { getByTestId } = render(<Home />)
    expect(getByTestId('qrcode')).toBeInTheDocument()
  })

})