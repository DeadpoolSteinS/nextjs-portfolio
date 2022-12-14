const NavbarLink = (props) => {
  return (
    <li>
      <a
        href="#"
        className="font-bold opacity-50 block px-5 overflow-hidden [&:hover>span]:-translate-y-full [&:hover>span]:text-[#ffc200]"
      >
        <span
          data-hover={props.name}
          className="transition-transform inline-block relative before:content-[attr(data-hover)] before:absolute before:top-full"
        >
          {props.name}
        </span>
      </a>
    </li>
  );
};

export default NavbarLink;
