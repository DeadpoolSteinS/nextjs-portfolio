const NavbarLink = ({name}) => {
  return (
    <li>
      <a
        href={`#${name.toLowerCase()}`}
        className="font-bold opacity-50 block px-5 overflow-hidden [&:hover>span]:-translate-y-full [&:hover>span]:text-[#ffc200]"
      >
        <span
          data-hover={name}
          className="transition-transform inline-block relative before:content-[attr(data-hover)] before:absolute before:top-full"
        >
          {name}
        </span>
      </a>
    </li>
  );
};

export default NavbarLink;
