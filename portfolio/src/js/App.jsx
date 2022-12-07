import { Paragraph, Image, Heading } from './components';
import profilePhoto from '../assets/images/profilePhoto.png';

const Header = () => {
  return (
    <article className="flex flex-col justify-center items-center md:flex-row md:items-start md:justify-start">
      {/* image */}
      <div>
        <Image
          image={profilePhoto}
          alt={'Profile Photo'}
          className={' rounded-xl w-44'}
        />
      </div>
      {/* Info */}
      <div>
        <Heading
          text={'Tanu Zerebel'}
          classname={'text-gray1 font-medium text-2xl'}
        />
      </div>
    </article>
  );
};

export default function App() {
  return (
    
    <main className="font-quicksand my-2 mx-4">
      <Header />
    </main>
  );
}
