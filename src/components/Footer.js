const icons = [
  '/img/icomoon/sprite.svg#icon-home',
  '/img/icomoon/sprite.svg#icon-grid',
  '/img/icomoon/sprite.svg#icon-heart',
  '/img/icomoon/sprite.svg#icon-user-o',
];
const Footer = function () {
  return (
    <footer className=" !mt-[2rem] bg-[rgba(171,194,227,.5)]">
      <ul className="flex justify-between !p-[1rem]">
        {icons.map(icon => (
          <Icon path={icon} />
        ))}
      </ul>
    </footer>
  );
};
const Icon = function ({ path }) {
  return (
    <li role="button">
      <svg className="w-[2.2rem] h-[2.2rem] fill-gray-500">
        <use href={path}></use>
      </svg>
    </li>
  );
};
export default Footer;
