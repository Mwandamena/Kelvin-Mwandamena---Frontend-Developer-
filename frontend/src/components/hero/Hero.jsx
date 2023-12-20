// components
import  Container  from '../common/Container'
import HeroText from './HeroText'
import HeroImage from './HeroImage'

function Hero() {
  return (
    <Container>
      <section className='mt-12 flex flex-col gap-4 lg:flex-row justify-between items-center'>
        {/* Text section */}
        <HeroText />

        {/* image section */}
        <HeroImage />

      </section>
    </Container>
  )
}

export default Hero