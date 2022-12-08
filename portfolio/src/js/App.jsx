import { Paragraph, Image, Heading, Link } from './components';
import profilePhoto from '../assets/images/profilePhoto.png';
import coding from '../assets/images/coding.jpg';
import gaming from '../assets/images/gaming.jpg';
import cooking from '../assets/images/cooking.jpg';
import biking from '../assets/images/biking.jpg';
import adidas from '../assets/images/adidas_logo.png';
import netflix from '../assets/images/netflix.webp';
import checkout from '../assets/images/checkout.jpg';
import eddie from '../assets/images/eddie.jpg';
import recipe from '../assets/images/recipe.jpg';

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
        <Image
          image={image}
          className="w-full rounded-2xl md:h-[9rem] h-[8rem] lg:h-[11rem]"
        />
        <Paragraph
          text={activity}
          className="font-semibold text-lg capitalize"
        />
        <Paragraph text={desc} className="text-gray3 font-quantico" />
      </div>
    );
  };
  const Experience = ({ image, date, skill_level, desc }) => {
    return (
      <div className="flex justify-between items-start gap-4">
        <Image
          image={image}
          alt="experiences"
          className={
            'w-[8rem] md:w-[6rem] max-w-full h-[80%] md:h-[60%] lg:w-[8rem] lg:h-[80%] '
          }
        />
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Paragraph text={date} className={'text-sm text-gray3'} />
            <Paragraph text={skill_level} className=" font-bold" />
          </div>
          <div className="text-gray3">
            <Paragraph text={desc} className={'gray-2 text-sm lg:text-base'} />
          </div>
        </div>
      </div>
    );
  };
  return (
    <article className="flex flex-col md:flex-row gap-6 md:gap-8 rounded-xl ">
      <section className="flex flex-col gap-6 place-self-start lg:flex-[0.5] md:flex-[0.8] w-full md:w-auto">
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
      <section className="flex lg:w-10/12 md:flex-1 flex-col gap-6">
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
        <div className="bg-white flex flex-col gap-4 md:gap-0 items-start p-4 rounded-2xl h-full">
          <Paragraph
            text={'Experiences'}
            className="uppercase font-bold text-xl"
          />
          <div className="flex flex-col h-full justify-around gap-6 md:gap-0">
            <Experience
              image={adidas}
              date={'Feb 2022 - Current'}
              skill_level={'Front-end developer'}
              desc={`Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada`}
            />
            <Experience
              image={netflix}
              date={'Aug 2016 - Feb 2018'}
              skill_level={'Full-stack developer'}
              desc={`Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada`}
            />
          </div>
        </div>
      </section>
    </article>
  );
};

const skills = ['React', 'Vue', 'Responsive'];

const Nav = () => {
  const ListLanguages = () =>
    skills.map((skill) => {
      return (
        <li key={skill}>
          <button className="outline outline-1 hover:bg-sky-500 hover:text-white py-2 px-4 text-xl rounded-xl">
            {skill}
          </button>
        </li>
      );
    });
  return (
    <section className="bg-white rounded-2xl p-4 flex flex-col gap-4">
      <Paragraph
        text={`Projects (${skills.length})`}
        className="text-xl lg:text-2xl font-normal"
      />
      <ul className="flex gap-4">
        <ListLanguages />
      </ul>
    </section>
  );
};

const Footer = ({ image, hashtags, title, desc, demo, code }) => {
  const ModifiedLinks = () => hashtags.map((tag) => <li key={tag}>#{tag}</li>);

  return (
    <div className="flex flex-col p-4 bg-white w-fit gap-4">
      <Image
        image={image}
        alt="image"
        className={'w-3/5 self-center rounded-2xl'}
      />
      <div className="flex flex-col gap-4">
        <ul className="flex gap-2 uppercase">
          <ModifiedLinks />
        </ul>
        <Paragraph text={title} className={'text-xl font-bold'} />
        <Paragraph text={desc} />
        <div className="flex gap-4">
          <Link
            className=" cursor-pointer rounded-xl outline outline-1 outline-sky-500 hover:bg-sky-500 hover:text-white bg-white py-2 px-4"
            text={'Demo'}
            href={demo}
          />
          <Link
            className="rounded-xl outline outline-1 outline-sky-500 hover:bg-sky-500 bg-white py-2 px-4 cursor-pointer hover:text-white"
            text={'Code'}
            href={code}
          />
        </div>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <main className="font-quicksand my-2 mx-4 md:mx-8 lg:mx-24 2xl:mx-32 text-gray1 flex flex-col gap-6">
      <Header />
      <Main />
      <Nav />
      <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
        <Footer
          image={checkout}
          hashtags={['html', 'css', 'responsive']}
          title={'Checkout'}
          desc={`In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io`}
          demo={'https://zerebel.github.io/checkout-page/'}
          code={'https://github.com/Zerebel/checkout-page'}
        />

        <Footer
          image={recipe}
          hashtags={['html', 'css', 'responsive']}
          title={'Recipe Blog'}
          desc={`In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io`}
          demo={'https://zerebel.github.io/recipe-blog/'}
          code={'https://github.com/Zerebel/recipe-blog'}
        />
        <Footer
          image={eddie}
          hashtags={['html', 'css', 'responsive']}
          title={'Eddie Homepage'}
          desc={`In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io`}
          demo={'https://zerebel.github.io/eddie-homepage/'}
          code={'https://github.com/Zerebel/eddie-homepage'}
        />
      </footer>
      <Link
        href={'https://github.com/Zerebel'}
        text={'created by Zerebel - devChallenges.io'}
        className={'text-center text-gray3'}
      />
    </main>
  );
}
