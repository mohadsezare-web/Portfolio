// components/SocialIcons.jsx
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function SocialIcons() {
  return (
    <div className=' text-pink-200 sm:mt-20 sm:ml-72 lg:mt-36 lg:ml-16 sm:justify-center lg:justify-start' style={{ display: 'flex', gap: '3rem', }}>
      <a href="https://github.com/mohadsezare-web" target="_blank" rel="noopener noreferrer">
        <FaGithub size={30} />
      </a>
      <a href="https://www.linkedin.com/in/mohadse-zare-54610b324/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={30} />
      </a>
      <a href="https://www.instagram.com/mohaddeseh.dev/?next=%2F" target="_blank" rel="noopener noreferrer">
        <FaInstagram size={30} />
      </a>
    </div>
  );
}
