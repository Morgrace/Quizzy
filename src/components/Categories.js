const items = [
  {
    name: 'General',
    color: '#78909C',
    href: 'img/icomoon/sprite.svg#icon-library',
  },
  {
    name: 'Mathematics',
    color: '#1E88E5',
    href: 'img/icomoon/sprite.svg#icon-stats-dots',
  },
  {
    name: 'Nature',
    color: '#4CAF50',
    href: 'img/icomoon/sprite.svg#icon-leaf',
  },
  {
    name: 'Sports',
    color: '#F44336',
    href: 'img/icomoon/sprite.svg#icon-sports_soccer',
  },
  {
    name: 'Random',
    color: '#9C27B0',
    href: 'img/icomoon/sprite.svg#icon-random',
  },
];
const Categories = function () {
  return (
    <div className="!mt-[2rem]">
      <h3 className="text-[1.2rem] !mb-[1rem]">Categories</h3>
      <ul className="grid grid-cols-[repeat(auto-fit,_minmax(0,1fr))] gap-[1.2rem]">
        {items.map(item => (
          <Items
            key={item.name}
            name={item.name}
            color={item.color}
            path={item.href}
          />
        ))}
      </ul>
    </div>
  );
};
const Items = function ({ name, color, path }) {
  return (
    <li role="button" className="grid justify-items-center gap-2">
      <figure className="!p-[.5rem_1.2rem] bg-[rgba(171,194,227,.4)] rounded-[3px]">
        <svg className={`w-[3rem] h-[3rem] fill-[${color}]`}>
          <use href={path}></use>
        </svg>
      </figure>
      <span className="text-[.8rem] uppercase">{name}</span>
    </li>
  );
};
export default Categories;
