import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export default function MobileDrawer({ isOpen, onClose }) {
  return (
    <div
      className={`fixed flex flex-col justify-center items-center z-10 top-0 right-0 h-full w-full bg-primary text-secondary transition-transform duration-300 transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >

      <button className="absolute top-6 right-6 text-secondary focus:outline-none" onClick={onClose}>
        <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <ul className="flex flex-col justify-center items-center space-y-4">
        <li className="text-3xl hover:text-blue-900 hover:font-semibold">
          <Link href="/">Home</Link>
        </li>
        <li className="text-3xl hover:text-blue-900 hover:font-semibold">
          <Link href="/">Company</Link>
        </li>
        <li className="text-3xl hover:text-blue-900 hover:font-semibold">
          <Link href="/">Services</Link>
        </li>
        <li className="text-3xl hover:text-blue-900 hover:font-semibold">
          <Link href="/">Portfolio</Link>
        </li>
        <li className="text-3xl hover:text-blue-900 hover:font-semibold">
          <Link href="/">Careers</Link>
        </li>
        <li className="text-3xl hover:text-blue-900 hover:font-semibold">
          <Link href="/">Contact Us</Link>
        </li>
      </ul>
    </div>
  );
}