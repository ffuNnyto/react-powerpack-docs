import { NavigationTopMenu } from '../components/navigation/top-navigator'
import LeftSide from '../components/leftside/leftside'
import { Title } from '@/components/ui/title'
import Code from '@/components/ui/code'
import KeyFeatures from '@/components/home/keyfeatures'
import FAQ from '@/components/home/faq'


function PageHome() {

  return (
    <>

      <NavigationTopMenu />
      <div className='holy-grail-grid mt-20'>
        <main className='main-content max-w-[100%] w-full mx-auto'>
          <Title className='font-bold italic'>- How to install</Title>
          <div className='install package'>
            <div className='content mt-10'>
              <Code textStyle='onedark' language='bash' style={{}} code='npm install react-powerpack' />
            </div>
          </div>
          <Title className='font-bold mt-10'>- Package Description </Title>
          <div className='package-description mt-10'>
            <div className='content m-5'>
              React PowerPack is a comprehensive library of highly flexible and reusable components and hooks for React applications. It provides a rich set of tools designed to streamline development workflows, enhance productivity, and simplify the creation of complex user interfaces. With a focus on versatility and ease of use, React PowerPack empowers developers to build dynamic and interactive web applications with minimal effort.
            </div>
          </div>
          <Title className='font-bold mt-10'>- Key Features </Title>
          <div className='package-description border-l-[1px] p-2 mt-10'>
            <KeyFeatures />
          </div>
          <Title className='font-bold mt-10'>- FAQ (Frequently Asked Questions) </Title>
          <div className='package-description mt-10 border-l-[1px] p-2 mb-10'>
            <FAQ />
          </div>
        </main>
        <section className='mt-[20px] left-sidebar'>
          <LeftSide mobile={false} />
        </section>
      </div>

    </>
  )
}

export default PageHome
