import { NavigationTopMenu } from '../components/navigation/top-navigator'
import LeftSide from '../components/layout/leftside'
import { Title } from '@/components/title'
import Code from '@/components/ui/code'
import KeyFeatures from '@/components/home/keyfeatures'
import FAQ from '@/components/home/faq'


function Home() {

  return (
    <>

      <NavigationTopMenu />
      <div className='holy-grail-grid mt-20'>

        <main className='main-content max-w-[100%] w-full mx-auto'>


          <div className='install package'>
            <Title className='font-bold italic'>- How to install</Title>
            <div className='content mt-10'>
              <Code textStyle='onedark' language='bash' style={{}} code='npm install react-powerpack' />
            </div>
          </div>
          <div className='package-description mt-10'>
            <Title className='font-bold'>- Package Description </Title>
            <div className='content m-5'>
              React PowerPack is a comprehensive library of highly flexible and reusable components and hooks for React applications. It provides a rich set of tools designed to streamline development workflows, enhance productivity, and simplify the creation of complex user interfaces. With a focus on versatility and ease of use, React PowerPack empowers developers to build dynamic and interactive web applications with minimal effort.
            </div>
          </div>
          <div className='package-description mt-10 border-l-[1px] p-2 mb-10'>
            <Title className='font-bold'>- Key Features </Title>
            <div className='mt-10'>
              <KeyFeatures />
            </div>
          </div>
          <div className='package-description mt-10 border-l-[1px] p-2 mb-10'>
            <Title className='font-bold'>- FAQ (Frequently Asked Questions) </Title>
            <div className='mt-10'>
              <FAQ />
            </div>
          </div>
        </main>

        <section className='mt-[20px] left-sidebar'>
          <LeftSide mobile={false} />
        </section>

      </div>

    </>
  )
}

export default Home
