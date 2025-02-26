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
const RecentActivity = function () {
  return (
    <div className="!mt-[2rem] ">
      <h3 className="text-[1.2rem] !mb-[1rem]">Recent Activity</h3>
      <ul className="grid gap-[2rem] overflow-y-scroll max-h-[36vh] !p-2">
        {items.map(item => (
          <Activity
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
const Activity = function ({ name, color, path }) {
  return (
    <li
      role="button"
      className="flex gap-2 items-center shadow-[.2rem_.5rem_1rem_rgba(0,0,0,.3)] !p-[1.2rem] rounded-[3px]"
    >
      <figure className="!p-[.5rem_1.5rem] bg-[rgba(171,194,227,.4)]">
        <svg className={`w-[3rem] h-[3rem] fill-[${color}]`}>
          <use href={path}></use>
        </svg>
      </figure>
      <div className="grid">
        <span className=" uppercase">{name}</span>
        <span className="text-[.8rem]">50 Questions </span>
      </div>
      <span
        className={`!ml-auto rounded-[50%] bg-[${color}] aspect-[1] !p-[.5rem] flex items-center text-[.8rem] border-[.2rem] border-[${color}]`}
      >
        20/30
      </span>
    </li>
  );
};
export default RecentActivity;
