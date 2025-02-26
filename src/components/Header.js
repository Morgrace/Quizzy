const user = {
  id: 1124,
  name: 'Morgrace Precious',
  image: 'https://i.pravatar.cc/48?u=1124',
};
const imageSlide = [
  '/img/trophy-1.jpg',
  '/img/trophy-2.jpg',
  '/img/trophy-3.jpg',
];
const Header = function () {
  return (
    <header className="grid grid-cols-2 gap-8">
      <UserAccount />
      <DiamondToken />
      <Carousel />
    </header>
  );
};
const UserAccount = function () {
  return (
    <div className="flex gap-1 items-center text-[1.2rem] ">
      <img
        className="rounded-[50%] w-[4rem]"
        src={`${user['image']}`}
        alt="profile pix"
      />
      <div className="grid">
        <span className="font-semibold">{user['name']}</span>
        <span>ID-{user['id']}</span>
      </div>
    </div>
  );
};
const DiamondToken = function () {
  return (
    <div className="bg-[#4EA4FF] font-semibold !p-[.1rem_1rem] justify-self-end flex items-center gap-1 rounded-[5px] text-[1.2rem]">
      <svg className="w-[1.5rem] h-[1.5rem]">
        <use href="/img/icomoon/sprite.svg#icon-diamond"></use>
      </svg>
      160
    </div>
  );
};
const Carousel = function () {
  return (
    <div className=" rounded-[5px] w-full h-[20vh] bg-cover bg-center bg-no-repeat bg-(image:--bg-header) !p-[1.5rem_2.5rem] grid col-span-2 font-(family-name:--kufam)">
      <div className="text-[var(--offwhite)] w-[70%] grid">
        <h1 className="text-[1.4rem] font-semibold">
          Test Your Knowledge with Quizzes
        </h1>
        <p className="font-semibold text-[0.6rem]">
          You're just looking for a playful way to learn <br />
          new facts, our quizzes are designed to <br /> entertain and educate.
        </p>
        <button className="font-semibold text-[1rem] text-[#094298] justify-self-start bg-[#ffffff] rounded-[3px] !p-[.1rem_1rem] ">
          Play Now
        </button>
      </div>
    </div>
  );
};
export default Header;
