import { Paragraph, Image, Heading, Link } from './components';
import profilePhoto from '../assets/images/profilePhoto.png';

const Header = () => {
  return (
    <article className="flex flex-col justify-center items-center md:flex-row md:items-start md:justify-start gap-4 bg-white rounded-xl p-4">
      {/* image */}
      <div className="flex justify-center">
        <Image
          image={profilePhoto}
          alt={'Profile Photo'}
          className={' rounded-xl w-3/4 md:w-80'}
        />
      </div>
      {/* Info */}
      <div className="flex w-full flex-col gap-8 px-2">
        <div className="flex flex-col md:flex-row md:justify-between w-full gap-4 md:gap-0">
          <div className="flex flex-col">
            <Heading
              text={'Tanu Zerebel'}
              className={'text-gray1 font-medium text-2xl'}
            />
            <Paragraph text={'Front-end developer'} className={' text-gray3'} />
          </div>
          <div className="flex flex-col">
            <Link
              href={'mailto:zerebeltanu@gmail.com'}
              text={'zerebeltanu@gmail.com'}
            />
            <Link href={'tel:+233206989013'} text={'(+233) 206 989 013'} />
          </div>
        </div>
        <div className="text-gray3 flex flex-col gap-2 md:gap-6">
          <Paragraph
            text={`Self-motivated developer, who is willing to learn and create outstanding UI applications.`}
          />
          <Paragraph
            text={`Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie. `}
          />
        </div>
      </div>
    </article>
  );
};

export default function App() {
  return (
    <main className="font-quicksand my-2 mx-4 md:mx-8 lg:mx-24 2xl:mx-32 text-gray1">
      <Header />
    </main>
  );
}
