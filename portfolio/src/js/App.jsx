import { Paragraph, Image, Heading, Link } from './components';
import profilePhoto from '../assets/images/profilePhoto.png';
import coding from '../assets/images/coding.jpg';
import gaming from '../assets/images/gaming.jpg';
import cooking from '../assets/images/cooking.jpg';
import biking from '../assets/images/biking.jpg';

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

const Main = () => {
  const languages = [
    ['React', 7],
    ['Javascript', 9],
    ['CSS', 8],
    ['Vue', 5],
    ['Redux', 4],
    ['React Native', 6],
  ];
  const Progress = () =>
    languages.map((lang) => {
      return (
        <li
          key={lang[0]}
          className="grid grid-cols-[1fr,1fr] md:grid-cols-[1fr,auto] place-items-center md:gap-6"
        >
          <Paragraph text={lang[0]} className="place-self-start" />
          <div className="flex relative h-fit w-full">
            <progress
              className="h-2 rounded-2xl"
              value={lang[1]}
              max={10}
            ></progress>
            <span
              className="h-full absolute bg-sky-500 top-0 left-0"
              style={{ width: `${lang[1] * 10}%` }}
            ></span>
          </div>
        </li>
      );
    });
  const Hobby = ({ image, activity, desc }) => {
    return (
      <div className="flex flex-col gap-2">
        <Image image={image} className="w-full rounded-2xl" />
        <Paragraph
          text={activity}
          className=" font-semibold text-lg capitalize"
        />
        <Paragraph text={desc} className=" text-gray3 font-quantico" />
      </div>
    );
  };
  return (
    <article className="flex flex-col md:flex-row gap-6 md:gap-8 rounded-xl ">
      <section className="flex flex-col gap-6 place-self-start lg:flex-[0.5] md:flex-[0.8]">
        {/* Front end */}
        <div className="bg-white p-4 rounded-2xl">
          <Paragraph
            text={'front end'}
            className="uppercase font-bold text-xl"
          />
          <ul className="grid grid-cols-1 gap-2">
            <Progress />
          </ul>
        </div>
        {/* Hobby */}

        <div className="bg-white rounded-2xl p-4 flex flex-col gap-4">
          <Paragraph text={'Hobbies'} className="uppercase font-bold text-xl" />
          <Hobby
            image={gaming}
            activity="gaming"
            desc={'Quisque feugiat malesuada molestie.'}
          />
          <Hobby
            image={cooking}
            activity="cooking"
            desc={'Quisque feugiat malesuada molestie.'}
          />
          <Hobby
            image={biking}
            activity="biking"
            desc={'Quisque feugiat malesuada molestie.'}
          />
        </div>
      </section>
      <section className="flex lg:w-10/12 md:flex-1">
        {/* blog */}
        <div className="bg-white flex flex-col rounded-2xl p-4 w-fit h-fit gap-4">
          <Paragraph text={'Blog'} className=" text-gray4" />
          <div className="flex justify-between w-fit flex-col-reverse lg:flex-row gap-4 lg:gap-0">
            <Paragraph
              text={'How to organize your CSS'}
              className={'text-gray5 font-medium text-xl lg:hidden'}
            />
            <div className="hidden lg:block lg:text-2xl ">
              <Paragraph text={'How to'} />
              <Paragraph text={'organize your '} />
              <Paragraph text={'CSS'} />
            </div>
            <Image
              image={coding}
              alt="blog photo"
              className="rounded-xl h-full w-full lg:w-8/12 max-w-full justify-self-end"
            />
          </div>
          <div className="flex flex-col text-gray3 text-base md:text-lg leading-9 font-quantico gap-2">
            <Paragraph
              text={`In this article I tell the story about Proin eu justo sit`}
              className="bold-sm"
            />
            <Paragraph
              text={`amet lacus bibendum tincidunt. Vivamus non volutpat nisl,`}
              className="bold-sm"
            />
            <Paragraph
              text={`a luctus mi.  
                Donec aliquam est dui, vel vestibulum diam sollicitudin id. 
                Quisque feugiat malesuada molestie.`}
              className="bold-sm"
            />
          </div>
          <Link
            href={'https://dev.to/'}
            text={'dev.to'}
            className="text-sky-700 hover:translate-x-1"
          />
        </div>
        {/* Experiences */}
      </section>
    </article>
  );
};

export default function App() {
  return (
    <main className="font-quicksand my-2 mx-4 md:mx-8 lg:mx-24 2xl:mx-32 text-gray1 flex flex-col gap-6">
      <Header />
      <Main />
    </main>
  );
}
