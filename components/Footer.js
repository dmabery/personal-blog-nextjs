import Image from "next/image";
import LinkText from "./LinkText";

const footerLink = [
  {
    title: "Twitter",
    link: "https://www.twitter.com/dltnio",
  },
  {
    title: "YouTube",
    link: "https://www.youtube.com/daltonmabery",
  },
  {
    title: "GitHub",
    link: "https://github.com/dmabery",
  },
];

const Footer = () => (
  <div className="bg-black py-10 text-white">
    <div className="container mx-auto mt-10 flex max-w-[1000px] justify-between px-5 lg:px-0">
      <div className="flex flex-col">
        <p className="mb-4 font-serif font-bold">Stay curious.</p>
        {footerLink.map((link) => (
          <LinkText
            slug={link.link}
            text={link.title}
            type="small"
            key={link.title}
          />
        ))}
      </div>
      <Image
        src="/reading book.png"
        width={95}
        height={100}
        alt="astronaut on planet reading a book"
      />
    </div>
  </div>
);

export default Footer;
